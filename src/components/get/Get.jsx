import icon1 from '/assets/images/get__logo__1.svg'
import icon2 from '/assets/images/get__logo__2.svg'
import icon3 from '/assets/images/get__logo__3.svg'
import icon4 from '/assets/images/get__logo__4.svg'

const Get = () => {
    const getList = [
        {
            icon: icon1,
            title: "Quick and simple registration",
            desc: "Create your profile and CV in just a few easy steps."
        },
        {
            icon: icon2,
            title: "Upload your existing CV with AI",
            desc: "Let the system automatically extract and fill your CV details in seconds."
        },
        {
            icon: icon3,
            title: "Verified skill & language tests",
            desc: "Take Telegram-based tests and showcase verified results."
        },
        {
            icon: icon4,
            title: "CV hosting & profile visibility",
            desc: "Keep your CV online and accessible to verified employers worldwide."
        }
    ]
    return (
        <div className="container flex flex-col justify-between gap-8">
            <h2 className="font-bold text-4xl">What You Get</h2>
            <div className="grid grid-cols-4 gap-5">
                {getList.map((item)=> (
                    <div key={item.title} className=" px-6 py-6 bg-[#1D4645] flex flex-col items-start justify-start gap-5">
                        <img src={item.icon} alt="get__icon"/>
                       <div className="max-w-[220px] ">
                           <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                           <p className="text-[#D9E8E7] mt-4">{item.desc}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Get
