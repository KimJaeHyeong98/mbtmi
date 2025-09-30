from dotenv import load_dotenv
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from automl import predict_with_endpoint
import traceback

# -----------------------------
# .env 읽기
# -----------------------------
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=[
    "http://localhost:5173", "http://localhost:5174"
])

# Endpoint 리소스 환경변수
ENDPOINT_RESOURCE = os.environ.get("GCP_AUTOML_ENDPOINT")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error": "JSON body is required"}), 400
    try:
        prediction = predict_with_endpoint(ENDPOINT_RESOURCE, [data])
        pred_value = getattr(prediction, "predictions", None)
        if not pred_value:
            return jsonify({"error": "No predictions returned from AutoML"}), 500
        pred_dict = pred_value[0]
        classes = pred_dict.get("classes", [])
        scores = pred_dict.get("scores", [])
        if not classes or not scores:
            return jsonify({"error": "Predictions missing 'classes' or 'scores'"}), 500
        results = [{"label": l, "score": float(s)} for l, s in zip(classes, scores)]
        return jsonify({"instances": [data], "prediction": results})
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": f"AutoML 호출 실패: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
