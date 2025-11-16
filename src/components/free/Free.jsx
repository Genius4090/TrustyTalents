



const Free = () => {
    return (
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 py-12 md:py-16 lg:py-20">
            <div className="w-full lg:w-[48%] h-[200px] md:h-[230px] lg:h-[258px] rounded bg-[url('/assets/images/free__bcg.jpg')] bg-cover bg-center">
            </div>
            <div className="w-full lg:w-[48%] h-[200px] md:h-[230px] lg:h-[258px] rounded bg-[#009483] flex flex-col items-start justify-center gap-4 md:gap-5 px-6 md:px-8">
                <h3 className="font-bold text-2xl md:text-3xl text-white">Always Free for Candidates</h3>
                <p className="text-base md:text-lg text-white">Joining and using Trusty Talents costs you nothing</p>
                <button className="cursor-pointer bg-white px-6 md:px-8 py-4 md:py-5 rounded text-sm md:text-base text-[#009483]">Create Profile</button>
            </div>

        </div>
    )
}
export default Free
