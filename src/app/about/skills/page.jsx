"use client";
import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Header from "@/components/header.jsx"
import TitleUnderline from "@/components/titleunderline.jsx"
import FixedInfo from "@/components/fixedinfo.jsx"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars)

const Skills = () => {
  const scrollElem = useRef(null)

  useEffect(() => {
    document.title = "Skills - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="about"/>
      <FixedInfo scrollRef={scrollElem} />
      <div className="w-full px-3 md:px-10 h-[92vh]">
        <div className="flex items-center flex-col w-full lg:p-10 h-full overflow-y-auto" ref={scrollElem}>
            <div className="mt-8 md:mt-14 flex flex-col items-center">
                <p className="text-white text-2xl md:text-5xl font-bold text-center">
                  SKILLS
                </p>
                <TitleUnderline />
            </div>
            <div className="mt-8 md:mt-14 flex justify-center items-start flex-wrap gap-4 sm:p-4 h-max w-full">
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="head-side-virus" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  PROBLEM SOLVING
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  I possess a strong grasp of the problem-solving process and am adept at finding optimal solutions. I am committed to exploring new ideas and approaches to problem-solving, and I am always open to feedback and new ideas.
                </p>
              </div>
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="laptop-code" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  WEB DEVELOPMENT
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  I'm highly talented in building amazing and user-friendly websites for businesses, people and more. I believe websites are the interface of the internet.&apos;
                </p>
              </div>
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="shapes" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  UI/UX DESIGN
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  Creating cool User interfaces are one of my super powers. Minimalistic UI and intuitive user experiences are my core concepts of design. 
                </p>
              </div>
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="mobile-alt" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  MOBILE APP DEVELOPMENT
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  I develop efficient cross-platform mobile applications which work smoothly on both Android and IOS operating systems.
                </p>
              </div>
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="database" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  DATABASE MANAGEMENT
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  I have quite some experience in managing databases. No matter what kind of database you need,SQL or NO-SQL and how large it is, I can manage it efficiently.
                </p>
              </div>
              <div className="w-full text-center p-3 md:p-5 min-h-[320px] max-h-[400px]">
                <div className="text-3xl md:text-5xl text-white">
                  <FontAwesomeIcon icon="pie-chart" />
                </div>
                <p className="text-green font-medium text-lg md:text-4xl mt-[36px]">
                  API DEVELOPMENT & WEB SCRAPING
                </p>
                <p className="text-white font-normal text-base mt-[51px] mx-auto">
                  Not only do I develop websites and mobile apps, I also develop APIs which these services would run on and also communicate to databases through this. I am also quite experienced in scraping websites for information.
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Skills