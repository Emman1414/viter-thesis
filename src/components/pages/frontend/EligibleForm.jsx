import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const EligibleForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    systolicBP: "",
    diastolicBP: "",
    hemoglobin: "",
    condition: "",
    medication: "",
    lastDonationMonths: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkEligibility = () => {
    const {
      age,
      weight,
      systolicBP,
      diastolicBP,
      hemoglobin,
      condition,
      medication,
      lastDonationMonths,
    } = formData;

    if (
      age >= 18 &&
      age <= 65 &&
      weight >= 50 &&
      hemoglobin >= 12.5 &&
      systolicBP >= 90 &&
      systolicBP <= 180 &&
      diastolicBP >= 60 &&
      diastolicBP <= 100 &&
      condition === "none" &&
      medication !== "disqualifying" &&
      lastDonationMonths >= 0
    ) {
      sessionStorage.setItem("isEligible", "true"); // Store eligibility
      navigate("/donate");
    } else {
      sessionStorage.setItem("isEligible", "false"); // Prevent access
      if (
        window.confirm(
          "You are not eligible to donate. Click OK to return to homepage."
        )
      ) {
        navigate("/");
      }
    }
  };

  return (
    <>
      <Header />
      <section className="py-5 mt-[100px] mb-10">
        <div className="container mx-auto px-4 max-w-[900px]">
          <h1 className="text-3xl font-bold mb-4 text-center bg-myred text-white p-2 rounded-md">
            Donation Eligibility Check
          </h1>
          <p className="text-center">
            Please provide your medical information to check if you’re eligible
            to donate.
          </p>
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Medical Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block mb-2">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="Enter your weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-2">Systolic Blood Pressure</label>
                <input
                  type="number"
                  name="systolicBP"
                  placeholder="e.g. 120"
                  value={formData.systolicBP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block mb-2">Diastolic Blood Pressure</label>
                <input
                  type="number"
                  name="diastolicBP"
                  placeholder="e.g. 80"
                  value={formData.diastolicBP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Hemoglobin Level (g/dL)</label>
              <input
                type="number"
                name="hemoglobin"
                placeholder="Enter your hemoglobin level"
                value={formData.hemoglobin}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2">Medical Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select your medical condition</option>
                <option value="none">None</option>
                <option value="chronic">Chronic Illness</option>
                <option value="infection">Infectious Disease</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Current Medications</label>
              <select
                name="medication"
                value={formData.medication}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select your medication status</option>
                <option value="none">None</option>
                <option value="safe">Safe Medications</option>
                <option value="disqualifying">Disqualifying Medications</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Months Since Last Donation</label>
              <input
                type="number"
                name="lastDonationMonths"
                placeholder="Enter months since last donation"
                value={formData.lastDonationMonths}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              onClick={checkEligibility}
              className="w-full mt-6 p-3 bg-myred text-white rounded-lg"
            >
              Check Eligibility
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EligibleForm;
