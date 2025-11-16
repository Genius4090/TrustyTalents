import React from 'react'
import icon1 from '/assets/images/prepare__logo__1.svg'
import icon2 from '/assets/images/prepare__logo__2.svg'
import icon3 from '/assets/images/prepare__logo__3.svg'
import icon4 from '/assets/images/prepare__logo__4.svg'

let cards = [
    {
        icon: icon1,
        title: "A worldwide connection between IT candidates and employers"
    },
    {
        icon: icon2,
        title: "Online skill and language verification - prove your knowledge"
    },
    {
        icon: icon3,
        title: "Online IT profile database - get discovered"
    },
    {
        icon: icon4,
        title: "Your next IT job awaits: explore Vacancies and Companies"
    }
]


const Prepare = () => {
    return (
        <div className="container py-12 md:py-20 lg:py-32 flex flex-col gap-12 md:gap-16 lg:gap-20 justify-center">
          <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[680px] tracking-wide">Get prepared and trained to work for an international IT company!</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 {cards.map((item)=>(
                     <div key={item.title} className=" bg-[#F8F8F8]  rounded flex flex-col justify-around items-start p-4 md:p-6 gap-6 md:gap-8">
                         <img src={item.icon} alt="icon" className="w-12 h-12 md:w-auto md:h-auto" />
                         <h3 className="text-lg md:text-xl text-[#1D4645] font-semibold">{item.title}</h3>
                     </div>
                 ))}
             </div>
          </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-12 lg:gap-20">
                <h2  className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-[480px] tracking-wide">Trusty Talents: Your Bridge to the Booming IT Job Market</h2>
                <p className="text-base md:text-lg text-[#475467] max-w-[680px]">In today's rapidly evolving IT landscape, connecting with the right opportunities and talent is more crucial than ever. Trusty Talents bridges this gap, linking skilled IT professionals with global employers. Candidates can easily upload their CVs, creating a database for companies seeking to fill IT roles quickly and efficiently. Let Trusty Talents be your bridge to success in the global IT industry.</p>
            </div>
        </div>
    )
}
export default Prepare
