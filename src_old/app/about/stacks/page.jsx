"use client";
import {useEffect, useRef} from "react";
import Header from "@/components/header.jsx"
import FixedInfo from "@/components/fixedinfo.jsx"
import TitleUnderline from "@/components/titleunderline.jsx"

const Stacks = () => {
  const scrollElem = useRef(null)

  useEffect(() => {
    document.title = "Tech Stacks - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="about"/>
      <FixedInfo scrollRef={scrollElem} />
      <div className="w-full px-3 md:px-10 h-[92vh]">
        <div className="flex items-center flex-col w-full lg:p-10 h-full overflow-y-auto"  ref={scrollElem}>
          <div className="mt-8 md:mt-14 flex flex-col items-center">
              <p className="text-white text-2xl md:text-5xl font-bold text-center">
                TECH STACKS
              </p>
              <TitleUnderline />
          </div>
          <div className="mt-8 md:mt-14 flex justify-center items-start flex-wrap gap-4 sm:p-4 h-max w-full">
            <div className="w-full h-max p-2 mb-10">
              <p className="text-green text-center font-medium text-lg md:text-2xl">
                PROGRAMMING / MARKUP LANGUAGES
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center font-medium md:text-left text-center text-white text-base md:text-xl h-max w-full max-w-[520px] mt-12 mx-auto">
                <div>
                  <p>
                    HTML
                  </p>
                  <p>
                    CSS
                  </p>
                  <p>
                    JAVASCRIPT
                  </p>
                </div>
                <div>
                  <p>
                    XML
                  </p>
                  <p>
                    PHP
                  </p>
                  <p>
                    PYTHON
                  </p>
                </div>
                <div>
                  <p>
                    MARKDOWN
                  </p>
                  <p>
                    ES6
                  </p>
                  <p>
                    JSON
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-max p-2 mb-10">
              <p className="text-green text-center font-medium text-lg md:text-2xl">
                FRONTEND TOOLS
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center font-medium md:text-left text-center text-white text-base md:text-xl h-max w-full max-w-[520px] mt-12 mx-auto">
                <div>
                  <p>
                    REACT JS
                  </p>
                  <p>
                    JQUERY
                  </p>
                  <p>
                    TAILWIND CSS
                  </p>
                </div>
                <div>
                  <p>
                    ANIMATE CSS
                  </p>
                  <p>
                    POST CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-max p-2 mb-10">
              <p className="text-green text-center font-medium text-lg md:text-2xl">
                BACKEND / SERVER / DATABASE / API
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center font-medium md:text-left text-center text-white text-base md:text-xl h-max w-full max-w-[520px] mt-12 mx-auto">
                <div>
                  <p>
                    NODE JS
                  </p>
                  <p>
                    EXPRESS JS
                  </p>
                  <p>
                    MYSQL
                  </p>
                </div>
                <div>
                  <p>
                    MONGO DB 
                  </p>
                  <p>
                    MONGOOSE
                  </p>
                  <p>
                    CPANEL
                  </p>
                </div>
                <div>
                  <p>
                    SQL
                  </p>
                  <p>
                    JWT / OAUTH
                  </p>
                  <p>
                    GOOGLE APIS
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-max p-2 mb-10">
              <p className="text-green text-center font-medium text-lg md:text-2xl">
                MOBILE APP
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center font-medium md:text-left text-center text-white text-base md:text-xl h-max w-full max-w-[520px] mt-12 mx-auto">
                <div>
                  <p>
                    REACT NATIVE
                  </p>
                  <p>
                    EXPO
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-max p-2 mb-10">
              <p className="text-green text-center font-medium text-lg md:text-2xl">
                OTHERS
              </p>
              <div className="flex flex-col md:flex-row md:justify-between justify-center font-medium md:text-left text-center text-white text-base md:text-xl h-max w-full max-w-[520px] mt-12 mx-auto">
                <div>
                  <p>
                    NPM
                  </p>
                  <p>
                    FIGMA
                  </p>
                  <p>
                    GIT-GITHUUB
                  </p>
                </div>
                <div>
                  <p>
                    BASH
                  </p>
                  <p>
                    CMD
                  </p>
                  <p>
                    GOOGLE.COM
                  </p>
                </div>
                <div>
                  <p>
                    STACK OVERFLOW
                  </p>
                  <p>
                    DRIBBLE.COM
                  </p>
                  <p>
                    COMMUNITY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stacks