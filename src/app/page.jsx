"use client";
import Image from 'next/image'
import {useEffect, useState, useRef} from "react";
import Link from 'next/link'
import "animate.css"
import useAnimationOnScroll from "@/helpers/animate.js"
import Header from "@/components/header.jsx"
import FixedInfo from "@/components/fixedinfo.jsx"
import Photo from "@/assets/favicon.jpg"

const Home = () => {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const scrollElem = useRef(null)

  const wordsArray = ["INNOVATIVE", "EFFICIENT", "USER-FRIENDLY"];

  useAnimationOnScroll(scrollElem)
  useEffect(() => {
    const interval = setInterval(() => {
        const word = wordsArray[wordIndex]
        if(text.length < word.length) {
            setText(prev => prev + word[charIndex]);
            setCharIndex(prev => prev + 1)
        }
        else {
            setTimeout(() => {
                setText("");
                setCharIndex(0)
                setWordIndex(prev => prev + 1 === wordsArray.length ? 0 : prev + 1)
            }, 900)
        }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex, charIndex]);
  

  useEffect(() => {
    document.title = "Home - Udezue Oluomachi Chimaobi";
  })

  return (
    <>
      <Header activePage="home"/>
      <FixedInfo scrollRef={scrollElem} />
      <div className="w-full px-3 md:px-10 h-5/6 overflow-y-auto scroll-smooth" ref={scrollElem}>
        <div className="animate-onscroll-trigger flex items-center flex-col w-full p-10 h-full">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                <Image src={Photo} animation-settings="animate__fadeIn animate_slow animate__delay-1s" className="animate__onscroll object-cover rounded-full w-full h-full" />
            </div>
            <div className="mt-4 md:mt-8">
                <p animation-settings="animate__slideInDown" className="animate__onscroll text-green text-xl md:text-2xl font-medium text-center">
                    HI, I AM OLUOMACHI UDEZUE
                </p>
            </div>
            <div className="mt-8 md:mt-14">
                <p animation-settings="animate__backInUp" className="animate__onscroll text-white text-3xl md:text-5xl font-bold text-center">
                    A FULLSTACK DEVELOPER & DESIGNER
                </p>
            </div>
        </div>
        <div className="animate-onscroll-trigger flex items-center flex-col w-full p-10 h-full">
            <div className="mt-4 md:mt-8">
                <p animation-settings="animate__fadeInDown animate__slower" className="animate__onscroll text-green text-2xl md:text-4xl font-bold text-center">
                    YOU NEED ME FOR
                </p>
            </div>
            <div className="md:flex md:translate-x-8  md:divide-green md:divide-x-2 mt-8 md:mt-14 text-white text-base text-center md:text-xl font-medium">
                <div className="md:text-right px-6">
                    <p className="my-2 md:my-5 animate__onscroll" animation-settings="animate__slideInLeft animation__delay-2s">
                        WEB DEVELOPMENT
                    </p>
                    <p className="my-2 md:my-5 animate__onscroll" animation-settings="animate__slideInRight animation__delay-2s">
                        WEB SCRAPING
                    </p>
                    <p className="my-2 md:my-5 animate__onscroll" animation-settings="animate__slideInLeft animation__delay-2s">
                        API DEVELOPMENT
                    </p>
                </div>
                <div className="md:text-left px-6">
                    <p className="my-2 md:my-5 animate__onscroll" animation-settings="animate__slideInRight animation__delay-2s">
                        UI DESIGNS
                    </p>
                    <p className="my-2 md:my-5 animate__onscroll" animation-settings="animate__slideInLeft animation__delay-2s">
                        MOBILE APP DEVELOPMENT
                    </p>
                </div>
            </div>
        </div>
        <div className="animate-onscroll-trigger flex items-center flex-col w-full p-10 h-full">
            <div className="animate__onscroll mt-4 md:mt-8" animation-settings="animate__fadeInDown animation">
                <p className="text-white text-base text-center md:text-xl font-medium">
                    DRIVEN BY
                </p>
            </div>
            <div className="animate__onscroll mt-8 md:mt-14" animation-settings="animate__fadeInUpBig">
                <p className="text-green text-2xl md:text-4xl font-bold text-center">
                    A PASSION FOR INOVATION AND EXCELLENCE
                </p>
            </div>
        </div>
        <div className="animate-onscroll-trigger flex items-center flex-col w-full p-10 h-full">
            <div className="animate__onscroll mt-4 md:mt-8" animation-settings="animate__fadeInDown" >
                <p className="text-white text-base text-center md:text-xl font-medium">
                    I DO
                </p>
            </div>
            <div className="text-white mt-8 md:mt-14" >
                <p className="text-2xl md:text-4xl font-bold text-center">
                    <span className="mr-4">CREATE SOFTWARE THAT IS</span>
                    <span className="text-green">{text}</span>
                    <span className="border-r-4 border-r-green animate-pulse"></span>
                </p>
            </div>
            <div className="text-white mt-10 md:mt-16">
                <p className="text-center text-base animate__onscroll" animation-settings="animate__fadeIn animate__delay-1s">
                I'm always looking for new challenges and opportunities to learn and grow as a programmer.<br />I'm interested in new opportunities and offers that'll help my career.
                </p>
            </div>
            <div className="flex justify-center items-center flex-col sm:flex-row h-min w-11/12 mt-10 md:mt-16 text-base font-medium">
                <Link href="/works" className="animate__onscroll hover:opacity-80 md:cursor-pointer cursor-none flex justify-center items-center bg-green h-12 w-48 md:h-16 md:w-72 mx-4 mb-5 text-black-800" animation-settings="animate__slideInRight" >
                    SEE MY WORKS
                </Link>
                <a href="mailto:basilchimaobi2@gmail.com" className="animate__onscroll hover:opacity-80 md:cursor-pointer cursor-none flex justify-center items-center h-12 w-48 md:h-16 md:w-72 border-2 border-green mx-4 mb-5 text-green" animation-settings="animate__slideInLeft" >
                    HIRE ME
                </a>
            </div>
            <div className="text-white mt-8 md:mt-10">
                <p className="animate__onscroll text-center text-sm" animation-settings="animate__fadeInUp animate__delay-1s">
                    &copy; 2023, UDEZUE OlUOMACHI CHIMAOBI; All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
