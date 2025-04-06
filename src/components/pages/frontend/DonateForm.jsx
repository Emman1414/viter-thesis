import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const DonateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    donationType: "",
    preferredDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxfNIag7-k57V72dJ94dismQI49_99ARl_YJtOTXwOgKIPznK0AV9Su3UMp2Un_2Q8WbA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // Use formData instead of requestBody
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
      alert(result.message || "Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "Failed to submit form. Please check your connection and try again."
      );
    }
  };

  return (
    <>
      <Header />
      <section className="py-5 mt-[100px] mb-10">
        <div className="container mx-auto px-4 max-w-[900px] md:max-w-[600px] sm:max-w-full">
          <h1 className="text-3xl font-bold mb-4 text-center bg-myred text-white p-2 rounded-md">
            Donation Form
          </h1>
          <p className="text-center">
            You’re eligible to donate! Please complete the form below.
          </p>
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2">Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded h-24"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2">Donation Type</label>
              <select
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select donation type</option>
                <option value="wholeBlood">Whole Blood</option>
                <option value="platelets">Platelets</option>
                <option value="plasma">Plasma</option>
                <option value="doubleRed">Double Red Cells</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Preferred Donation Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigate("/")}
                className="p-3 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="p-3 bg-myred text-white rounded-lg"
              >
                Submit Donation Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateForm;
