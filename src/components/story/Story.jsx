import storyBg1 from '/assets/images/story__card__1.jpg'
import storyBg2 from '/assets/images/story__card__2.jpg'
import storyBg3 from '/assets/images/story__card__3.jpg'
import storyLogo from '/assets/images/story__logo.svg'

const Story = () => {

    let storyCards = [
        {
            bcg: storyBg1,
            username: "Daniel Mitchell",
            job: "UX/UI Designer",
            desc: "“I uploaded my CV and within two weeks, I had an interview with a European IT company.”",
            icon: storyLogo,
        },
        {
            bcg: storyBg2,
            username: "Sophia Reynolds",
            job: "Full-Stack Developer",
            desc: "“TrustyTalents helped me prove my skills and quickly land a remote developer role.”",
            icon: storyLogo,
        },
        {
            bcg: storyBg3,
            username: "Alexander Novak",
            job: "Content Manager",
            desc: "“I never thought finding an international job could be this easy and fast!”",
            icon: storyLogo,
        }
    ]

    return (
            <div className="items-start container flex flex-col gap-4 py-36 md:items-center lg:items-start">
                <h2 className="font-bold text-4xl">Success Stories</h2>
                <p className="text-lg text-[#475467]">Real professionals who started their career with TrustyTalents.</p>
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 ">
                {storyCards.map((card) => (
                        <div
                            key={card.username}
                            className="max-w-[380px] h-[550px] mx-auto relative rounded overflow-hidden flex flex-col justify-end px-4 pb-4"
                            style={{ backgroundImage: `url(${card.bcg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            {/* Bottom gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent"></div>

                            {/* Content on top of overlay */}
                            <div className="relative flex flex-col items-start justify-end gap-4 text-white ">
                                <img src={card.icon} alt="story__logo" className="w-9 h-9" />
                                <p className="text-lg max-w-[348px] h-[87px] tracking-wide">{card.desc}</p>
                                <div>
                                    <h3 className="font-semibold">{card.username}</h3>
                                    <span className="text-sm text-white/80">{card.job}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

    )
}
export default Story
