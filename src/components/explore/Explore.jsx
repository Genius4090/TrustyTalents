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
        <div className="container py-8 md:py-10 lg:py-12 flex flex-col gap-6 md:gap-8">
           <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4 md:gap-0 mt-12 md:mt-20 lg:mt-24">
               <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Explore Top Employers ready to hire</h2>
               <a href="#" className="flex items-center gap-1 text-[#009483] text-sm md:text-base">View All Employees <HiArrowUpRight /></a>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {employers.map((item)=>(
                    <div key={item.title} className="bg-[#F8F8F8] rounded overflow-hidden p-4 flex flex-col gap-3 md:gap-4">
                        <div className="flex items-end justify-between">
                            <img src={item.logo} alt="explore__logo" className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]"/>
                            {item.isHiring && <button className="bg-[#C2F6C8] text-[#1D4645] text-xs rounded-2xl py-1.5 px-2.5">Hiring {item.hiringQuantity}</button>}
                        </div>
                        <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
                        <div className="flex flex-wrap gap-3 md:gap-6">
                            <span className="flex text-[#1D4645] items-center justify-center gap-1 md:gap-2 text-sm md:text-base"><IoLocationSharp className="text-lg md:text-xl" /> {item.location}</span>
                            <span className="flex text-[#1D4645] items-center justify-center gap-1 md:gap-2 text-sm md:text-base"><IoPeopleSharp className="text-lg md:text-xl" /> {item.quantity}</span>
                            <span className="flex text-[#1D4645] items-center justify-center gap-1 md:gap-2 text-sm md:text-base"><FaCalendarAlt className="text-lg md:text-xl" /> {item.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <p className="py-2 px-3 bg-[#F1F1F1] text-[#484848] rounded-3xl text-xs md:text-sm">{item.desc1}</p>
                            <p className="py-2 px-3 bg-[#F1F1F1] text-[#484848] rounded-3xl text-xs md:text-sm">{item.desc2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Explore
