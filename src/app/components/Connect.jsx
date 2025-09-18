import React from "react";
import Footer from "@/app/components/Footer";

const Connect = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/cvEffects.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full max-w-md px-8 py-4 text-center text-2xl font-semibold text-white bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl shadow-lg overflow-hidden group"
  >
    {/* Shine Effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

    {/* Button Text */}
    <span className="relative z-10">View CV</span>

    {/* Glow Pulse Ring */}
    <span className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-pulse"></span>
  </a>
</div>


      {/* Footer always visible */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Connect;
