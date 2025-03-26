import torch
from transformers import BertForSequenceClassification, BertTokenizer

# Load label encoder for intent mapping
intent_mapping = {
    "appointment_booking": 0,
    "appointment_reschedule": 1,
    "eligibility_check": 2,
    "faq_after_donation": 3,
    "faq_age_requirement": 4,
    "faq_before_donation": 5,
    "faq_blood_shortages": 6,
    "faq_blood_types": 7,
    "faq_donation_duration": 8,
    "faq_donation_frequency": 9,
    "faq_donation_process": 10,
    "faq_food_recommendations": 11,
    "faq_health_conditions": 12,
    "faq_infection_risk": 13,
    "faq_medication": 14,
    "faq_pain_or_discomfort": 15,
    "faq_red_cross_info": 16,
    "faq_requirements": 17,
    "faq_safety_blood_donation": 18,
    "faq_side_effects": 19,
    "faq_weight_requirement": 20,
    "faq_why_donate": 21,
    "goodbye": 22,
    "greeting": 23,
    "location_query": 24,
    "thank_you": 25,
    "unknown_intent": 26,
    "urgent_blood_needed": 27
}

# Model and tokenizer paths
model_path = "src/components/pages/backend/py-chatBot/chatbotModels/intent_recognition/Intent_Recognition_BERT_Model_1"
tokenizer_path = "src/components/pages/backend/py-chatBot/chatbotModels/intent_recognition/Intent_Recognition_BERT_Tokenizer_1"

# Load model and tokenizer
model = BertForSequenceClassification.from_pretrained(model_path, use_safetensors=True)
tokenizer = BertTokenizer.from_pretrained(tokenizer_path)

print("Intent recognition model and tokenizer loaded successfully!")

def get_intent(text):
    """Predict the intent of a user message"""
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=128)

    with torch.no_grad():
        outputs = model(**inputs)

    predicted_class = torch.argmax(outputs.logits, dim=1).item()
    intent_label = list(intent_mapping.keys())[predicted_class]  

    return intent_label
