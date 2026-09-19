"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CHAT_BUBBLE_DOODLE_PATH,
  EMAIL_PLANE_DOODLE_PATH,
} from "@/app/constants/contact-doodles";

const VARIANT_STYLES = {
  whatsapp: {
    shell:
      "-rotate-2 bg-white border-2 border-dashed border-[#25D366]/45 shadow-md shadow-[#25D366]/10 hover:-rotate-1 hover:-translate-y-1",
    underlineStroke: "#128C7E",
    doodleStroke: "#111827",
  },
  email: {
    shell:
      "rotate-1 bg-gray-100 border-2 border-dashed border-[#ffd500]/55 shadow-md shadow-[#ffd500]/10 hover:rotate-0 hover:-translate-y-1",
    underlineStroke: "#facc15",
    doodleStroke: "#111827",
  },
};

function FeatureDoodle({ variant, animKey, stroke }) {
  const isWhatsApp = variant === "whatsapp";
  const pathD = isWhatsApp ? CHAT_BUBBLE_DOODLE_PATH : EMAIL_PLANE_DOODLE_PATH;
  const pathKey = isWhatsApp ? `wa-bubble-${animKey}` : `email-plane-${animKey}`;

  return (
    <svg
      viewBox="0 0 132 132"
      className="mx-auto mb-3 h-14 w-14 sm:h-16 sm:w-16"
      fill="none"
      aria-hidden
    >
      <path
        key={pathKey}
        pathLength={1}
        d={pathD}
        stroke={stroke}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="contact-doodle-path"
      />
    </svg>
  );
}

const ContactFeature = ({
  variant = "email",
  title,
  subtitle,
  children,
  id,
  className = "",
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.email;

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      id={id}
      ref={ref}
      className={`contact-feature group flex h-full w-full flex-col rounded-3xl p-6 sm:p-8 transition-all duration-500 ease-out ${styles.shell} ${inView ? "contact-feature-animate-active" : ""} ${className}`}
    >
      <header className="mb-5 text-center">
        <FeatureDoodle variant={variant} animKey={animKey} stroke={styles.doodleStroke} />
        <h3 className="caveat relative inline-block text-3xl font-semibold text-gray-700 sm:text-4xl">
          <span className="relative z-10">{title}</span>
          <svg
            viewBox="0 0 400 30"
            className="pointer-events-none absolute -bottom-3 left-1/2 h-[22px] w-[110%] max-w-[280px] -translate-x-1/2"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              key={`contact-title-ul-${animKey}-${variant}`}
              d="M5 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15"
              stroke={styles.underlineStroke}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="contact-underline-path"
            />
          </svg>
        </h3>
        {subtitle ? (
          <p className="caveat mx-auto mt-4 max-w-xs text-xl text-gray-500 sm:text-2xl">{subtitle}</p>
        ) : null}
      </header>

      <div className="flex flex-1 flex-col">{children}</div>
    </article>
  );
};

export default ContactFeature;
