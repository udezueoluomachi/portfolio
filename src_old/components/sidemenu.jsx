import Link from "next/link"

const SideMenu = () => {
    return (
        <>
            <div id="side-menu" className="animate__animated hidden z-10 w-screen h-[92vh] sm:h-[96vh] bg-black-800 fixed top-[8vh] sm:top-[10vh]" >
                <nav className="w-full h-5/6 flex flex-col justify-center items-center p-10">
                    <Link href="/" className="text-off-white hover:text-green text-xl text-center font-medium m-2">
                        HOME
                    </Link>
                    <Link href="/works" className="text-off-white  hover:text-green text-xl text-center font-medium m-2">
                        WORKS
                    </Link>
                    <Link href="/about" className="text-off-white hover:text-green text-xl text-center font-medium m-2">
                        ABOUT
                    </Link>
                    <Link href="/blog" className="text-off-white  hover:text-green text-xl text-center font-medium m-2">
                       BLOG
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default SideMenu