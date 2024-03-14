import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Image  from "next/image"


library.add(fab, faArrowRight)


const ProjectContainer = ({title , description, image, repo, demo, icon}) => {
    return (
        <>
            <div className="bg-black-700 flex flex-col justify-between h-[70vh] max-h-[500px] min-h-[400px] w-full min-w-[290px] max-w-[310px] p-4">
                <div className="w-full h-max">
                    <div className="w-full h-44">
                        <Image alt="image"  src={image} className="object-contain w-full h-full" />
                    </div>
                    <p className="text-green mt-8 text-2xl font-medium">
                        {title}
                    </p>
                    <p className="text-white mt-2 text-sm font-medium">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between mt-10 text-green text-xl">
                    <a href={repo} target="_blank" className="cursor-none md:cursor-pointer hover:text-off-white" >
                        <FontAwesomeIcon icon={["fab", icon == "figma" ? "figma" : "github"]} />
                    </a>
                    <a href={demo} target="_blank" className="cursor-none md:cursor-pointer hover:text-off-white" >
                        VIEW DEMO
                        <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                    </a>
                </div>
            </div>
        </>
    )
}


export const ProjectContainerLast = ({children}) => {
    return (
        <>
            <div className="bg-black-700 flex items-center justify-center h-[70vh] max-h-[500px] min-h-[400px] w-full min-w-[290px] max-w-[310px] p-4">
                {children}
            </div>
        </>
    )
}

export default ProjectContainer