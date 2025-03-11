import React, { useState, useEffect } from "react";
import { X, SendHorizontal, MessageSquare } from "lucide-react";
import {
  getIntent,
  getFAQResponse,
  checkEligibility,
} from "@/components/pages/backend/py-chatBot/utils/chatbotAPI";
import { imgPath } from "@/components/helpers/functions-general";
import ReactMarkdown from "react-markdown";

const MAX_WORDS = 50;
const APPOINTMENT_FORM_LINK = "https://redcross.org/appointment";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [eligibilityStep, setEligibilityStep] = useState(0);
  const [eligibilityData, setEligibilityData] = useState({
    age: "",
    weight: "",
    bloodPressure: "",
    medicalConditions: "",
  });
  const [waitingForEligibilityResponse, setWaitingForEligibilityResponse] =
    useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    setMessages([{ sender: "bot", text: "Hello! What is your concern?" }]);

    const handleResize = () => {
      setIsKeyboardOpen(window.innerHeight < window.screen.height * 0.8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    const words = text.trim().split(/\s+/);
    const trimmedText =
      words.length > MAX_WORDS ? words.slice(0, MAX_WORDS).join(" ") : text;

    const userMessage = {
      sender: "user",
      text: trimmedText,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (waitingForEligibilityResponse) {
      await handleEligibilityInput(trimmedText);
      return;
    }

    const intent = await getIntent(trimmedText);
    const faqResponse = await getFAQResponse(trimmedText);
    let botMessage;

    if (intent === "eligibility_check" || intent === "appointment_booking") {
      botMessage = {
        sender: "bot",
        text: `${faqResponse} Would you like to check your eligibility for donation? (Yes/No)`,
      };
      setWaitingForEligibilityResponse(true);
    } else {
      botMessage = {
        sender: "bot",
        text: faqResponse || "I don't have an answer for that.",
      };
    }

    setMessages((prev) => [...prev, botMessage]);
  };

  const handleEligibilityInput = async (text) => {
    let botMessage;

    if (eligibilityStep === 0) {
      if (text.toLowerCase() === "yes") {
        setEligibilityStep(1);
        botMessage = {
          sender: "bot",
          text: "Let's check your eligibility! First, what is your *age*?",
        };
      } else if (text.toLowerCase() === "no") {
        botMessage = {
          sender: "bot",
          text: "Okay! Let me know if you have any other questions.",
        };
        resetEligibilityFlow();
      } else {
        botMessage = {
          sender: "bot",
          text: "I didn’t understand that. Please answer with 'Yes' or 'No'.",
        };
      }
    }

    if (botMessage) setMessages((prev) => [...prev, botMessage]);
  };

  const resetEligibilityFlow = () => {
    setEligibilityStep(0);
    setEligibilityData({
      age: "",
      weight: "",
      bloodPressure: "",
      medicalConditions: "",
    });
    setWaitingForEligibilityResponse(false);
  };

  return (
    <div className="fixed bottom-6 right-6">
      {isOpen && (
        <div
          className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-full md:w-80 ${
            isKeyboardOpen ? "h-[60%]" : "md:h-96"
          } bg-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50`}
        >
          <div className="bg-myred text-white p-3 flex justify-between items-center">
            <span className="flex gap-2 items-center justify-center">
              <img
                className="size-4"
                src="../img/red-cross-logo.png"
                alt="Philippine Red Cross Logo"
              />
              Philippine Red Cross
            </span>
            <button onClick={toggleChat}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-xs break-words ${
                    msg.sender === "user"
                      ? "bg-myred text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage(input)}
            />
            <button
              className="text-myred px-4 rounded-r-lg m-2"
              onClick={() => handleSendMessage(input)}
            >
              <SendHorizontal />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-white border-2 border-gray-300 p-4 rounded-full shadow-lg hover:bg-myred"
        >
          <MessageSquare className="w-6 h-6" fill="white" strokeWidth="1" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
