import React from 'react'
import './FooterBanner.css'
const FooterBanner = () => {
    return (
        <div className="container">
            <div className="footer__banner w-full rounded-lg bg-[#009483] flex flex-col justify-center items-center gap-6 md:gap-8 py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16">
                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white max-w-[780px] text-center leading-8 md:leading-10 lg:leading-12">Join TrustyTalents today and let your skills speak for themselves.</h3>
                <button className="cursor-pointer bg-white px-6 md:px-8 py-4 md:py-5 rounded text-sm md:text-base text-[#009483]">Create Profile</button>
            </div>
        </div>
    )
}
export default FooterBanner
