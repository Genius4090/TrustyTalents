



const Free = () => {
    return (
        <div className="container flex items-center justify-between py-20">
            <div className="w-[580px] h-[258px] rounded bg-[url('/assets/images/free__bcg.jpg')] bg-cover bg-center">
            </div>
            <div className="w-[580px] h-[258px] rounded bg-[#009483] flex flex-col  items-start justify-center gap-5 px-8">
                <h3 className="font-bold text-3xl text-white">Always Free for Candidates</h3>
                <p className="text-lg text-white">Joining and using Trusty Talents costs you nothing</p>
                <button className="bg-white px-8 py-5 rounded text-[#009483]">Create Profile</button>
            </div>

        </div>
    )
}
export default Free
