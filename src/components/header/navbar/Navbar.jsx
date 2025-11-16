import logo from "/assets/images/website__logo.svg"
import {RxHamburgerMenu} from "react-icons/rx";


const Navbar = () => {
    return (
        <div className="w-full bg-white fixed px-4">
            <div className="container flex justify-between items-center h-20">
                <img src={logo} alt="website__logo"/>
                <ul className="gap-8 hidden sm:hidden md:hidden lg:flex">
                    <li>Vacancies and Companies </li>
                    <li>Trainings</li>
                    <li>Contacts</li>
                    <li>For Employers</li>
                </ul>
                <div className="hidden gap-4 sm:hidden md:hidden lg:flex">
                    <button className="py-3 px-6 rounded border-2 border-[#009483] text-[#009483]  text-sm">Log in</button>
                    <button className="py-3 px-6 rounded bg-[#009483] text-white text-sm ">Create Profile</button>
                </div>
                <a href="#" className="block text-2xl lg:hidden"><RxHamburgerMenu /></a>

            </div>

        </div>
    )
}
export default Navbar
