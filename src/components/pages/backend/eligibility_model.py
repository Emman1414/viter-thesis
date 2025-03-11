from fastapi import APIRouter, HTTPException
import joblib
import pandas as pd
from pydantic import BaseModel
import os


# ✅ Define paths for model, scaler, and label encoders
BASE_PATH = "src/components/pages/backend/py-chatBot/chatbotModels/eligibility_model/"
MODEL_PATH = os.path.join(BASE_PATH, "faq_random_forest.pkl")
SCALER_PATH = os.path.join(BASE_PATH, "scaler.pkl")
ENCODER_BP_PATH = os.path.join(BASE_PATH, "label_encoder_bp.pkl")
ENCODER_MEDICAL_PATH = os.path.join(BASE_PATH, "label_encoder_medical.pkl")

# ✅ Load trained model, scaler, and encoders
rf_model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)
label_enc_bp = joblib.load(ENCODER_BP_PATH)
label_enc_medical = joblib.load(ENCODER_MEDICAL_PATH)

# ✅ Initialize FastAPI router
router = APIRouter()

# ✅ Define input format
class EligibilityInput(BaseModel):
    age: int
    weight: float
    blood_pressure: str  # e.g., "120/80"
    medical_conditions: str  # e.g., "Asthma"

def preprocess_input(data: EligibilityInput):
    """Convert user input into the correct format for the model."""
    try:
        # ✅ Extract systolic & diastolic blood pressure
        systolic, diastolic = map(int, data.blood_pressure.split('/'))

        # ✅ Encode 'Medical Conditions' using LabelEncoder
        if data.medical_conditions in label_enc_medical.classes_:
            medical_condition_encoded = label_enc_medical.transform([data.medical_conditions])[0]
        else:
            medical_condition_encoded = label_enc_medical.transform(["Unknown"])[0]  # Use a default category

        # ✅ Default values for missing features
        bp_classification = 0  # Default BP classification (Normal)
        body_temperature = 36.5  # Normal body temperature
        last_donation = 12  # Months since last donation

        # ✅ Create DataFrame with correct feature names & order
        input_features = pd.DataFrame([[
            data.age,  # --> "Age"
            data.weight,  # --> "Weight (kg)"
            bp_classification,  # --> "BP Classification"
            body_temperature,  # --> "Body Temperature (°C)"
            last_donation,  # --> "Last Donation (months)"
            medical_condition_encoded,  # --> "Medical Conditions"
            systolic,  # --> "systolic"
            diastolic  # --> "diastolic"
        ]], columns=[
            "Age", "Weight (kg)", "BP Classification", "Body Temperature (°C)",
            "Last Donation (months)", "Medical Conditions", "systolic", "diastolic"
        ])

        # ✅ Debug: Check column order before scaling
        print("Final input feature order:", input_features.columns.tolist())
        print("Input features before scaling:\n", input_features)

        # ✅ Scale features
        input_features_scaled = scaler.transform(input_features)
        return input_features_scaled

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Input processing error: {str(e)}")

@router.post("/check_eligibility")
async def check_eligibility(input_data: EligibilityInput):
    """API Endpoint for blood donation eligibility prediction."""
    try:
        processed_data = preprocess_input(input_data)
        prediction = rf_model.predict(processed_data)[0]
        eligibility_result = "Eligible" if prediction == 1 else "Not Eligible"
        return {"eligibility": eligibility_result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
