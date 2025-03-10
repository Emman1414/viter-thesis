from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from src.components.pages.backend.intent_model import get_intent
from src.components.pages.backend.faq_model import get_faq_answer  # Correct import path
from src.components.pages.backend.eligibility_model import router as eligibility_router

app = FastAPI()

# ✅ Include the eligibility model API
app.include_router(eligibility_router)

# ✅ Allow frontend to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ FAQ Endpoint
class FAQInput(BaseModel):
    message: str

@app.post("/get_faq_answer")
def get_faq_response(input_data: FAQInput):
    """Get the most relevant FAQ response for a user query"""
    response = get_faq_answer(input_data.message)
    return response

# ✅ Intent Recognition Endpoint
class ChatInput(BaseModel):
    message: str

@app.post("/predict_intent")
def predict_intent(input_data: ChatInput):
    """Predict the intent of a user message"""
    intent_label = get_intent(input_data.message)
    return {"intent": intent_label}



# ✅ Run with:
# uvicorn src.components.pages.backend.main:app --reload
