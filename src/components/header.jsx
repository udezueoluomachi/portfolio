import {useState} from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideMenu from "./sidemenu.jsx"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faBars} from '@fortawesome/free-solid-svg-icons'


library.add(fab, faEnvelope, faBars)


const Header = ({activePage}) => {
    const [shown, setShown] = useState(false)

    const toggleMenu = () => {
        const menu = document.querySelector("#side-menu")
        if(shown) {
            menu.classList.remove("animate__fadeInRight")
            menu.classList.add("hidden")
            setShown(false)
        }
        else {
            menu.classList.add("animate__fadeInRight")
            menu.classList.remove("hidden")
            setShown(true)
        }
    }

    return(
        <>
            <SideMenu />
            <header className="sticky top-0 flex items-center justify-between w-full px-3 md:px-10 h-[15vh] max-h-[60px] md:max-h-[90px] md:min-h-[85px]">
                <div>
                    <Link href="/" className="text-xl md:text-2xl">
                        <span className="text-green">D</span>
                        <span className="text-white">REAM</span>
                    </Link>
                </div>
                <nav className="hidden lg:flex text-base text-white translate-x-8">
                    <Link href="/" className={`cursor-none lg:cursor-pointer mx-6 hover:text-green decoration-green decoration-2 underline-offset-8  ${activePage === "home" ? "underline" : ""}`}>
                        HOME
                    </Link>
                    <Link href="/works" className={`cursor-none lg:cursor-pointer mx-6 hover:text-green decoration-green decoration-2 underline-offset-8  ${activePage === "works" ? "underline" : ""}`}>
                            WORKS
                    </Link>
                    <Link href="/about" className={`cursor-none lg:cursor-pointer mx-6 hover:text-green decoration-green decoration-2 underline-offset-8  ${activePage === "about" ? "underline" : ""}`}>
                        ABOUT
                    </Link>
                    <Link href="/blog" className={`cursor-none lg:cursor-pointer mx-6 hover:text-green decoration-green decoration-2 underline-offset-8  ${activePage === "blog" ? "underline" : ""}`}>
                        BLOG
                    </Link>
                </nav>
                <div className="hidden lg:block">
                    <a href="mailto:basilchimaobi2@gmail.com" className="cursor-none lg:cursor-pointer text-green hover:text-green/70 text-base">
                        <span className="mr-3">GET IN TOUCH</span>
                        <FontAwesomeIcon icon="envelope" />
                    </a>
                </div>
                <button onClick={toggleMenu} className="menu-toggler cursor-none lg:cursor-pointer lg:hidden text-green hover:text-green/70 text-lg">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </header>
        </>
    )
}

export default  Header