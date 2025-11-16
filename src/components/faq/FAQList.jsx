import FAQItem from "./FAQItem.jsx";
export default function FAQList() {
    const faqs = [
        {
            question: "How do I register on the Trusty Talents Portal?",
            answer:
                `Registration is simple! Just click on the "Create Profile" button on the homepage. 
        You'll be guided through a quick process to create your profile using your email address.`,
        },
        {
            question: "How do I create my CV on the platform?",
            answer: `You can create your CV directly in your profile section…`,
        },
        {
            question: "What is the skill and language verification process, and how do I complete it?",
            answer: `The platform guides you through testing your skills and languages…`,
        },
        {
            question: "Is it mandatory to verify my skills and languages to use the platform?",
            answer: `The platform guides you through testing your skills and languages…`,
        },
        {
            question: "How do I find and apply for IT job vacancies on Trusty Talents?",
            answer: `The platform guides you through testing your skills and languages…`,
        },
        {
            question: "Will employers be able to see my profile even if I don't apply for specific vacancies?",
            answer: `The platform guides you through testing your skills and languages…`,
        },
        {
            question: "Is there any cost for candidates to register and use the Trusty Talents Portal?",
            answer: `The platform guides you through testing your skills and languages…`,
        },
    ];

    return (
        <div className="container flex flex-col lg:flex-row justify-between gap-8 md:gap-12 py-12 md:py-20 lg:py-24">
            <div className="max-w-full lg:max-w-xl w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Frequently asked questions</h2>
                {faqs.map((item, i) => (
                    <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
            </div>
           <div className="w-full lg:w-[48%] h-[300px] md:h-[400px] lg:h-[652px] bg-[url('/assets/images/faq__card.jpg')] bg-cover bg-center rounded mt-6 lg:mt-0">
           </div>
        </div>
    );
}
