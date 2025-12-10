"use client";
import {useEffect} from "react";
import Header from "@/components/header.jsx"

const NotFound = () => {
  useEffect(() => {
    document.title = "404"
  },[])
  
  return (
    <>
      <Header activePage="404"/>
      <div className="w-full h-5/6 flex justify-center items-center p-10">
        <p className="text-green text-xl text-center font-medium">404 NOT FOUND</p>
      </div>
    </>
  )
}

export default NotFound
