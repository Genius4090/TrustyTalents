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
        <div className="bg-[#1d4645] job__page flex items-center justify-center">
            <div className="container flex flex-col gap-10 py-16">
                <h2 className="font-bold text-white text-4xl">Simple process to find a job</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
                    {jobCards.map((card)=>(
                        <div key={card.title} className="w-[380px] flex flex-col gap-6">
                            <div className="flex justify-between items-center">
                                <img src={card.icon} alt="card__logo__number"/>
                                {card.line && <img src={card.line} alt="card__logo__line"/>}
                            </div>
                           <div>
                               <h2 className="text-2xl text-white font-semibold">{card.title}</h2>
                               <p className="tracking-wide max-w-[356px] mt-4 text-[#D9E8E7]">{card.desc}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Job
