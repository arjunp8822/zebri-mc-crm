"use client";

import { useState } from "react";
import { submitSignup } from "@/app/actions/submit";

interface SignupFormProps {
  variant?: "default" | "minimal" | "inline";
}

export function SignupForm({ variant = "default" }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    weddingsPerYear: "",
    frustration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const result = await submitSignup(formData);

    if (result.success) {
      setMessage({ type: "success", text: result.message });
      setFormData({
        name: "",
        email: "",
        instagram: "",
        weddingsPerYear: "",
        frustration: "",
      });
    } else {
      setMessage({ type: "error", text: result.message });
    }

    setIsLoading(false);
  };

  const inputClasses =
    "w-full px-3.5 py-3 border border-gray-200 rounded-md text-sm text-gray-900 bg-white placeholder:text-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:opacity-50 disabled:cursor-not-allowed";

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={`flex-1 ${inputClasses}`}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm whitespace-nowrap transition-colors shadow-sm shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Claim Your Spot"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="instagram"
          placeholder="Instagram handle (without @)"
          value={formData.instagram}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
          required
        />
        <select
          name="weddingsPerYear"
          value={formData.weddingsPerYear}
          onChange={handleChange}
          disabled={isLoading}
          className={`${inputClasses} ${!formData.weddingsPerYear ? "text-gray-400" : ""}`}
          required
        >
          <option value="">Weddings per year</option>
          <option value="<10">Less than 10</option>
          <option value="10-24">10–24</option>
          <option value="25-49">25–49</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <textarea
        name="frustration"
        placeholder="What's your biggest admin frustration? (optional)"
        value={formData.frustration}
        onChange={handleChange}
        disabled={isLoading}
        rows={3}
        className={`${inputClasses} resize-none`}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm transition-colors shadow-sm shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Joining..." : "Join Private Beta"}
      </button>

      {message && (
        <div
          className={`px-4 py-3 rounded-md text-sm border ${
            message.type === "success"
              ? "bg-blue-50 border-blue-200 text-blue-700"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
