import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-10">
      <div className="flex justify-center lg:justify-between flex-col lg:flex-row items-center px-10 py-6 rounded-3xl bg-gray-100 gap-10">
        {/* Left: Email + SVG */}
        <a href="mailto:awais10015@gmail.com">
          <div className="group cursor-pointer flex justify-center items-center">
            {/* SVG */}
            <svg
              viewBox="0 0 132 132"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 mb-2"
              fill="none"
            >
              <path
                d="M88.298 46.098C79.1 56.173 63.892 66.414 58.343 74.436c5.447 21.624 9.163 35.511 22.888 50.132 10.73-48.694 32.016-56.887 35.74-109.047C97.866 19.436 42.634 37.354 6.228 58.553 23.678 67.126 29.888 66.314 44 72.5"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="path-animate"
              />
            </svg>

            {/* Email with underline */}
            <p className="caveat text-2xl md:text-3xl lg:text-4xl relative inline-block group">
              <span className="relative z-10">awais10015@gmail.com</span>

              {/* Wavy underline */}
              <svg
                viewBox="0 0 400 30"
                className="absolute left-0 -bottom-4 w-full h-[25px] pointer-events-none"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15 T 350 15 T 400 15"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="800"
                  strokeDashoffset="800"
                  className="transition-all duration-[1200ms] ease-in-out group-hover:stroke-dashoffset-0"
                />
              </svg>
            </p>
          </div>
        </a>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {/* Github */}
          <div className="group relative cursor-pointer rotate-3 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5">
            {/* Inner wrapper only for shimmer clipping */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/github.webp"
                alt="Github"
                className="h-15 w-15 rounded-2xl"
              />
              {/* Shimmer */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group relative cursor-pointer -rotate-2 -translate-y-2 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/linkedIn.avif"
                alt="LinkedIn"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </div>

          {/* Instagram */}
          <div className="group relative cursor-pointer -rotate-4 translate-y-1 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="Instagram.avif"
                alt="Instagram"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </div>

          {/* Twitter */}
          <div className="group relative cursor-pointer rotate-2 transition-all duration-300 ease-out hover:rotate-6 hover:-translate-y-5">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Twitter.webp"
                alt="X(Twitter)"
                className="h-15 w-15 rounded-2xl"
              />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
