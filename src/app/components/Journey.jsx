import React from "react";

const Journey = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row justify-between pl-26  mt-10">
        <img src="/aspire.png" alt="aspire" className="w-30 h-30" />
        <img src="sls.png" alt="sls" className="w-30 h-30" />
        <img src="pu.png" alt="pu" className="w-30 h-30" />
        <div className="pl-10">
          <img src="rev9.png" alt="rev9" className="w-30 h-30" />
        </div>

        <img src="/younow.png" alt="you" className="w-25 h-20" />
        <div></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="hidden lg:block">
          <img src="/storyHor.avif" alt="hor" />
        </div>
      </div>

      <div className="flex w-full  justify-center mt-10">
        <div className="block lg:hidden">
          <img src="/storyVer.avif" alt="ver" className="max-h-screen" />
        </div>
        <div className="flex flex-col lg:hidden justify-between pl-26  mt-10">
          <img src="/aspire.png" alt="aspire" className="w-20 h-20" />
          <img src="sls.png" alt="sls" className="w-20 h-20" />
          <img src="pu.png" alt="pu" className="w-20 h-20" />

          <img src="rev9.png" alt="rev9" className="w-20 h-20" />

          <img src="/younow.png" alt="you" className="w-25 h-20" />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Journey;
