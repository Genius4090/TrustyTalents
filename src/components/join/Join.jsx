import React from 'react'
import icon1 from '/assets/images/join__logo__1.svg'
import icon2 from '/assets/images/join__logo__2.svg'
import icon3 from '/assets/images/join__logo__3.svg'
import icon4 from '/assets/images/join__logo__4.svg'

const Join = () => {
    let joinCards = [
        {
            icon: icon1,
            title: "Free platform for IT professionals",
            desc: "Register, build your CV, and get visibility — completely free of charge."
        },
        {
            icon: icon2,
            title: "Global reach",
            desc: "Your profile can be discovered by employers from across Europe and beyond."
        },
        {
            icon: icon3,
            title: "Verified credibility",
            desc: "Prove your skills and language level through official TrustyTalents verification."
        },
        {
            icon: icon4,
            title: "Expanding international network",
            desc: "New employers and job opportunities are added every week."
        }
    ]

    return (
        <div className="py-12 md:py-20 lg:py-24 bg-[#F8F8F8]">
            <div className="container flex flex-col gap-8 md:gap-10">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Why Join Trusty Talents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {joinCards.map((card)=>(
                        <div key={card.title} className="flex items-start md:items-center py-4 gap-4 md:gap-6">
                            <div className="bg-[#C2F6C8] p-4 md:p-5 rounded-full flex items-center justify-center flex-shrink-0">
                                <img src={card.icon} alt="join__card__icon" className="w-6 h-6 md:w-auto md:h-auto"/>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg text-[#1D4645] font-semibold">{card.title}</h3>
                                <p className="text-sm md:text-base text-[#475467] mt-2">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Join
