import Footer from "@/app/components/Footer";

const Connect = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 w-60 h-25 md:w-90 md:h-40 object-cover scale-105 -translate-x-1/2 -translate-y-1/2"
        src="/cvEffects.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0  z-5"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Hero text */}
          <div className="space-y-4">
           
            <p className="caveat text-lg sm:text-xl text-gray-500 max-w-lg mx-auto">
              Ready to collaborate? View my CV and let's discuss your next
              project.
            </p>
          </div>

          {/* View CV Button */}
          <div className="flex justify-center mt-24 sm:mt-28 md:mt-28 lg:mt-18">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
            >
              {/* Animated background gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>

              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center space-x-2">
                <span>View CV</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>

              {/* Outer glow ring */}
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Connect;
