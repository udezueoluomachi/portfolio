"use client";
import {useEffect} from "react";
import Header from "@/components/header.jsx"

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Udezue Oluomachi Chimaobi"
  },[])
  return (
    <>
      <Header activePage="blog"/>
      <div className="w-full h-5/6 flex justify-center items-center p-10">
        <p className="text-green text-xl text-center font-medium">COMING SOON!</p>
      </div>
    </>
  )
}

export default Blog
