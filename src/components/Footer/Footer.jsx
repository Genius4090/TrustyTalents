import React from 'react'
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-10 mt-20 w-full bg-[#1D4645] flex justify-center items-center ">

            <div className="container flex flex-col justify-center items-center gap-4">
                <div className="flex justify-between items-start  w-full ">

                    <div className="flex flex-col justify-between gap-4">
                        <h3 className="text-2xl text-white font-bold">TrustyTalents</h3>
                        <p className="text-sm text-[#C3D9D9]">© 2025 TrustyTalents OU. <br/> All rights reserved</p>
                        <span className="flex gap-2">
                        <a href="#" className="text-[#C3D9D9]"><FaFacebookF /></a>
                        <a href="#" className="text-[#C3D9D9]"><FaLinkedinIn /></a>
                    </span>
                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                        <h4 className="uppercase font-semibold text-white">Company</h4>
                        <div className="bg-[#77908F] w-full h-[1px]"></div>
                        <p className="text-sm text-[#C3D9D9]">Trusty Talents OU</p>
                        <p className="text-sm text-[#C3D9D9]">Company code: 17191837</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-center" >
                        <h4 className="uppercase font-semibold text-white">Contacts</h4>
                        <div className="bg-[#77908F] w-full h-[1px]"></div>
                        <p className="text-sm text-[#C3D9D9]">Address: Sakala 7-2, 10141,Tallinn, Estonia</p>
                        <p className="text-sm text-[#C3D9D9]">Email: info@trustytalents.com</p>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <h4 className="uppercase font-semibold text-white">Legal</h4>
                        <div className="bg-[#77908F] w-full h-[1px]"></div>
                        <a href="#" className="text-sm text-[#C3D9D9]">Terms & Conditions</a>
                        <a href="#" className="text-sm text-[#C3D9D9]">Privacy Policy</a>
                        <a href="#" className="text-sm text-[#C3D9D9]">Cookies Policy</a>
                    </div>
                </div>


                <p className="text-[#C3D9D9]">0.22.0</p>
            </div>
        </div>
    )
}
export default Footer
