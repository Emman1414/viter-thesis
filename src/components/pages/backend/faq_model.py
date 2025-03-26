import torch
import numpy as np
from sentence_transformers import SentenceTransformer
import pandas as pd
import os
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

# Load fine-tuned SBERT model
model = SentenceTransformer(MODEL_PATH)

# Load FAQ dataset
faq_df = pd.read_csv("src/components/pages/backend/py-chatBot/chatbotModels/faq_dataset.csv")  # Ensure this file is available
questions = faq_df["Question"].tolist()
answers = faq_df["Answer"].tolist()

# Encode all FAQ questions in advance (for faster lookup)
faq_embeddings = model.encode(questions)

def get_faq_answer(user_query):
    """Find the most similar FAQ question using cosine similarity."""
    query_embedding = model.encode(user_query)
    
    # Compute cosine similarity
    similarities = np.dot(faq_embeddings, query_embedding)
    
    # Get best match
    best_match_idx = np.argmax(similarities)
    
    return {
        "question": questions[best_match_idx],
        "answer": answers[best_match_idx],
        "similarity_score": float(similarities[best_match_idx])  # Convert to float for API response
    }
