import React from 'react'

import image1 from '/assets/images/team__card__1.png'
import image2 from '/assets/images/team__card__2.png'
import image3 from '/assets/images/team__card__3.png'
import {IoMail} from "react-icons/io5";
import {FaLinkedinIn} from "react-icons/fa";

const Team = () => {

    let teamMembers = [
        {
             fullname: "Vitalijs Sevcenko",
             job: "Training Programme Manager",
             image: image1
        },
        {
            fullname: "Emils Intenbergs",
            job: "Project Leading Mentor",
            image: image2
        },
        {
            fullname: "Solvita Smilga",
            job: "Client Relationship Manager",
            image: image3
        },
    ]

    return (
        <div className="container min-h-auto py-10 md:py-12 lg:py-16 flex flex-col gap-4 md:gap-6">
           <h2 className="font-bold text-2xl md:text-3xl">Meet our team</h2>
            <p className="text-base md:text-lg text-[#475467] max-w-[880px]">A group of dedicated experts working to make recruitment smarter and more efficient, connecting top talent with great opportunities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-8 mt-4 md:mt-6">
                {teamMembers.map((item)=>(
                    <div key={item.fullname} className="flex flex-col justify-start items-start gap-4 md:gap-5">
                        <img src={item.image} alt="team__member" className="rounded w-full h-auto"/>
                        <div className="w-full">
                           <div className="flex items-center justify-between gap-2">
                               <h3 className="text-xl md:text-2xl font-semibold">{item.fullname}</h3>
                               <span className="flex items-center justify-center gap-2 flex-shrink-0">
                                <a href="#" className="text-[#7E8897] text-lg md:text-xl mt-0.5"><IoMail /></a>
                                <a href="#" className="text-[#7E8897] text-lg md:text-xl"><FaLinkedinIn /></a>
                            </span>
                           </div>
                            <p className="text-sm md:text-base text-[#555555] mt-1">{item.job}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Team
