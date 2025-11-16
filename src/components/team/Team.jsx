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
        <div className="container h-[620px] py-10 flex flex-col gap-2">
           <h2 className="font-bold text-3xl">Meet our team</h2>
            <p className="text-lg text-[#475467] max-w-[880px]">A group of dedicated experts working to make recruitment smarter and more efficient, connecting top talent with great opportunities</p>
            <div className="grid grid-cols-3 w-full gap-5 mt-3">
                {teamMembers.map((item)=>(
                    <div key={item.fullname} className="flex flex-col justify-center items-center gap-5">
                        <img src={item.image} alt="team__member" className="rounded"/>
                        <div className="w-full ">
                           <div className="flex items-center justify-between">
                               <h3 className="text-2xl font-semibold">{item.fullname}</h3>
                               <span className="flex items-center justify-center gap-2">
                                <a href="#" className="text-[#7E8897] text-xl mt-0.5"><IoMail /></a>
                                <a href="#" className="text-[#7E8897] text-xl"><FaLinkedinIn /></a>
                            </span>
                           </div>
                            <p className="text-[#555555] mt-1">{item.job}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Team
