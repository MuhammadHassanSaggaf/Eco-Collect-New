from huggingface_hub import InferenceClient
import os

# ✅ Get your Hugging Face token from environment variable (safer)
# Add it in Render → Dashboard → Environment → Add "HF_TOKEN"
HF_TOKEN = os.getenv("HF_TOKEN")

# Use a lightweight, general-purpose image classification model
MODEL_NAME = "microsoft/resnet-50"

# Initialize the inference client
client = InferenceClient(model=MODEL_NAME, token=HF_TOKEN)

def predict(image_path):
    """
    Sends the image to Hugging Face Inference API and returns the predicted label + confidence.
    """
    with open(image_path, "rb") as f:
        image_bytes = f.read()

    # Send request to model
    response = client.post(
        json=None,
        data=image_bytes,
        headers={"Content-Type": "image/jpeg"}
    )

    # The API returns a list of predictions with 'label' and 'score'
    # Example: [{'label': 'recycling_bin', 'score': 0.97}]
    if isinstance(response, list) and len(response) > 0:
        top = response[0]
        return {
            "category": top.get("label", "Unknown"),
            "confidence": round(top.get("score", 0) * 100, 2)
        }
    else:
        return {"category": "Unknown", "confidence": 0.0}
