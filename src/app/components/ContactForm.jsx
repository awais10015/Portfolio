"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-dashed border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#ffd500] focus:border-solid focus:ring-4 focus:ring-[#ffd500]/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 text-left"
      noValidate
    >
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="sr-only">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className={`${inputClass} resize-y min-h-[120px]`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-2xl bg-[#ffd500] px-6 py-4 caveat text-2xl font-semibold text-black transition hover:bg-[#ffd500]/90 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-[#ffd500]/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="caveat text-xl text-green-700">Thanks! Your message is on its way.</p>
        )}
        {status === "error" && errorMessage && (
          <p className="caveat text-xl text-red-600">{errorMessage}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
