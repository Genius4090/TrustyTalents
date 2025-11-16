import React from 'react'
import './FooterBanner.css'
const FooterBanner = () => {
    return (
        <div className="container footer__banner w-full rounded-lg bg-[#009483] flex flex-col justify-center items-center gap-8 py-16">
            <h3 className="font-bold text-4xl text-white max-w-[780px] text-center leading-12">Join TrustyTalents today and let your skills speak for themselves.</h3>
            <button className="bg-white px-8 py-5 rounded text-[#009483]">Create Profile</button>
        </div>
    )
}
export default FooterBanner
