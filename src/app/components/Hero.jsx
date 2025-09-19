"use client";
import Image from "next/image";

const letters = [
  { char: "M", img: "/note.avif" },
  { char: ".", img: "/punch.avif", scale: "scale-200" }, // dot image slightly larger
];
const letters2 = [
  { char: "A", img: "/helloCard.avif" },
  { char: "W", img: "/card2.avif" },
  { char: "A", img: "/card3.avif" },
  { char: "I", img: "/card4.avif" },
  { char: "S", img: "/card5.avif" },
];

const Hero = () => {
  return (
    <section id="hero">
      <img
        src="/bg2.avif"
        alt="bg"
        className="h-full w-full absolute bottom-0 object-cover"
      />
      <div className="w-full min-h-screen sm:px-2 md:px-5 lg:px-6 pt-12 lg:pt-8 sm:mt-16 md:mt-16 lg:mt-10 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute z-10 flex flex-col justify-end items-start bottom-16 sm:bottom-24 md:bottom-16 lg:bottom-0 h-full text-start px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-black/50 drop-shadow-2xl shadow-black/80 mb-4">
            "Howdy! Meet your trusted web developer, <br /> building modern,
            scalable, and user-friendly websites."
          </h1>

          {/* First row */}
          <div className="flex font-extrabold drop-shadow-2xl shadow-black/80 leading-none">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`relative inline-flex items-center justify-center cursor-pointer group
                text-[clamp(5rem,16vw,22rem)] font-extrabold text-black
                ${letter.char === "." ? "mx-2 md:mx-4 lg:mx-6" : ""}`}
              >
                {/* Default letter */}
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  {letter.char}
                </span>

                {/* Hover image (scales bigger on hover) */}
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={letter.img}
                    alt={letter.char}
                    className={`object-contain w-full h-full opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-150 ${
                      letter.scale || ""
                    }`}
                  />
                </span>
              </span>
            ))}
            
          </div>

          {/* <Image src={"/helloCard.avif"} fill alt="hello" /> */}

          {/* Second row */}
          <div className="flex font-extrabold drop-shadow-xl shadow-black/80 leading-none  mb-5">
            {letters2.map((letter, index) => (
              <span
                key={index}
                className={`relative inline-flex items-center justify-center cursor-pointer group
                text-[clamp(5rem,16vw,22rem)] font-extrabold text-black
                ${letter.char === "." ? "mx-2 md:mx-4 lg:mx-6" : ""}`}
              >
                {/* Default letter */}
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  {letter.char}
                </span>

                {/* Hover image */}
                <span className="absolute inset-0 flex items-center justify-center z-10">
                  <img
                    src={letter.img}
                    alt={letter.char}
                    className="object-contain w-full h-full opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-150"
                  />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
