import os
import pandas as pd
import torch
import numpy as np
from sentence_transformers import SentenceTransformer
from safetensors.torch import load_file

# Define model path
MODEL_PATH = "src/components/pages/backend/py-chatBot/chatbotModels/fine_tuned_sbert"
SAFE_TENSORS_PATH = os.path.join(MODEL_PATH, "model.safetensors")
BIN_MODEL_PATH = os.path.join(MODEL_PATH, "pytorch_model.bin")

# Convert model.safetensors to pytorch_model.bin if needed
if os.path.exists(SAFE_TENSORS_PATH) and not os.path.exists(BIN_MODEL_PATH):
    print("Converting model.safetensors to pytorch_model.bin...")
    state_dict = load_file(SAFE_TENSORS_PATH)
    torch.save(state_dict, BIN_MODEL_PATH)
    print("Conversion complete!")

# Load fine-tuned SBERT model with explicit device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

try:
    model = SentenceTransformer(MODEL_PATH, device=str(device))
    print(f"SBERT model loaded successfully on {device}!")
except Exception as e:
    print(f"Error loading SBERT model: {e}")

# Load FAQ dataset
faq_df = pd.read_csv("src/components/pages/backend/py-chatBot/chatbotModels/faq_dataset.csv")  # Ensure this file is available
questions = faq_df["Question"].tolist()
answers = faq_df["Answer"].tolist()

# Encode all FAQ questions in advance (for faster lookup)
try:
    faq_embeddings = model.encode(questions, convert_to_tensor=True, device=device)
    print("FAQ embeddings generated successfully!")
except Exception as e:
    print(f"Error generating FAQ embeddings: {e}")

def get_faq_answer(user_query):
    """Find the most similar FAQ question using cosine similarity."""
    try:
        query_embedding = model.encode(user_query, convert_to_tensor=True, device=device)
        # Compute cosine similarity
        similarities = torch.nn.functional.cosine_similarity(faq_embeddings, query_embedding)
        # Get best match
        best_match_idx = torch.argmax(similarities).item()
        return {
            "question": questions[best_match_idx],
            "answer": answers[best_match_idx],
            "similarity_score": float(similarities[best_match_idx].item())  # Convert to float for API response
        }
    except Exception as e:
        return {"error": f"Error processing the query: {str(e)}"}
