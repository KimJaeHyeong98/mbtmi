from dotenv import load_dotenv
import os
from typing import Dict, Any, List
from google.cloud import aiplatform, storage
from google.oauth2 import service_account

# -----------------------------
# .env 읽기
# -----------------------------
load_dotenv()

PROJECT_ID = os.environ.get("GCP_PROJECT_ID")
REGION = os.environ.get("GCP_REGION", "asia-northeast3")
BUCKET_NAME = os.environ.get("GCP_BUCKET_NAME")
SERVICE_ACCOUNT_JSON = os.environ.get("GCP_SERVICE_JSON_PATH")

# JSON 파일로 credentials 생성
credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_JSON)

# Vertex AI 초기화
aiplatform.init(
    project=PROJECT_ID,
    location=REGION,
    staging_bucket=f"gs://{BUCKET_NAME}",
    credentials=credentials
)

# ------------------------------
# 1) GCS 업로드
# ------------------------------
def upload_to_gcs(local_path: str, bucket_name: str, dest_blob_name: str) -> str:
    client = storage.Client(credentials=credentials, project=PROJECT_ID)
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(dest_blob_name)
    blob.upload_from_filename(local_path)
    gcs_path = f"gs://{bucket_name}/{dest_blob_name}"
    print(f"[GCS] Uploaded {local_path} -> {gcs_path}")
    return gcs_path

# ------------------------------
# 2) 학습
# ------------------------------
def train_model(gcs_csv_path: str, model_display_name: str = "mbti_matching_model") -> str:
    dataset = aiplatform.TabularDataset.create(
        display_name="mbti_matching_dataset",
        gcs_source=[gcs_csv_path],
        credentials=credentials
    )

    training_job = aiplatform.AutoMLTabularTrainingJob(
        display_name=model_display_name,
        optimization_prediction_type="classification",
        optimization_objective="maximize-au-roc",
        credentials=credentials
    )

    model = training_job.run(
        dataset=dataset,
        target_column="ACTION",
        model_display_name=model_display_name,
        budget_milli_node_hours=1000,
        disable_early_stopping=False
    )
    return model.resource_name

# ------------------------------
# 3) 모델 배포
# ------------------------------
def deploy_model(model_resource_name: str, endpoint_display_name: str = "mbti_matching_endpoint",
                 machine_type: str = "n1-standard-2") -> str:
    model = aiplatform.Model(model_resource_name, credentials=credentials)
    endpoint = aiplatform.Endpoint.create(display_name=endpoint_display_name, credentials=credentials)
    model.deploy(endpoint=endpoint, deployed_model_display_name=f"{model.display_name}-deployed",
                 machine_type=machine_type, traffic_split={"0": 100})
    return endpoint.resource_name

# ------------------------------
# 4) 예측
# ------------------------------
def predict_with_endpoint(endpoint_resource_name: str, instances: List[Dict[str, Any]]):
    endpoint = aiplatform.Endpoint(endpoint_resource_name, credentials=credentials)
    prediction = endpoint.predict(instances)
    return prediction
