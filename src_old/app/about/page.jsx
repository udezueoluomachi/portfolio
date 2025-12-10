"use client";
import {useEffect} from "react";
import Link from 'next/link'
import Header from "@/components/header.jsx"

const About = () => {
  useEffect(() => {
    document.title = "About - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="about"/>
      <nav className="w-full h-5/6 flex flex-col justify-center items-center p-10">
        <Link href="/about/resume" className="text-white animate__animated animate__slideInLeft hover:text-green text-xl text-center font-medium m-3">
            RESUME
        </Link>
        <Link href="/about/skills" className="text-white animate__animated animate__slideInRight hover:text-green text-xl text-center font-medium m-3">
            SKILLS
        </Link>
        <Link href="/about/stacks" className="text-white animate__animated animate__slideInLeft hover:text-green text-xl text-center font-medium m-3">
            TECH STACKS
        </Link>
      </nav>
    </>
  )
}

export default About