import React from 'react'
import { ReactComponent as PugabullLogo } from "../assets/pugabull-logo.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as Telegram } from "../assets/telegram.svg"
import { ReactComponent as Mail } from "../assets/mail.svg"
import { ReactComponent as Wallet } from "../assets/wallet.svg"

export default function Navbar() {
  return (
    <div className="h-[70px] flex flex-row justify-between items-center px-[80px]">
      <PugabullLogo />
      <div className="flex flex-row gap-[50px] font-bold">
        <a href="">About</a>
        <a href="">Puganomics</a>
        <a href="">Roadmap</a>
        <a href="">Partners</a>
      </div>
      <div className="flex flex-row gap-[20px]">
        <Twitter className="cursor-pointer "/>
        <Instagram className="cursor-pointer "/>
        <Telegram className="cursor-pointer "/>
        <Mail className="cursor-pointer "/>
        <Wallet className="cursor-pointer "/>
      </div>
    </div>
  )
}
