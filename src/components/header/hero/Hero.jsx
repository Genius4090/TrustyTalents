import React from 'react'

const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-[url('/assets/images/hero__background.png')] bg-center bg-cover flex items-center pt-24 md:pt-20 pb-20 md:pb-0">
            <div className="container flex flex-col items-start gap-6 md:gap-10">
              <div>
                  <h1 className="text-3xl md:text-4xl lg:text-[54px] font-bold text-white max-w-[780px] uppercase">Showcase Your Skills. Get Discovered.</h1>
                  <p className="text-base md:text-lg lg:text-xl mt-4 text-white max-w-[680px] leading-6 md:leading-8 font-extralight">
                      Upload your CV, validate your expertise, and let top employers <span className="hidden md:inline"><br/></span> worldwide find you through TrustyTalents.
                  </p>
              </div>
                <button className="cursor-pointer bg-[#009483] text-white px-6 md:px-9 py-4 md:py-6 rounded text-sm md:text-base">
                    Upload your CV
                </button>
            </div>


        </div>
    )
}
export default Hero
