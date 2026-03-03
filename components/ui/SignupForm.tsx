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

  const inputStyle = {
    padding: "10px 12px",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    fontSize: "14px",
    color: "var(--text-primary)",
    backgroundColor: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "var(--accent)",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    transition: "opacity 0.2s",
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          style={inputStyle as React.CSSProperties}
          className="flex-1"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{ ...buttonStyle, opacity: isLoading ? 0.7 : 1 } as React.CSSProperties}
          className="whitespace-nowrap hover:opacity-90 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Request Access"}
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
          style={inputStyle as React.CSSProperties}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          style={inputStyle as React.CSSProperties}
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
          style={inputStyle as React.CSSProperties}
          required
        />
        <select
          name="weddingsPerYear"
          value={formData.weddingsPerYear}
          onChange={handleChange}
          disabled={isLoading}
          style={inputStyle as React.CSSProperties}
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
        style={{ ...inputStyle, resize: "none" } as React.CSSProperties}
      />

      <button
        type="submit"
        disabled={isLoading}
        style={{ ...buttonStyle, width: "100%", opacity: isLoading ? 0.7 : 1 } as React.CSSProperties}
        className="hover:opacity-90 disabled:cursor-not-allowed"
      >
        {isLoading ? "Joining..." : "Join Private Beta"}
      </button>

      {message && (
        <div
          style={{
            padding: "12px",
            borderRadius: "4px",
            fontSize: "14px",
            border: `1px solid ${message.type === "success" ? "var(--accent)" : "#EF4444"}`,
            backgroundColor: message.type === "success" ? "#F0F9FF" : "#FEF2F2",
            color: message.type === "success" ? "var(--accent)" : "#EF4444",
          }}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
