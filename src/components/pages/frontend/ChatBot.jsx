import React, { useState, useEffect } from "react";
import { X, SendHorizontal, MessageSquare } from "lucide-react"; // Icons for UI
import { imgPath } from "@/components/helpers/functions-general";

const MAX_WORDS = 50; // Maximum allowed words per sent message

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMessages([{ sender: "bot", text: "Hello! What is your concern?" }]);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = (text) => {
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
  };

  return (
    <div className="fixed bottom-6 right-6">
      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-full md:w-80 md:h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-myred text-white p-3 flex justify-between items-center">
            <span className="flex gap-2 items-center justify-center text-center">
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

          {/* Chat Messages */}
          <div className="flex-grow p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-xs break-words overflow-x-auto ${
                    msg.sender === "user"
                      ? "bg-myred text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage(input);
                }
              }}
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

      {/* Floating Chat Button: show only when chatbox is closed */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-white border-2 border-gray-300 p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-myred hover:border-white transition-all"
        >
          <MessageSquare className="w-6 h-6" fill="white" strokeWidth="1" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
