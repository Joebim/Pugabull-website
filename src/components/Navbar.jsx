import React, { useState } from 'react'
import { ReactComponent as PugabullLogo } from "../assets/pugabull-logo.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as Telegram } from "../assets/telegram.svg"
import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Reddit } from "../assets/reddit.svg"
import { ReactComponent as PugabullLogoHead } from "../assets/pugabull-logo-head.svg"
import { ReactComponent as Gradient } from "../assets/gradient-background.svg"


export default function Navbar(props) {

  const [sidebarToggle, setSidebarToggle] = useState(false)


  return (
    <>
      <div className="h-[70px] flex flex-row justify-between items-center px-[20px] md:px-[80px]">
        <PugabullLogo className="hidden md:block" />
        <div className="block md:hidden w-[50px] z-[100]">
          <PugabullLogoHead className="w-full h-full" viewBox="0 0 742 650" preserveAspectRatio="xMidYMid meet" />
        </div>


        <div className="hidden lg:flex flex-row gap-[50px] font-primary-glow text-[17px]">


          <div onClick={()=> props.scrollToSection(props.aboutRef)} className="group">
            <p className="cursor-pointer">About</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> props.scrollToSection(props.puganomicsRef)} className="group">
            <p className="cursor-pointer">Puganomics</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> props.scrollToSection(props.roadmapRef)} className="group">
            <p className="cursor-pointer">Roadmap</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> props.scrollToSection(props.partnersRef)} className="group">
            <p className="cursor-pointer">Partners</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>



        </div>
        <div className="hidden md:flex flex-row gap-[20px]">
          <a href="https://x.com/pugacoin"><Twitter className="cursor-pointer text-secondary " /></a>
          <a href="http://instagram.com/pugacoin"> <Instagram className="cursor-pointer text-secondary " /></a>
          <a href="http://t.me/pugacoin"> <Telegram className="cursor-pointer text-secondary " /></a>
          <a href="http://facebook.com/pugacoin"><Facebook className="cursor-pointer text-secondary " />   </a>
          <a href="http://reddit.com/u/pugacoin"><Reddit className="cursor-pointer text-secondary " />    </a>
        </div>

        <div className={`md:hidden hamburger-contain flex justify-end z-[100] h-[60px] w-[60px] items-center ${sidebarToggle ? "show" : ""}`}>
          <label htmlFor="relative">
            <input type="checkbox" className="opacity-0 h-[60px] w-[60px] relative z-[102]"
              onClick={() => { setSidebarToggle(!sidebarToggle) }} />
            <div className="absolute  bar top-0 cursor-pointer flex justify-start h-[60px] w-[60px] z-[101]">
              <span className={`top rounded-[50px] absolute duration-[0.5s] ${sidebarToggle ? "bg-white rotate-[-45deg] w-[40px] origin-right top-[18px] left-[-14px]" : "bg-brown "} bottom-[13px] h-[4px] w-[25px]`}></span>
              <span className={`middle rounded-[50px] absolute duration-[0.5s] ${sidebarToggle ? "bg-white translate-x-[20px] opacity-0" : "bg-brown"} top-[32px] h-[4px] w-[40px] `}></span>
              <span className={`bottom rounded-[50px] absolute duration-[0.5s] ${sidebarToggle ? "bg-white  rotate-[45deg] w-[40px] origin-right top-[45px] left-[-14px]" : "bg-brown "} top-[20px] h-[4px] w-[25px]`}></span>
            </div>
          </label>
        </div>
      </div>


      <div
        className={`${sidebarToggle ? "translate-y-0" : "-translate-y-full"
          } md:hidden bg-[#000000] absolute top-0 left-0 w-full h-screen text-center overflow-hidden transition-all duration-500 ease-in-out z-[90]`}
      >
        <Gradient className="absolute h-full" />
        <div className="flex flex-col gap-[200px] mt-16 items-center py-[40px] h-full">
          <div className="flex flex-col gap-8 items-center text-white text-[20px] font-primary-glow z-[100]">
          <div onClick={()=> {
            props.scrollToSection(props.aboutRef);
            setSidebarToggle(false)
            }} className="group">
            <p className="cursor-pointer">About</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> {
            props.scrollToSection(props.puganomicsRef);
            setSidebarToggle(false)
            }} className="group">
            <p className="cursor-pointer">Puganomics</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> {
            props.scrollToSection(props.roadmapRef);
            setSidebarToggle(false)
            }} className="group">
            <p className="cursor-pointer">Roadmap</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>

          <div onClick={()=> {
            props.scrollToSection(props.partnersRef);
            setSidebarToggle(false)
            }} className="group">
            <p className="cursor-pointer">Partners</p>
            <div className="w-full h-[6px] group-hover:opacity-100 opacity-0 duration-300 rounded-[3px] bg-primaryDark border-[2px] border-solid border-brown"></div>
          </div>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-between z-[100]">
            <a href="https://x.com/pugacoin"><Twitter className="cursor-pointer text-primaryLight " /></a>
            <a href="http://instagram.com/pugacoin"> <Instagram className="cursor-pointer text-primaryLight " /></a>
            <a href="http://t.me/pugacoin"> <Telegram className="cursor-pointer text-primaryLight " /></a>
            <a href="http://facebook.com/pugacoin"><Facebook className="cursor-pointer text-primaryLight " />   </a>
            <a href="http://reddit.com/u/pugacoin"><Reddit className="cursor-pointer text-primaryLight " />    </a>
          </div>
        </div>
      </div>
    </>
  )
}
