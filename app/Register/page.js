"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";

const RegistrationPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "",
    batch: "",
    paymentMethod: "",
    bkashNumber: "",
    transactionId: "",
    number: "",
  });

  const [paymentNumber, setPaymentNumber] = useState("");
  const [paymentDetailsText, setPaymentDetailsText] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Handle dynamic number changes based on payment method
    if (name === "paymentMethod") {
      setPaymentNumber(getPaymentNumber(value));
      setPaymentDetailsText(getPaymentDetailsText(value));
    }
  };

  // Get payment method numbers
  const getPaymentNumber = (method) => {
    switch (method) {
      case "bkash":
        return "017xxxxxxxx";
      case "nagad":
        return "019xxxxxxxx";
      case "rocket":
        return "013xxxxxxxx";
      default:
        return "";
    }
  };

  // Payment details text based on selected payment method
  const getPaymentDetailsText = (method) => {
    switch (method) {
      case "bkash":
        return "Pay 130 Taka to Bkash account.";
      case "nagad":
        return "Pay 130 Taka to Nagad account.";
      case "rocket":
        return "Pay 130 Taka to Rocket account.";
      default:
        return "";
    }
  };

  // Validate form data
  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.studentId ||
      !formData.department ||
      !formData.batch ||
      !formData.paymentMethod ||
      !formData.transactionId ||
      !formData.number
    ) {
      return false;
    }

    return true;
  };

  // Submit form data
  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentIdLength = formData.studentId.length;

    if (studentIdLength !== 9) {
      Swal.fire({
        icon: "error",
        title: "Invalid Student ID",
        text: "Student ID should be 9 characters long!",
      });
      return;
    }

    const batchPrefix = formData.studentId.slice(0, 3);
    if (batchPrefix !== formData.batch.slice(0, 3)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Batch",
        text: "Student ID and Batch do not match!",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Invalid input",
        text: "Please check your input and try again!",
      });
      return;
    }

    // Show spinner
    Swal.fire({
      title: "Registering...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Send data to server
    try {
      const response = await axios.post(
        "https://judgeapi.gubcpa.com/idpc/submit",
        formData,
        {
          headers: {
            "x-frontend-client": "gubcpa-react",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // API key from .env
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have been registered successfully!",
        }).then(() => {
          router.push("/"); // Redirect to home or any other page after successful registration
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "There was an error while submitting your registration.",
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center sm:px-16 md:px-16 px-6 py-16 my-8 bg-white overflow-hidden">
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg text-black bg-gray-300 p-16 rounded rounded-xl">
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        {/* Student ID */}
        <div className="mb-4">
          <label
            htmlFor="studentId"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.studentId}
            onChange={handleChange}
            maxLength="9"
            required
            disabled={loading}
          />
        </div>

        {/* Department */}
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.department}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select Department</option>
            <option value="cse">CSE</option>
            <option value="swe">SWE</option>
            <option value="ai">AI</option>
            <option value="eee">EEE</option>
            <option value="tex">TEX</option>
          </select>
        </div>

        {/* Batch */}
        <div className="mb-4">
          <label
            htmlFor="batch"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Batch
          </label>
          <select
            id="batch"
            name="batch"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.batch}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select Batch</option>
            <option value="223">223</option>
            <option value="231">231</option>
            <option value="232">232</option>
            <option value="241">241</option>
            <option value="242">242</option>
            <option value="251">251</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select Payment Method</option>
            <option value="bkash">Bkash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
          </select>
        </div>

        {/* Payment Number */}
        {formData.paymentMethod && (
          <div className="mb-4">
            <label
              htmlFor="paymentNumber"
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              {formData.paymentMethod} Number
            </label>
            <input
              type="text"
              id="paymentNumber"
              className="w-full px-4 py-2 border rounded-md"
              value={paymentNumber}
              disabled
            />
          </div>
        )}
        {/* Payment Instructions */}
        {formData.paymentMethod && (
          <div className="mb-4 text-lg text-gray-600">
            <p>
              <strong>{paymentDetailsText}</strong>
            </p>
          </div>
        )}

        {/* Transaction ID */}
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Number From Which You Made Payment
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.number}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="transactionId"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Transaction ID
          </label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.transactionId}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          After entering the payment details, pay <strong>130 Taka</strong> and
          provide the transaction ID.
        </div>

        {/* Register Button */}
        {/* Register Button */}
        <button
          type="submit"
          className={`mt-6 px-8 py-4 rounded-xl font-semibold shadow-lg border border-yellow/50
            ${
              loading
                ? "bg-yellow-400 text-gray-700 cursor-not-allowed"
                : "bg-yellow-300 text-gray-900 hover:bg-yellow-400 hover:scale-105 hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
            }
          `}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-900 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Registering...
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </section>
  );
};

export default RegistrationPage;
