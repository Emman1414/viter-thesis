
from transformers import BertForSequenceClassification

model_path = "C:/xampp/htdocs/viter-thesis/src/components/pages/backend/py-chatBot/chatbotModels/intent_recognition/Intent_Recognition_BERT_Model_1"
model = BertForSequenceClassification.from_pretrained(model_path)

# Save the model in safetensors format
model.save_pretrained(model_path, safe_serialization=True)

print("Model successfully converted to safetensors format!")
