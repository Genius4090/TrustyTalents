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
        <div className="py-24 bg-[#F8F8F8]">
            <div className="container flex flex-col gap-10">
                <h2 className="font-bold text-4xl">Why Join Trusty Talents</h2>
                <div className="grid grid-cols-2 gap-4">
                    {joinCards.map((card)=>(
                        <div key={card.title} className="flex items-center py-4 gap-6">
                            <div className="bg-[#C2F6C8] p-5 rounded-full flex items-center justify-center">
                                <img src={card.icon} alt="join__card__icon"/>
                            </div>
                            <div>
                                <h3 className="text-[#1D4645] font-semibold">{card.title}</h3>
                                <p className="text-[#475467] mt-2">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Join
