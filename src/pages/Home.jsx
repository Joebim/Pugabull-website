import React from 'react'
import { ReactComponent as Eyes } from "../assets/eyes.svg"
import { ReactComponent as Hands } from "../assets/hands.svg"
import { ReactComponent as Illustration } from "../assets/landing-illustration.svg"
import { ReactComponent as Charity } from "../assets/charity.svg"
import { ReactComponent as Coins } from "../assets/coins.svg"
import { ReactComponent as Gradient } from "../assets/gradient-background.svg"
import { ReactComponent as CoinIllustration } from "../assets/coin-illustration.svg"
import { ReactComponent as CoinPair } from "../assets/coin-pair.svg"
import Button from '../components/Button'
import Slider from '../components/Slider'
import Card from '../components/Card'

export default function Home() {

  const pugaArray = Array.from({ length: 24 }, () => ({ text: "$PUGA" }));

  return (
    <>
      <div className="flex flex-col pt-[100px] gap-[30px] w-full items-center">
        <div className="flex flex-col items-center ">
          <div className="flex flex-row gap-[20px] items-center">
            <h1 className="text-[80px] text-brown font-primary-glow">The Best Way To</h1>
            <Eyes />
          </div>
          <div className="flex flex-row gap-[20px] items-center">
            <Hands />
            <h1 className="text-[80px] text-brown font-primary-glow">Invest In Good</h1>
          </div>
        </div>
        <div className="w-[50%]"><p className="text-[22px] text-center">A meme coin for good, harnessing laughter and internet culture to fuel positive change</p></div>
        <div className="">
          <Button
            topStyle="bg-secondary text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-black"
            baseStyle="bg-primaryLight rounded-[15px]"
            className="w-[250px] h-[50px]"
            slideTo="top-right"
          >Buy Presale</Button>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 ml-[-20px]">
            <div className="relative ">
              <Slider data={pugaArray} slant="right" className="absolute  mb-[30px]" />
              <Slider data={pugaArray} slant="left" className="absolute" />
            </div>
          </div>
          <Illustration className="" />
        </div>
      </div>
      <div className="px-[80px] flex flex-col gap-[20px]">
        <div className=" flex flex-col items-center">
          <div className="w-[70%]">
            <h1 className="font-primary-glow text-[55px] text-center text-orange text-stroke-black">Why <span className='text-secondary'>PUGA</span> is Paw-sitively Irresistible</h1>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex-[4] flex items-center">
            <div className="flex flex-col gap-[30px] w-full">
              <Card
                topStyle="bg-white rounded-[50px] font-[500] tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
                baseStyle="bg-primaryDark rounded-[50px]"
                className="w-full h-[210px]"
                slideTo="top-left"
              ><span className='text-secondary'>Pugabull</span> is all about
                <span className='text-secondary'> World Charity</span>. We combine our love for dogs and the playful
                <span className='text-secondary'> spirit of memes</span> to make a real
                <span className='text-secondary'> impact</span>. Our mission is to harness the
                <span className='text-secondary'> joy of laughter</span> and the community power of memes to support <span className='text-secondary'>charitable causes</span> across the <span className='text-secondary'>globe</span>.</Card>
              <Card
                topStyle="bg-white rounded-[40px] font-[500] tracking-tight leading-[25px] p-[25px] text-[22px] text-left text-black hover:m-0 duration-150"
                baseStyle="bg-primaryDark rounded-[40px]"
                className="w-full h-[110px]"
                slideTo="top-left"
              >Pugabull is all about World Charity. We combine the playful spirit of memes with the powerful</Card>
              <div className="flex flex-row gap-[20px]">
                <Button
                  topStyle="bg-orangeDark text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-black gap-[10px]"
                  baseStyle="bg-primaryLight rounded-[15px]"
                  className="w-full h-[70px]"
                  slideTo="top-left"
                >
                  <p className="text-[30px] text-stroke-black">Buy Presale</p>
                  <Coins />
                </Button>
              </div>
            </div>

          </div>
          <div className="flex-[5] font-medium">
            <Charity />
          </div>
        </div>
      </div>

      <div className="relative pt-[70px] pb-[90px] pr-[80px] bg-black overflow-hidden flex justify-center items-center">
        <Gradient className="absolute" />

        <div className="h-full w-full flex flex-col gap-[30px] z-[10] items-center">
          <div className="w-[70%]">
            <h1 className="font-primary-glow text-[55px] text-center text-orange text-stroke-white">$PUGA - The People’s Coin</h1>
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex flex-row w-full items-center">
              <CoinIllustration className="absolute pt-[70px] overflow-visible" />
              <div className="flex-[1] pl-[140px] pt-[20px] flex flex-col gap-[24px]">
                <Card
                  topStyle="rounded-[35px] border-white font-[500] tracking-tight leading-[28px] p-[25px] text-[20px] text-left text-white hover:m-0 duration-150"
                  baseStyle="rounded-[35px] border-white"
                  className="w-[450px] h-[110px]"
                  slideTo=""
                ><span className='font-bold'>The people</span> have spoken, and they want a meme coin with a mission!</Card>
                <Card
                  topStyle="rounded-[35px] flex justify-center items-center border-white font-[500] tracking-tight leading-[28px] text-[20px] text-left p-[25px] text-white hover:m-0 duration-150"
                  baseStyle="rounded-[35px] border-white"
                  className="w-[450px] h-[210px]"
                  slideTo=""
                ><p className="">Built on the powerful Solana blockchain, Pugabull ($PUG) is a cryptocurrency with a heart. Every transaction fuels our mission to support incredible organizations that bring vital resources and positive change to communities around the world.</p></Card>
              </div>
              <div className="flex-[1]">
                <CoinPair className="scale-[.95]" />
              </div>
            </div>
          </div>
          <div className="h-[20vh]"></div>
        </div>
      </div>

      <div className="relative h-[100vh]">
        <div className="absolute top-0 ml-[-20px] mt-[-120px] z-[100]">
          <div className="relative ">
            <Slider data={pugaArray} slant="right" className="absolute  mb-[45px]" />
            <Slider data={pugaArray} slant="left" className="absolute" />
          </div>
        </div>
      </div>
    </>

  )
}
