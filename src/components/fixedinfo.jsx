import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useEffect, useRef} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'


library.add(fab, faChevronDown)


const FixedInfo = ({scrollRef}) => {
    const scrollIndicatior = useRef();

    useEffect(() => {

        const scrollableElement = scrollRef ? scrollRef.current : null;
        const indicator = scrollIndicatior.current || null;

        const hide = () => indicator.style.display = "none"
        const show = () => indicator.style.display = "flex"

        if(!scrollableElement) {
            hide()
            return
        }
        
        const h = scrollableElement.getBoundingClientRect().height;

        scrollableElement.addEventListener("scroll", e => {
            if((scrollableElement.scrollHeight < (h + scrollableElement.scrollTop + 30) )) {
                hide()
            }
            else {
                show()
            }
        })
    },[])
    return (
        <>
            <div className="hidden md:block text-xl fixed bottom-10 left-10 text-white">
                <div className="bg-black-500 w-[2px] h-[101px] mx-auto"></div>
                <a href="https://github.com/udezueoluomachi" target="_blank" className="block mt-2 hover:text-green">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
                <a href="https://twitter.com/@udezueoluomachi" target="_blank" className="block mt-2 hover:text-green">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
                <a href="https://facebook.com/udezueoluomachi.chimaobi" target="_blank" className="block mt-2 hover:text-green">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
            </div>
            <div ref={scrollIndicatior} className="animate-bounce flex fixed bottom-10 left-[46%] md:left-[48%] justify-center items-center w-8 h-8 border bg-black-700/50  border-black-500/30 rounded-full">
                <FontAwesomeIcon  icon="chevron-down" className="text-sm text-green/30" />
            </div>
            <div className="hidden md:block fixed bottom-10 right-10 text-white">
                <p className="text-base">v0.0.5</p>
            </div>
        </>
    )
}

export default FixedInfo