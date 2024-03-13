"use client";
import {useEffect, useRef} from "react";
import Header from "@/components/header.jsx"
import TitleUnderline from "@/components/titleunderline.jsx"
import ProjectContainer, {ProjectContainerLast} from "@/components/projectcontainer.jsx"
import FixedInfo from "@/components/fixedinfo.jsx"

import amaboLearn from "@/assets/images/amabo-learn.png";
import labourSearch from "@/assets/images/labour-search.jpg"
import nosqljsondb from "@/assets/images/nosqljsondb.png"
import ripplejs from "@/assets/images/ripplejs.png"
import stackion from "@/assets/images/stackion.jpeg"
import tickyBackend from "@/assets/images/ticky-backend.jpg"
import ticky from "@/assets/images/ticky-pc.jpg"
import gideon from "@/assets/images/gideon.png"
import uarel from "@/assets/images/uarel.png"
import textBg from "@/assets/images/text-bg.png"
import furnishack from "@/assets/images/furnishack.png"
import portfolio from "@/assets/images/portfolio.png"
import techBlog from "@/assets/images/tech-blog.png"
import losangelesmounts from "@/assets/images/losangelesmounts.png"
import virtul from "@/assets/images/virtul.png"
import giftedBrainiac from "@/assets/images/gifted-braniac.png"
import amaboV2 from "@/assets/images/amabo-v2.png"


const Work = () => {
  const scrollElem = useRef(null)
  useEffect(() => {
    document.title = "Works - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="works"/>
      <FixedInfo scrollRef={scrollElem} />
      <div className="w-full px-3 md:px-10 h-[92vh]">
        <div className="flex items-center flex-col w-full lg:p-10 h-full overflow-y-auto" ref={scrollElem}>
            <div className="mt-8 md:mt-14 flex flex-col items-center">
                <p className="text-white text-2xl md:text-5xl font-bold text-center">
                  PERSONAL PROJECTS
                </p>
                <TitleUnderline />
            </div>
            <div className="mt-8 md:mt-14 flex justify-center items-start flex-wrap gap-4 sm:p-4 h-max w-full">
              <ProjectContainer image={amaboV2} title="Amabo Learn Remake" repo="https://github.com/udezueoluomachi/amabo-learn-v2" demo="https://amabo-learn-v2.vercel.app/" description="Remake of a project I made with a friend years ago. Now in Nextjs - React" />
              <ProjectContainer image={giftedBrainiac} title="GIFTED BRAINAC API" repo="https://github.com/udezueoluomachi/gifted-braniac-backend" demo="https://gifted-braniac-backend.onrender.com" description="Backend server for a client's project. Project's deal was cut so it is mine now." />

              <ProjectContainer image={virtul} title="VIRTUL" repo="https://github.com/udezueoluomachi/virtul" demo="https://udezueoluomachi.github.io/virtul/" description="A virtual stock trading platform I built in 2022 formerly known as @stackion" />

              <ProjectContainer image={losangelesmounts} title="LOSANGELES MOUNTS" repo="https://github.com/udezueoluomachi/coalition-interview-task" demo="https://coalition-interview-task.vercel.app/" description="An interview skill test which required me to implement an already designed PSD file. Made with react - tailwindcss" />

              <ProjectContainer image={portfolio} title="My Portfolio UI" icon="figma" repo="https://www.figma.com/file/sKBySaPu5oOmmEfV2qH2Us/Portfolio-design?type=design&mode=design&t=8t8NYvQcK52ZdSN5-1" demo="https://www.figma.com/proto/sKBySaPu5oOmmEfV2qH2Us/Portfolio-design?type=design&t=8t8NYvQcK52ZdSN5-0&scaling=scale-down&page-id=0%3A1&node-id=0-1&prev-org-id=external-teams" description="UI design for my personal porfolio website. Designed on Figma." />

              <ProjectContainer image={techBlog} title="Tech Blog UI" icon="figma" repo="https://www.figma.com/file/2bPv7dn8siHYP4aqOAJLrJ/my-blog?type=design&mode=design&t=8t8NYvQcK52ZdSN5-1" demo="https://www.figma.com/proto/2bPv7dn8siHYP4aqOAJLrJ/my-blog?type=design&t=8t8NYvQcK52ZdSN5-0&scaling=scale-down&page-id=0%3A1&node-id=0-1&prev-org-id=external-teams" description="UI design for my tech blog which is yet to be developed. Designed on Figma." />

              <ProjectContainer image={furnishack} title="Furnishack UI" icon="figma" repo="https://www.figma.com/file/pVAVZVGfYClpi2rAFAICf2/furnishack?type=design&node-id=0%3A1&mode=design&t=GlDZfBzAYtSiRxTY-1" demo="https://www.figma.com/proto/pVAVZVGfYClpi2rAFAICf2/furnishack?type=design&node-id=1-2&t=8t8NYvQcK52ZdSN5-0&scaling=min-zoom&page-id=0%3A1" description="UI design for an E-shop that sells handcrafted home products. Designed on Figma." />

              <ProjectContainer image={ticky} title="Ticky" repo="https://github.com/udezueoluomachi/ticky" demo="https://udezueoluomachi.github.io/ticky/" description="A multiplayer tic-tac-toe game" />

              <ProjectContainer image={labourSearch} title="Labour Search" description="A platform which people can use to find labour services close to them" />

              <ProjectContainer image={stackion} title="Stackion" repo="https://github.com/stackion" demo="https://drive.google.com/file/d/1zYq4J6zYs3CFhB8JUcs1ru_HgDapZ-Hq/view?usp=sharing" description="A cross-platform mobile application which enables users to transfer money with / without an internet connection" />

              <ProjectContainer image={nosqljsondb} title="Nosql-json-DB" repo="https://github.com/udezueoluomachi/nosql-json-db" description="A nodejs framework which gives it users the ablility to use JSON files as databases 'CRUD'" />

              <ProjectContainer image={gideon} repo="https://github.com/udezueoluomachi/gideon-chatgpt-integration" demo="https://web.facebook.com/messages/t/100088338189363" title="Gideon FB-Chatbot" description="An AI facebook chatbot powered by openAI API" />

              <ProjectContainer image={ripplejs} repo="https://github.com/udezueoluomachi/ripplejs" demo="https://udezueoluomachi.github.io/ripplejs/" title="Ripplejs" description="A very flexible library for adding ripple effects to HTML elements based on mouse events" />
              
              <ProjectContainer image={uarel} repo="https://github.com/udezueoluomachi/uarel" demo="https://udezueoluomachi.github.io/uarel/" title="Uarel" description="A url shortener that uses github-pages as a host for the referal pages of links" />

              <ProjectContainer image={amaboLearn} repo="https://github.com/udezueoluomachi/amabolearn" title="Amabolearn" description="A platform where users find resources / information on specific highschool subjects" />

              <ProjectContainer image={tickyBackend} title="Ticky Backend Server" repo="https://github.com/udezueoluomachi/ticky-backend" demo="https://udezueoluomachi.github.io/ticky/" description="Backend Nodejs program for my multiplayer tic-tac-toe game" />

              <ProjectContainer image={textBg} title="Text-Bg" repo="https://github.com/udezueoluomachi/text-bg" demo="https://udezueoluomachi.github.io/text-bg/" description="A Color picker tool for selecting and viewing contrast between bg and text colors" />

              <ProjectContainerLast>
                <a href="https://github.com/udezueoluomachi?tab=repositories" target="_blank" className="text-white text-sm font-normal hover:text-green" >View more...</a>
              </ProjectContainerLast>
            </div>
        </div>
      </div>
    </>
  )
}

export default Work
