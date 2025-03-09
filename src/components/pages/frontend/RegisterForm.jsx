import React, { useState } from "react";
import Header from "./Header";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    birthday: "",
    age: "",
    bloodType: "",
    contactNo: "",
    email: "",
    maabId: "",
    validThru: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (let key in formData) {
      if (key !== "consent" && formData[key].trim() === "") {
        alert("Please fill in all fields before submitting.");
        return;
      }
    }

    if (!formData.consent) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

    // Clear form after submission
    setFormData({
      fullName: "",
      address: "",
      birthday: "",
      age: "",
      bloodType: "",
      contactNo: "",
      email: "",
      maabId: "",
      validThru: "",
      consent: false,
    });
  };

  return (
    <>
      <Header />
      <section className="py-5 mt-[100px] mb-10">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-red-700 text-white py-2 rounded-md">
              Enrollment Form
            </h2>
          </div>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 border rounded-md"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="p-2 border rounded-md"
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                placeholder="Blood Type"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="Contact No."
                className="p-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="maabId"
                value={formData.maabId}
                onChange={handleChange}
                placeholder="MAAB ID No."
                className="p-2 border rounded-md"
              />
              <input
                type="date"
                name="validThru"
                value={formData.validThru}
                onChange={handleChange}
                className="p-2 border rounded-md"
              />
            </div>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className="text-xs font-bold leading-3 italic">
                By putting a check on this box, I agree I want to receive news,
                offers, tips, and other promotional materials from and about the
                Philippine Red Cross, including by email, phone, and mail to the
                contact information I am submitting.
                <span className=" text-xs !font-normal">
                  I also consent to the Philippine Red Cross, its affiliaties,
                  and service providers my personal data for these purposes, and
                  as described in the Privacy Policy. I understand that I can
                  withdraw my consent at any time.
                </span>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md font-bold hover:bg-red-700"
            >
              Submit Enrollment
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
