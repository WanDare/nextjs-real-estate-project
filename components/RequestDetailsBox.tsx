"use client";
import { useState } from "react";
import { Phone, Send, MessageSquare } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function RequestDetailsBox() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted!");
  };

  return (
    <div className="bg-white border border-blue-200 rounded-2xl shadow-xl p-8 w-full mx-auto lg:mx-0">
      <h2 className="text-2xl font-extrabold text-blue-700 text-center mb-6 tracking-tight">
        Request Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="flex-1 min-w-0 bg-gray-50 rounded-lg px-4 py-2 font-medium border border-gray-200 focus:border-blue-400 focus:outline-none transition"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="flex-1 min-w-0 bg-gray-50 rounded-lg px-4 py-2 font-medium border border-gray-200 focus:border-blue-400 focus:outline-none transition"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full bg-gray-50 rounded-lg px-4 py-2 mb-4 font-medium border border-gray-200 focus:border-blue-400 focus:outline-none transition"
          value={form.email}
          onChange={handleChange}
          required
        />
        <div className="mb-4 relative">
          <textarea
            name="message"
            placeholder="Write a message to the seller"
            className="w-full bg-gray-50 rounded-lg px-4 py-2 min-h-[80px] font-medium border border-gray-200 focus:border-blue-400 focus:outline-none transition resize-none"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg rounded-lg font-bold shadow hover:from-blue-600 hover:to-green-600 transition mb-4"
        >
          Submit Details
        </button>
      </form>
      <div className="text-center text-gray-400 my-3 font-medium">
        Or contact us via
      </div>
      <div className="flex flex-col gap-3">
        <a
          href="tel:12345678"
          className="flex items-center justify-center gap-2 w-full bg-gray-100 rounded-lg py-2 font-semibold text-gray-800 hover:bg-blue-50 border border-gray-200 transition"
        >
          <Phone size={20} /> Phone
        </a>
        <a
          href="https://t.me/your_agent"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 w-full bg-gray-100 rounded-lg py-2 font-semibold text-gray-800 hover:bg-blue-50 border border-gray-200 transition"
        >
          <FaTelegramPlane className="text-sky-500" size={20} /> Telegram
        </a>
        <a
          href="https://wa.me/your_agent"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 w-full bg-gray-100 rounded-lg py-2 font-semibold text-gray-800 hover:bg-blue-50 border border-gray-200 transition"
        >
          <FaWhatsapp className="text-green-500" size={20} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
