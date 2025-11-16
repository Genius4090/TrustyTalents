import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import {IoLocationSharp, IoPeopleSharp} from "react-icons/io5";
import explore1 from '/assets/images/explore__card__1.png'
import explore2 from '/assets/images/explore__card__2.png'
import explore3 from '/assets/images/explore__card__3.svg'
import {FaCalendarAlt} from "react-icons/fa";

const Explore = () => {

    let employers = [
        {
            logo: explore1,
            isHiring: true,
            hiringQuantity: 5,
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
        {
            logo: explore2,
            isHiring: false,
            hiringQuantity: 0,
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
        {
            logo: explore3,
            isHiring: false,
            hiringQuantity: 0,
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
        {
            logo: explore2,
            isHiring: false,
            hiringQuantity: 0,
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
        {
            logo: explore1,
            isHiring: true,
            hiringQuantity: "2",
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
        {
            logo: explore3,
            isHiring: false,
            hiringQuantity: 0,
            title: "Corporate Solutions Group",
            location: "Latvia",
            quantity: "11-50",
            date: "2010",
            desc1: "Full-service IT solutions",
            desc2: "ICT infrastructure",
        },
    ]



    return (
        <div className="container py-10 flex flex-col gap-8">
           <div className="flex w-full justify-between items-center mt-24">
               <h2 className="font-bold text-4xl">Explore Top Employers ready to hire</h2>
               <a href="#" className="flex items-center gap-1 text-[#009483]">View All Employees <HiArrowUpRight /></a>
           </div>
            <div className="grid grid-cols-3 gap-5">
                {employers.map((item)=>(
                    <div key={item.title} className=" bg-[#F8F8F8] rounded overflow-hidden p-4 flex flex-col gap-4">
                        <div className="flex items-end justify-between">
                            <img src={item.logo} alt="explore__logo" className="w-[140px] h-[140px]"/>
                            {item.isHiring && <button className="bg-[#C2F6C8] text-[#1D4645] text-xs rounded-2xl py-1.5 px-2.5">Hiring {item.hiringQuantity}</button>}
                        </div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <div className="flex gap-6">
                            <span className="flex text-[#1D4645] items-center justify-center gap-2"><IoLocationSharp className=" text-xl" /> {item.location}</span>
                            <span className="flex text-[#1D4645] items-center justify-center gap-2"><IoPeopleSharp className=" text-xl" /> {item.quantity}</span>
                            <span className="flex text-[#1D4645] items-center justify-center gap-2"><FaCalendarAlt className=" text-xl" /> {item.date}</span>
                        </div>
                        <div className="flex gap-2">
                            <p className="py-2 px-3 bg-[#F1F1F1] text-[#484848] rounded-3xl">{item.desc1}</p>
                            <p className="py-2 px-3 bg-[#F1F1F1] text-[#484848] rounded-3xl">{item.desc2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Explore
