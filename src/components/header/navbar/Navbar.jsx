import logo from "/assets/images/website__logo.svg"
import {RxHamburgerMenu} from "react-icons/rx";


const Navbar = () => {
    return (
        <div className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
            <div className="container flex justify-between items-center h-16 md:h-20">
                <img src={logo} alt="website__logo" className="h-8 md:h-10"/>
                <ul className="gap-6 md:gap-8 hidden lg:flex">
                    <li className="text-sm md:text-base cursor-pointer hover:text-[#009483] transition-colors">Vacancies and Companies </li>
                    <li className="text-sm md:text-base cursor-pointer hover:text-[#009483] transition-colors">Trainings</li>
                    <li className="text-sm md:text-base cursor-pointer hover:text-[#009483] transition-colors">Contacts</li>
                    <li className="text-sm md:text-base cursor-pointer hover:text-[#009483] transition-colors">For Employers</li>
                </ul>
                <div className="hidden gap-3 md:gap-4 lg:flex">
                    <button className="cursor-pointer py-2 md:py-3 px-4 md:px-6 rounded border-2 border-[#009483] text-[#009483] text-xs md:text-sm hover:bg-[#009483] hover:text-white transition-colors">Log in</button>
                    <button className="cursor-pointer py-2 md:py-3 px-4 md:px-6 rounded bg-[#009483] text-white text-xs md:text-sm hover:bg-[#007a6d] transition-colors">Create Profile</button>
                </div>
                <a href="#" className="block text-2xl lg:hidden text-[#009483]"><RxHamburgerMenu /></a>

            </div>

        </div>
    )
}
export default Navbar
