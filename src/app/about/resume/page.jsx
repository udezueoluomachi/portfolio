"use client";
import {useEffect} from "react";
import Header from "@/components/header.jsx"

const Resume = () => {
  useEffect(() => {
    document.title = "Resume - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="about"/>
      <div className="w-full h-5/6 flex justify-center items-center">
        <a className="text-white hover:text-green text-sm font-base cursor-none md:cursor-pointer" href="https://drive.google.com/file/d/1F_3cWTK2jyhi9_ouGH-tgipr6btZ6PmR/view?usp=sharing" target="_blank">
          VIEW RESUME
        </a>
      </div>
    </>
  )
}

export default Resume