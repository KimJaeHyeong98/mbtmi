from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
import pandas as pd
import oracledb
from google.cloud import storage

# -----------------------------
# .env 읽기
# -----------------------------
load_dotenv()

app = Flask(__name__)

# -----------------------------
# 환경변수
# -----------------------------
WALLET_DIR = os.environ.get("ORACLE_WALLET_DIR")
DB_USER = os.environ.get("ORACLE_DB_USER")
DB_PASSWORD = os.environ.get("ORACLE_DB_PASSWORD")
DB_DSN = os.environ.get("ORACLE_DB_DSN")

GCS_BUCKET_NAME = os.environ.get("GCP_BUCKET_NAME")
GCS_BLOB_PATH = "datasets/mbti_dataset.csv"

# Oracle Client 초기화
try:
    oracledb.init_oracle_client(config_dir=WALLET_DIR)
    print("Oracle Client 초기화 완료")
except Exception as e:
    print("Oracle Client 초기화 실패:", e)
    exit()

@app.route("/export", methods=["POST"])
def export_to_vertex():
    try:
        conn = oracledb.connect(user=DB_USER, password=DB_PASSWORD, dsn=DB_DSN)
        print("Oracle DB 연결 성공")
        query = """
                SELECT ... FROM USERS u ORDER BY u.user_id \
                """  # 기존 쿼리 그대로
        df = pd.read_sql(query, conn)
        conn.close()
        os.makedirs("data", exist_ok=True)
        local_csv_path = "data/mbti_dataset.csv"
        df.to_csv(local_csv_path, index=False, encoding="utf-8-sig")
        print(f"CSV 파일 생성 완료: {local_csv_path}")
        # GCS 업로드
        gcs_client = storage.Client()
        bucket = gcs_client.bucket(GCS_BUCKET_NAME)
        blob = bucket.blob(GCS_BLOB_PATH)
        blob.upload_from_filename(local_csv_path)
        print(f"GCS 업로드 완료: {GCS_BUCKET_NAME}/{GCS_BLOB_PATH}")
        return jsonify({"status": "ok", "rows": len(df), "file": local_csv_path})
    except Exception as e:
        print("CSV 생성 중 오류 발생:", e)
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5002, debug=True)
