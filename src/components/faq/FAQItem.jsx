import { useState } from "react";

export default function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 py-4">

            <button
                onClick={() => setOpen(!open)}
                className={`w-full flex justify-between items-center text-left transition-all`}
            >
        <span className="text-lg font-semibold ">
          {question}
        </span>

                <span
                    className={`text-2xl font-light transition-transform duration-200 text-[#1D4645]
            ${open ? "rotate-45" : ""}`}
                >
          +
        </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300
          ${open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-[#475467] leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}
