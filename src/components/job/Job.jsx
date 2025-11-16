import React from 'react'
import './job.css'
import cardIcon1 from '/assets/images/job__logo__1.png'
import cardIcon2 from '/assets/images/job__logo__2.png'
import cardIcon3 from '/assets/images/job__logo__3.png'
import cardLine from '/assets/images/job__logo__line.png'
const Job = () => {

    const jobCards = [
        {
            icon: cardIcon1,
            line: cardLine,
            title: "Create Your Free Account",
            desc: "Register with Trusty Talents and easily build your compelling IT profile. This simple process creates an attractive, employer-ready representation of your skills and experience within our searchable database."
        },
        {
            icon: cardIcon2,
            line: cardLine,
            title: "Verify Your Skills",
            desc: "Prove your IT expertise and language abilities! Use our Telegram Virtual Assistant for quick skill assessments. Showcase your verified knowledge and stand out to potential employers."
        },
        {
            icon: cardIcon3,
            title: "Apply For Vacancies",
            desc: "Discover leading IT companies and their open positions. Find your ideal IT job match, or let top employers find you within the Trusty Talents candidate pool!"
        }
    ]


    return (
        <div className="bg-[#1d4645] job__page flex items-center justify-center py-12 md:py-16 lg:py-20">
            <div className="container flex flex-col gap-8 md:gap-10">
                <h2 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">Simple process to find a job</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {jobCards.map((card)=>(
                        <div key={card.title} className="w-full max-w-[380px] mx-auto lg:mx-0 flex flex-col gap-4 md:gap-6">
                            <div className="flex justify-between items-center">
                                <img src={card.icon} alt="card__logo__number" className="w-20 h-auto md:w-auto md:h-auto object-contain"/>
                                {card.line && <img src={card.line} alt="card__logo__line" className="hidden md:block"/>}
                            </div>
                           <div>
                               <h2 className="text-xl md:text-2xl text-white font-semibold">{card.title}</h2>
                               <p className="tracking-wide max-w-full md:max-w-[356px] mt-3 md:mt-4 text-sm md:text-base text-[#D9E8E7]">{card.desc}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Job
