import React from "react";
// import Journey from "@/app/components/Journey";
const Work = () => {
  return (
    <section id="work">
      <div
        // id="work"
        className=" w-full mt-40 px-5 md:px-14 flex flex-col gap-5"
      >
        <div className="w-full flex items-center justify-center mb-15">
          <div className="flex flex-col items-end justify-center">
            <div className="text-end flex justify-end items-end">
              <p className="caveat text-3xl text-gray-500">
                from 2023 till today
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter">
              MY LATEST WORK
            </h1>
          </div>
        </div>
        {/* 1st 2 projects */}
        <div className="w-full flex items-stretch gap-5 flex-col lg:flex-row">
          {/* Left Card */}
          <a
            href="https://line-one-eosin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1.3]"
          >
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    LINEONE
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  Social Media Platform
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-5 transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/Lineone.png" alt="lineone" className="rounded-xl " />
              </div>
            </div>
          </a>

          <a
            href="https://iphone-clone-dun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
          >
            {/* Right Card */}
            <div className="w-full h-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    IPHONE CLONE
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  Branding, Web Design, Development
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/iphone.png" alt="lineone" className="" />
              </div>
            </div>
          </a>
        </div>

        {/* 2nd 2 projects */}
        <div className="w-full flex items-stretch gap-5 flex-col lg:flex-row">
          <a
            href="https://sundown-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
          >
            {/* Left Card */}
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex-[1] flex gap-2 flex-col items-start justify-evenly group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    SUNDOWN
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  Branding, Web Design, Development
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden  transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/sundown.png" alt="lineone" className="rounded-xl " />
              </div>
            </div>
          </a>
          <a
            href="https://healix-inky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1.3]"
          >
            {/* Right Card */}
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl  flex gap-2 flex-col items-start justify-between group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    HEALIX
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  Hospital Management System
                </p>
              </div>
              <div className="border-5 p-5  border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/healix.png" alt="lineone" className="rounded-xl" />
              </div>
            </div>
          </a>
        </div>

        {/* 3rd 2 projects */}
        <div className="w-full flex items-stretch gap-5 flex-col lg:flex-row">
          <a
            href="https://mystore-seven-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1.3]"
          >
            {/* Left Card */}
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex gap-2 flex-col items-start group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    FURNITURE STORE
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  A place to buy Furniture
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-5 transform translate-y-20 rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/Store.png" alt="lineone" className="rounded-xl " />
              </div>
            </div>
          </a>
          <a
            href="https://daily-book-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-[1] cursor-pointer bg-gray-100 rounded-4xl  flex gap-2 flex-col items-start justify-evenly group overflow-hidden"
          >
            {/* Right Card */}
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex-[1] flex gap-2 flex-col items-start justify-evenly group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    DAILYBOOK
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  A Finance tracking and Buisiness Management Platform
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden transform translate-y-15 -rotate-15 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img src="/dailybook.png" alt="lineone" className="" />
              </div>
            </div>
          </a>
        </div>

        {/* full width dashboard */}
        <div className="w-full flex items-stretch gap-5 flex-col lg:flex-row">
          <a
            href="https://dashboard-six-pied-69.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            {" "}
            {/* full width Card */}
            <div className="w-full cursor-pointer bg-gray-100 p-5 rounded-4xl flex gap-2 flex-col items-start group overflow-hidden">
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold">
                    DASHBOARD
                  </h1>
                  <svg
                    viewBox="0 0 132 132"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 stroke-black"
                    fill="none"
                  >
                    <path
                      d="M7.236 70.33c7.118-1.168 11.675-2.43 20.847-2.773 12.407-.464 18.038.452 30.114.278 6.512-.094 10.37-2.056 16.37-2.289 16.568-.644 30.894-.898 30.501-5.91-.638-8.131-6.46-13.173-11.245-18.2-7.932-8.33-16.193-14.612-16.624-20.099-.482-6.147 20.935 9.985 30.605 20.509 9.038 9.836 19.737 14.893 19.103 19.59-2.258 9.573-18.893 14.891-42.919 46.368"
                      stroke="currentColor"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="path-animate"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">
                  Web Design, Management, Development
                </p>
              </div>
              <div className="border-5 border-white rounded-2xl bg-gray-200 overflow-hidden p-0 lg:p-5 transform translate-y-10 md:translate-y-30 rotate-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                <img
                  src="/dashboard.png"
                  alt="lineone"
                  className="rounded-xl "
                />
              </div>
            </div>
          </a>
        </div>

        <div className="bg-gray-100 flex w- h-full flex-col items-center justify-center px-5 py-24 gap-14 rounded-4xl">
          <img
            src="/ProjectFuture.avif"
            alt="Upcomming Projects"
            className="h-30 w-30 md:h-40 md:w-40 lg:h-60 lg:w-60"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl  font-black text-center tracking-tighter">
            NEW CASES ARE ON THE WAY, <br /> SLOWLY BUT SURELY 😅
          </h1>
        </div>
      </div>

      <div className="w-full mt-32 flex flex-col justify-center items-center">
        <p
          style={{ fontWeight: 700 }}
          className="caveat rotate-5 text-gray-500 text-3xl px-10 md:px-0"
        >
          Every experience in my life is <br /> important and has taught me a
          lot
        </p>
      </div>

      {/* <Journey /> */}
    </section>
  );
};

export default Work;
