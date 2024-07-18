import React from 'react'
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as Telegram } from "../assets/telegram.svg"
import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Reddit } from "../assets/reddit.svg"

export default function Footer() {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='w-full h-auto sm:h-[70px] py-[30px] sm:p-0 bg-black flex flex-col sm:flex-row gap-[30px] sm:gap-0 justify-between items-center px-[20px] sm:px-[80px]'>
      <div className="hidden sm:flex flex-col text-white">
        <p className="text-[12px] sm:text-[13px]">Copyright 2024 $PUGA</p>
        <p className="text-[12px] sm:text-[13px]">Powered by Pugabull</p>
      </div>
      <div className="flex flex-row gap-[25px] items-center">
        <a href="https://x.com/pugacoin"><Twitter className="cursor-pointer text-primaryLight " /></a>
        <a href="http://instagram.com/pugacoin"> <Instagram className="cursor-pointer text-primaryLight " /></a>
        <a href="http://t.me/pugacoin"> <Telegram className="cursor-pointer text-primaryLight " /></a>
        <a href="http://facebook.com/pugacoin"><Facebook className="cursor-pointer text-primaryLight " />   </a>
        <a href="http://reddit.com/u/pugacoin"><Reddit className="cursor-pointer text-primaryLight " />    </a>
      </div>

      <div className="sm:hidden flex flex-col text-white">
        <p className="text-[12px] sm:text-[13px]">Copyright 2024 $PUGA</p>
        <p className="text-[12px] sm:text-[13px]">Powered by Pugabull</p>
      </div>
      <div
        onClick={scrollToTop}
        className="h-[50px] w-[50px] cursor-pointer rounded-full flex justify-center items-center border-white border-[1px] border-solid">
        <ArrowUp />
      </div>
    </footer>
  )
}
