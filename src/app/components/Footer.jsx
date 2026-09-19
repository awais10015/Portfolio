"use client";

import React, { useEffect, useRef, useState } from "react";
import { CONTACT_FORM_HASH, EMAIL, getWhatsAppUrl } from "@/app/constants/contact";

const Footer = () => {
  const emailBlockRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const el = emailBlockRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey((k) => k + 1);
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full px-10">
      <div className="flex justify-center lg:justify-between flex-col lg:flex-row items-center px-10 py-6 rounded-3xl bg-gray-100 gap-10">
        {/* Left: Email + SVG */}
        <a href={CONTACT_FORM_HASH}>
          <div
            ref={emailBlockRef}
            className={`footer-email-block group cursor-pointer flex justify-center items-center ${
              inView ? "footer-animate-active" : ""
            }`}
          >
            {/* SVG */}
            <svg
              viewBox="0 0 132 132"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 mb-2"
              fill="none"
            >
              <path
                key={`footer-plane-${animKey}`}
                d="M88.298 46.098C79.1 56.173 63.892 66.414 58.343 74.436c5.447 21.624 9.163 35.511 22.888 50.132 10.73-48.694 32.016-56.887 35.74-109.047C97.866 19.436 42.634 37.354 6.228 58.553 23.678 67.126 29.888 66.314 44 72.5"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-plane-path"
              />
            </svg>

            {/* Email with underline */}
            <p className="caveat text-2xl md:text-3xl lg:text-4xl relative inline-block">
              <span className="relative z-10">{EMAIL}</span>

              {/* Wavy underline */}
              <svg
                viewBox="0 0 400 30"
                className="absolute left-0 -bottom-4 w-full h-[25px] pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  key={`footer-underline-${animKey}`}
                  d="M5 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-underline-path"
                />
              </svg>
            </p>
          </div>
        </a>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {/* Github */}
          <a
            href="https://github.com/awais10015"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer rotate-3 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/github.webp"
                alt="Github"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/awais10015"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer -rotate-2 -translate-y-2 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/linkedIn.avif"
                alt="LinkedIn"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/awais10015"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer -rotate-4 translate-y-1 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Instagram.avif"
                alt="Instagram"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/mawais10015"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer rotate-2 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Twitter.webp"
                alt="X (Twitter)"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative cursor-pointer -rotate-1 translate-y-0.5 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5"
          >
            <div className="relative flex h-15 w-15 items-center justify-center rounded-2xl bg-[#25D366] overflow-hidden">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
