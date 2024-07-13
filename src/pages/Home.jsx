import React from 'react'
import { ReactComponent as Eyes } from "../assets/eyes.svg"
import { ReactComponent as Hands } from "../assets/hands.svg"
import { ReactComponent as Illustration } from "../assets/landing-illustration.svg"
import { ReactComponent as Charity } from "../assets/charity.svg"
import { ReactComponent as Coins } from "../assets/coins.svg"
import { ReactComponent as Gradient } from "../assets/gradient-background.svg"
import { ReactComponent as CoinIllustration } from "../assets/coin-illustration.svg"
import { ReactComponent as CoinPair } from "../assets/coin-pair.svg"
import { ReactComponent as GradientOverlay } from "../assets/gradient-overlay.svg"
import { ReactComponent as Copy } from "../assets/copy.svg"
import { ReactComponent as Graph } from "../assets/graph.svg"
import { ReactComponent as Stats } from "../assets/stats.svg"
import { ReactComponent as Audit } from "../assets/audit.svg"
import { ReactComponent as Love } from "../assets/love.svg"
import { ReactComponent as DottedLine } from "../assets/dotted-line.svg"
import { ReactComponent as World } from "../assets/world.svg"
import { ReactComponent as GradientRoadmap } from "../assets/gradient-roadmap.svg"
import { ReactComponent as LineOne } from "../assets/line-one.svg"
import { ReactComponent as LineTwo } from "../assets/line-two.svg"
import { ReactComponent as LineThree } from "../assets/line-three.svg"
import { ReactComponent as LineFour } from "../assets/line-four.svg"
import { ReactComponent as CharacterOne } from "../assets/character-one.svg"
import { ReactComponent as CharacterTwo } from "../assets/character-two.svg"
import { ReactComponent as CharacterThree } from "../assets/character-three.svg"
import { ReactComponent as CharacterFour } from "../assets/character-four.svg"
import { ReactComponent as Arc } from "../assets/arc.svg"
import StarySky from "../assets/stary-sky.svg"
import { ReactComponent as PlanetRight } from "../assets/planet-right.svg"
import { ReactComponent as PlanetLeft } from "../assets/planet-left.svg"
import { ReactComponent as Nft } from "../assets/nft.svg"
import { ReactComponent as Stake } from "../assets/stake.svg"
import { ReactComponent as Games } from "../assets/games.svg"
import { ReactComponent as PugabullFooter } from "../assets/pugabull-footer.svg"
import { ReactComponent as FooterIllustration } from "../assets/footer-illustration.svg"
import { ReactComponent as LoveSmall } from "../assets/love-small.svg"
import { ReactComponent as Paper } from "../assets/paper.svg"
import { charityData } from '../data/charityData'
import { partnerData } from '../data/partnerData'
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
        <div className="w-[50%]"><p className="text-[22px] text-center ">A meme coin for good, harnessing laughter and internet culture to fuel positive change</p></div>
        <div className="">
          <Button
            topStyle="bg-secondary text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-black"
            baseStyle="bg-primaryLight rounded-[15px]"
            className="w-[250px] h-[50px]"
            slideTo="top-right"
            link="https://solsale.app/presale/E6UMYeypxgbHyuB679QNZDcqxPt6eVskqTv5qoW55nJ2"
          >Buy Presale</Button>
        </div>
        <div className="relative">
          <div className="absolute bottom-0 ml-[-20px]">
            <div className="relative ">
              <Slider slant="right" className="absolute  mb-[30px]" isStyled={true}>
                {pugaArray.map((title, id) => (
                  <>
                    <p key={id} className="text-[24px] text-white font-bold">{title.text}</p>
                  </>
                ))}
              </Slider>
              <Slider slant="left" className="absolute" isStyled={true}>
                {pugaArray.map((title, id) => (
                  <>
                    <p key={id} className="text-[24px] text-white font-bold">{title.text}</p>
                  </>
                ))}
              </Slider>

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
                  link="https://solsale.app/presale/E6UMYeypxgbHyuB679QNZDcqxPt6eVskqTv5qoW55nJ2"
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
        <Gradient className="absolute mt-[-21px]" />

        <div className="h-full w-full flex flex-col gap-[30px] z-[10] items-center">
          <div className="w-[70%]">
            <h1 className="font-primary-glow text-[55px] text-center text-orange text-stroke-white">$PUGA - The People’s Coin</h1>
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex flex-row w-full items-center gap-[30px]">
              <CoinIllustration className="absolute pt-[70px] overflow-visible" />
              <div className="flex-[1] pl-[70px] pt-[20px] flex flex-col gap-[24px]">
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

      <div className="">
        <div className="relative">
          <div className="absolute top-0 ml-[-20px] mt-[-120px] z-[100]">
            <div className="relative ">
              <Slider slant="right" className="absolute  mb-[45px]" isStyled={true}>
                {charityData.map((charity, id) => (
                  <>
                    <img key={id} src={charity.img} className="rotate-[-2deg]"></img>
                  </>
                ))}
              </Slider>

              <Slider data={charityData} slant="left" className="absolute" isStyled={true}>
                {charityData.map((charity, id) => (
                  <>
                    <img key={id} src={charity.img} className="rotate-[-2deg]"></img>
                  </>
                ))}
              </Slider>

            </div>
          </div>
          <GradientOverlay className="absolute" />
        </div>

        <div className="z-[101] h-full p-[80px] relative flex flex-col gap-[30px]">
          <DottedLine className="absolute self-center pt-[90px] pl-[50px] overflow-visible" />
          <h1 className="font-primary-glow text-[45px] text-brown flex justify-center">PUGANOMICS</h1>
          <div className="px-[18px] py-[4px] flex flex-row items-center gap-[20px] border-[1px] border-solid border-black rounded-[10px] self-center font-extrabold text-brown">
            <p className="font-black">PUGABULL</p>
            <p className="font-black">$PUGA</p>
            {/* 3nZByV6t2KLMuecKnYPWyHcEPm36gtEVm3jbHKcPLUVZ */}
            <p className="font-black">3nZByV....cPLUVZ</p>
            <div className="p-[2px] rounded-[3px] bg-primaryDark hover:bg-[#c4b25d] duration-150 cursor-pointer">
              <Copy className="scale-[.85]" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row gap-[30px] items-center ">
              <Graph className="scale-[.80]" />
              <div className="h-[200px] w-[2px] bg-black"></div>
              <Stats className="scale-[.80]" />
            </div>
          </div>

          <div className="flex flex-row gap-[20px] self-center">
            <Button
              topStyle="bg-green hover:bg-[#51c46a] gap-[10px] text-[25px] rounded-[15px] font-primary-glow text-black active:m-0 duration-150"
              baseStyle="bg-orange rounded-[15px]"
              className="w-[150px] h-[45px]"
              slideTo="top-right"
              link="https://github.com/cyberscope-io/audits/blob/main/2-puga/audit.pdf"
            >
              <p className="">Audit</p>
              <Audit />
            </Button>
            <Button
              topStyle="bg-primaryDark hover:bg-[#e5a968] gap-[10px] text-[25px] rounded-[15px] font-primary-glow text-black active:m-0 duration-150"
              baseStyle="bg-white rounded-[15px]"
              className="w-[250px] h-[45px]"
              slideTo="top-right"
              link="https://solscan.io/account/8LjHo1kfYuXZi9rqS33jgmZEt9FSwJ1gK2fdhRNYBjCJ#transfers"
            >
              <p className="">Charity Wallet</p>
              <Love />
            </Button>
          </div>

        </div>

        <div className="h-[14vh]"></div>
      </div>

      <div className="relative bg-black flex flex-col w-full items-center">
        <World className="absolute top-0 mt-[-30%] z-[100]" />

        <div className="relative h-full w-full flex justify-center items-center overflow-hidden">
          <GradientRoadmap className="absolute" />
          <div className="flex flex-col gap-[10px] pt-[320px] px-[150px] z-[100] w-full justify-center">
            <div className=" flex justify-center">
              <LineOne className="mr-[230px]" />
            </div>
            <div className="flex w-full justify-start mt-[-10%]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[80%]">
                  <p className="font-primary-glow text-white text-center text-[30px]">The Rise of a Pug</p>
                </div>
                <CharacterOne />
              </div>
            </div>
            <div className="flex w-full justify-center mt-[-15%]">
              <LineTwo />
            </div>
            <div className="flex w-full justify-end mt-[-15%]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[30px]">Pawesome Progress</p>
                </div>
                <CharacterTwo />
              </div>
            </div>
            <div className="flex w-full justify-center mt-[-12%]">
              <LineThree className="mr-[100px]" />
            </div>
            <div className="flex w-full justify-start mt-[-15%]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[30px]">Howling to the Moon</p>
                </div>
                <CharacterThree />
              </div>
            </div>
            <div className="flex w-full justify-center mt-[-5%]">
              <LineFour className="ml-[100px]" />
            </div>
            <div className="flex w-full justify-end">

              <div className="flex flex-col gap-[20px] mt-[-20%]">
                <div className="w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[30px]">Beyond the Moon</p>
                </div>
                <CharacterFour />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[250px] w-full"></div>

      </div>

      <div className="relative h-[100vh] flex justify-center">
        <Arc className="absolute top-0 mt-[-10%] ml-[-2%] overflow-visible" />

        <div className="w-full z-[100] px-[80px] flex flex-col items-center gap-[30px]">
          <p className="font-primary-glow self-center text-brown text-[60px] mt-[-50px]">OUR PARTNERS</p>

          <div className="w-full py-[50px]">
            <Slider slant="" isStyled={false}>
              {partnerData.map((Partner) => (
                <Card
                  topStyle="bg-white rounded-[50px] font-[500] flex justify-center items-center tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
                  baseStyle="bg-primaryDark rounded-[50px]"
                  className="w-[300px] h-[300px]"
                  slideTo="top-right"
                  topColor={Partner.topColor}
                  bottomColor={Partner.bottomColor}
                  text={Partner.name}
                  textPosition="bottom"
                >
                  <Partner.img />
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center h-[120vh] overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${StarySky})` }}
      >
        <div className="absolute h-full w-full flex flex-row justify-between">
          <PlanetLeft />
          <PlanetRight />
        </div>

        <div className="flex flex-col items-center gap-[100px]">
          <h1 className="font-primary-glow text-white text-[80px]">Coming Soon</h1>
          <div className="flex flex-row gap-[30px]">
            <Card
              topStyle="bg-white rounded-[50px] font-[500] py-[40px] flex flex-col gap-[20px] justify-between items-center tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
              baseStyle="bg-primaryDark rounded-[50px]"
              className="w-[250px] h-[320px]"
              slideTo="bottom-right"
              // topColor={Partner.topColor}
              // bottomColor={Partner.bottomColor}
              text="NFT Collection"
              textPosition="inside"

            >
              <Nft />
            </Card>
            <Card
              topStyle="bg-white rounded-[50px] font-[500] py-[40px] flex flex-col gap-[20px] justify-between items-center tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
              baseStyle="bg-pink rounded-[50px]"
              className="w-[250px] h-[320px]"
              slideTo="bottom-right"
              // topColor={Partner.topColor}
              // bottomColor={Partner.bottomColor}
              text="Staking & Rewards"
              textPosition="inside"
            >
              <Stake />
            </Card>
            <Card
              topStyle="bg-white rounded-[50px] font-[500] pb-[40px] pt-[90px] flex flex-col gap-[20px] justify-between items-center tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
              baseStyle="bg-green rounded-[50px]"
              className="w-[250px] h-[320px]"
              slideTo="bottom-right"
              // topColor={Partner.topColor}
              // bottomColor={Partner.bottomColor}
              text="Games"
              textPosition="inside"
            >
              <Games />
            </Card>
          </div>
        </div>
      </div>

      <div className="relative h-[100vh] pr-[80px]">

        <PugabullFooter className="absolute left-0" />
        <FooterIllustration className="absolute right-0 mr-[60px]" />

        <div className="relative w-full h-full flex flex-col justify-end items-end z-[100]">
          <div className="w-[50%] flex flex-col px-[2%] gap-[30px]">
            <div className="w-full flex flex-col px-[40px]">
              <p className="self-start font-primary-glow text-brown text-[80px] rotate-[-6deg]">Do Good.</p>
              <p className="self-end font-primary-glow text-brown text-[80px] mt-[-20px] rotate-[3deg]">Have Fun.</p>
            </div>

            <div className="w-full flex flex-col items-center gap-[20px]">
              <div className="">
                <Button
                  topStyle="bg-white self-center flex flex-row gap-[20px] px-[10px] items-center text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-green"
                  baseStyle="bg-pink rounded-[15px]"
                  className="w-[320px] h-[60px]"
                  slideTo="top-right"
                  link="https://solsale.app/presale/E6UMYeypxgbHyuB679QNZDcqxPt6eVskqTv5qoW55nJ2"
                >
                  <p className="font-primary-glow text-brown text-[20px]">Join The Pugabull Pack!</p>
                  <LoveSmall />
                </Button>
              </div>
              <div className="">
                <Button
                  topStyle="bg-primaryDark self-center flex flex-row gap-[20px] items-center text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-primaryLight"
                  baseStyle="bg-secondary rounded-[15px]"
                  className="w-[250px] h-[50px]"
                  slideTo="top-right"
                  link="https://solsale.app/presale/E6UMYeypxgbHyuB679QNZDcqxPt6eVskqTv5qoW55nJ2"
                >
                  <p className="font-primary-glow text-brown text-[20px]">Get Whitepaper</p>
                  <Paper />
                </Button>
              </div>


            </div>
          </div>

        </div>


      </div>
    </>
  )
}
