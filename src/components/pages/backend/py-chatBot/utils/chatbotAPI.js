export const getIntent = async (message) => {
    try {
        console.log("Sending intent request:", message);
        const response = await fetch("http://127.0.0.1:8000/predict_intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        console.log("Intent response:", data);  // Debugging

        return data.intent;
    } catch (error) {
        console.error("Error fetching intent:", error);
        return "unknown_intent";
    }
};

export const getFAQResponse = async (message) => {
    try {
        console.log("Sending FAQ request:", message);
        const response = await fetch("http://127.0.0.1:8000/get_faq_answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        console.log("FAQ raw response:", data); // Debugging full response

        if (!data || typeof data !== "object") {
            console.error("Invalid response format:", data);
            return "Sorry, I couldn't process your request.";
        }

        return data.answer || "Sorry, no answer found."; // ✅ Extract the correct field
    } catch (error) {
        console.error("Error fetching chatbot response:", error);
        return "Sorry, I couldn't process your request.";
    }
};

// ✅ New function to check eligibility
export const checkEligibility = async (age, weight, bloodPressure, medicalConditions) => {
    try {
        console.log("Sending eligibility request:", { age, weight, bloodPressure, medicalConditions });

        const response = await fetch("http://127.0.0.1:8000/check_eligibility", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                age,
                weight,
                blood_pressure: bloodPressure, 
                medical_conditions: medicalConditions
            }),
        });

        const data = await response.json();
        console.log("Eligibility response:", data); // Debugging

        return data.eligibility || "Error processing eligibility.";
    } catch (error) {
        console.error("Error fetching eligibility:", error);
        return "Error checking eligibility.";
    }
};
