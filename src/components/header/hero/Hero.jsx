import React from 'react'

const Hero = () => {
    return (
        <div className="w-full h-screen bg-[url('/assets/images/hero__background.png')] bg-center bg-cover flex items-center">
            <div className="container flex flex-col items-start gap-10">
              <div>
                  <h1 className="text-[54px] font-bold text-white max-w-[780px] uppercase">Showcase Your Skills. Get Discovered.</h1>
                  <p className="text-xl mt-4 text-white max-w-[680px] leading-8 font-extralight">
                      Upload your CV, validate your expertise, and let top employers <br/> worldwide find you through TrustyTalents.
                  </p>
              </div>
                <button className="bg-[#009483] text-white px-9 py-6 rounded">
                    Upload your CV
                </button>
            </div>


        </div>
    )
}
export default Hero
