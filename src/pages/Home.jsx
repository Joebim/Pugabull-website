import React, { useRef, useState } from 'react'
import { ReactComponent as Eyes } from "../assets/eyes.svg"
import { ReactComponent as Hands } from "../assets/hands.svg"
import { ReactComponent as Illustration } from "../assets/landing-illustration.svg"
import { ReactComponent as Charity } from "../assets/charity.svg"
import { ReactComponent as Coins } from "../assets/coins.svg"
import Gradient from "../assets/gradient-background.svg"
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
import { ReactComponent as Tick } from "../assets/tick.svg"
import { charityData } from '../data/charityData'
import { partnerData } from '../data/partnerData'
import Button from '../components/Button'
import Slider from '../components/Slider'
import Card from '../components/Card'
import whitepaper from "../assets/doc/pugabull-whitepaper.pdf"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 10000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    } else {
      console.error('Clipboard API not supported');
    }
  };

  const pugaArray = Array.from({ length: 24 }, () => ({ text: "$PUGA" }));


    const aboutRef = useRef(null);
    const puganomicsRef = useRef(null);
    const roadmapRef = useRef(null);
    const partnersRef = useRef(null);

    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
  

  const fileName = "Pugabull Whitepaper"

    const downloadLinkRef = useRef(null);
  
    const handleDownload = (e) => {
      e.preventDefault(); // Prevent the default action (page refresh)
      if (downloadLinkRef.current) {
        downloadLinkRef.current.href = whitepaper;
        downloadLinkRef.current.download = fileName;
        downloadLinkRef.current.click();
        console.log("downloaded")
      }
    };



  return (
    <>
    <Navbar 
    aboutRef={aboutRef} 
    puganomicsRef={puganomicsRef} 
    roadmapRef={roadmapRef} 
    partnersRef={partnersRef} 
    scrollToSection={scrollToSection}
    />
      <div className="flex flex-col pt-[50px] md:pt-[100px] gap-[30px] w-full items-center overflow-hidden">
        <div className="flex flex-col items-center gap-0 md:gap-[20px]">
          <div className="flex flex-col-reverse md:flex-row gap-[20px] items-center">
            <h1 className="text-[45px] md:text-[50px] lg:text-[80px] tracking-tight leading-[50px] text-brown font-primary-glow">The Best Way To</h1>
            <div className="h-[35px] md:h-auto">
              <Eyes className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 278 69" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-[20px] items-center">
            <div className="h-[35px] md:h-auto">
              <Hands className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 243 71" />
            </div>
            <h1 className="text-[45px] md:text-[50px] lg:text-[80px] tracking-tight leading-[50px] text-brown font-primary-glow">Invest In Good</h1>
          </div>
        </div>
        <div className="w-[80%] md:w-[55%] lg:w-[50%]"><p className="text-[16px] tracking-tight md:text-[22px] font-bold text-center ">A meme coin for good, harnessing laughter and internet culture to fuel positive change</p></div>
        <div className="">
          <Button
            topStyle="bg-secondary text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-black"
            baseStyle="bg-primaryLight rounded-[15px]"
            className="w-[250px] h-[50px]"
            slideTo="top-right"
            link="https://solsale.app/presale/E6UMYeypxgbHyuB679QNZDcqxPt6eVskqTv5qoW55nJ2"
          >Buy Presale</Button>
        </div>
        <div className="relative overflow-hidden w-full h-[300px] md:h-[480px] lg:h-[550px] xl:h-[600px]">
          <div className="absolute bottom-0 mb-[-100px] ml-[-20px] w-full z-[100] h-[250px]">
            <div className="relative ">
              <Slider slant="right" className="absolute mb-[-60px] md:mb-[-80px]" isStyled={true}>
                {pugaArray.map((title, id) => (
                  <>
                    <p key={id} className="text-[14px] md:text-[24px] text-white font-bold">{title.text}</p>
                  </>
                ))}
              </Slider>
              <Slider slant="left" className="absolute mt-[-40px]" isStyled={true}>
                {pugaArray.map((title, id) => (
                  <>
                    <p key={id} className="text-[14px] md:text-[24px] text-white font-bold">{title.text}</p>
                  </>
                ))}
              </Slider>

            </div>
          </div>
          <div className="w-full h-[500px] md:h-[700px] mt-[-200px]">
            <Illustration className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1349 261" />
          </div>
        </div>
      </div>

      <div ref={aboutRef} className="px-[20px] md:px-[80px] pb-[30px] md:pb-[50px] flex flex-col mt-[-50px] md:mt-0 gap-[20px] overflow-hidden">
        <div className=" flex flex-col items-center">
          <div className="w-[85%] md:w-[90%] lg:w-[70%]">
            <h1 className="font-primary-glow text-[30px] md:text-[55px] text-center text-orange text-stroke-black">Why <span className='text-secondary'>PUGA</span> is Paw-sitively Irresistible</h1>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-[4] flex items-center">
            <div className="flex flex-col gap-[30px] w-full">
              <Card
                topStyle="bg-white rounded-[30px] md:rounded-[40px] font-[500] tracking-tight md:leading-[29px] lg:leading-[25px] text-[16.1px] md:text-[26px] lg:text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
                baseStyle="bg-primaryDark rounded-[30px] md:rounded-[40px]"
                className="w-full h-[200px]"
                slideTo="top-left"
              ><span className='text-secondary'>Pugabull</span> is all about
                <span className='text-secondary'> World Charity</span>. We combine our love for dogs and the playful
                <span className='text-secondary'> spirit of memes</span> to make a real
                <span className='text-secondary'> impact</span>. Our mission is to harness the
                <span className='text-secondary'> joy of laughter</span> and the community power of memes to support <span className='text-secondary'>charitable causes</span> across the <span className='text-secondary'>globe</span>.</Card>
              <Card
                topStyle="bg-white rounded-[30px] md:rounded-[40px] font-[500] tracking-tight md:leading-[29px] lg:leading-[25px] p-[25px] text-[16.1px] md:text-[26px] lg:text-[22px] text-left text-black hover:m-0 duration-150"
                baseStyle="bg-primaryDark rounded-[30px] md:rounded-[40px]"
                className="w-full h-[150px]"
                slideTo="top-left"
              >From Dog memes to play-to-earn paws, we offer a variety of engaging activities that make giving back fun and rewarding</Card>
              <div className="flex flex-row gap-[20px] w-full md:w-auto">
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
            <Charity className="w-full h-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 686 585" />
          </div>
        </div>
      </div>


      <div className="relative pt-[40px] lg:pt-[70px] pb-[] lg:pb-[90px] pr-[] lg:pr-[80px] bg-black overflow-hidden flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Gradient})` }}
      >

        <div className="h-full w-full flex flex-col gap-[30px] z-[10] items-center">
          <div className="w-[90%] lg:w-[70%]">
            <h1 className="font-primary-glow  text-[30px] lg:text-[55px] text-center text-orange text-stroke-white">$PUGA - The People’s Coin</h1>
          </div>
          <div className="flex flex-col w-full md:pb-[80px] sm:pb-0">
            <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-[30px]">
              <div className="absolute pt-[70px] overflow-visible w-[550px] lg:w-auto">
                <CoinIllustration className="w-full h-full" viewBox="0 0 741 508" preserveAspectRatio="xMidYMid meet" />
              </div>
              <div className="flex-[1] pl-0 lg:pl-[70px] pt-[20px] flex flex-col gap-[24px]">
                <Card
                  topStyle="rounded-[25px] lg:rounded-[35px] border-white font-[500] tracking-tight leading-[28px] p-[25px] text-[16.1px] lg:text-[20px] text-left text-white hover:m-0 duration-150"
                  baseStyle="rounded-[25px] lg:rounded-[35px] border-white"
                  className="w-[340px] lg:w-[450px] h-[110px]"
                  slideTo=""
                ><span className='font-bold'>The people</span> have spoken, and they want a meme coin with a mission!</Card>
                <Card
                  topStyle="rounded-[25px] lg:rounded-[35px] flex justify-center items-center border-white font-[500] tracking-tight leading-[28px] text-[16.1px] lg:text-[20px] text-left p-[25px] text-white hover:m-0 duration-150"
                  baseStyle="rounded-[25px] lg:rounded-[35px] border-white"
                  className="w-[340px] lg:w-[450px] h-[210px]"
                  slideTo=""
                ><p className="">Built on the powerful Solana blockchain, Pugabull ($PUG) is a cryptocurrency with a heart. Every transaction fuels our mission to support incredible organizations that bring vital resources and positive change to communities around the world.</p></Card>
              </div>
              <div className="flex-[1] flex justify-center items-center">
                <div className="w-[80%] lg:auto">
                  <CoinPair className="w-full h-full" viewBox="0 0 548 402" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80px] lg:h-[20vh]"></div>
        </div>
      </div>

      <div className="">
        <div className="relative mt-[-165px] h-[300px] w-full overflow-hidden">
          <div className="absolute top-0 ml-[-20px] z-[100] h-[250px]">
            <div className="relative mt-[50px]">
              <Slider slant="right" className="absolute mb-[180px] sm:mb-[50px]" isStyled={true}>
                {charityData.map((charity, id) => (
                  <>
                    <img key={id} src={charity.img} className="rotate-[-2deg] w-[70px] sm:w-auto"></img>
                  </>
                ))}
              </Slider>

              <Slider data={charityData} slant="left" className="absolute" isStyled={true}>
                {charityData.map((charity, id) => (
                  <>
                    <img key={id} src={charity.img} className="rotate-[-2deg] w-[70px] sm:w-auto"></img>
                  </>
                ))}
              </Slider>

            </div>
          </div>
          <GradientOverlay className="absolute mt-[170px]" />
        </div>

        <div ref={puganomicsRef} className="z-[101] mt-[-50px] sm:mt-0 h-full p-[15px] sm:pt-0 sm:p-[80px] relative flex flex-col gap-[30px] sm:gap-[40px] overflow-hidden">
          <div className="absolute self-center pt-0 sm:pt-[90px] pl-0 sm:pl-[50px] top-[45%] sm:top-0 rotate-[90deg] sm:rotate-0 mr-[-300px] sm:mr-0 h-[130px] sm:h-auto">
            <DottedLine className="h-full w-full overflow-visible" viewBox="0 0 401 230" preserveAspectRatio="xMidYMid meet" />
          </div>
          <h1 className="font-primary-glow text-[45px] text-brown flex justify-center">PUGANOMICS</h1>
          <div className="px-[18px] py-[4px] flex flex-row items-center gap-[10px] sm:gap-[20px] border-[1px] border-solid border-black rounded-[10px] self-center font-extrabold text-brown">
            <p className="font-black">PUGABULL</p>
            <p className="font-black">$PUGA</p>
            {/* 3nZByV6t2KLMuecKnYPWyHcEPm36gtEVm3jbHKcPLUVZ */}
            <p className="font-black">3nZByV....cPLUVZ</p>
            <button
              onClick={() => copyToClipboard(import.meta.env.VITE_PUGABULL_CODE)}
              className={`h-[30px] w-[28px] flex justify-center items-center rounded-[3px]  ${isCopied ? "bg-green" : "bg-primaryDark"} duration-300 border-solid border-[1px] border-black cursor-pointer`}>
              {isCopied ? <Tick className="scale-[.85]" /> : <Copy className="scale-[.85]" />}

            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[30px] items-center ">
              <Graph className="scale-[.80]" />
              <div className="h-[2px] sm:h-[200px] w-[200px] sm:w-[2px] bg-black"></div>
              <Stats className="scale-[.80]" />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center sm:flex-row gap-[20px] self-center">
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

        <div className="h-[80px] sm:h-[14vh]"></div>
      </div>

      <div ref={roadmapRef} className="relative bg-black flex flex-col w-full items-center">
        <div className="absolute z-[100] top-0 h-[750px] w-full mt-[-400px]">
          <World className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1358 727" />

        </div>

        <div className="relative h-full w-full flex justify-center items-center overflow-hidden">
          <GradientRoadmap className="absolute" />
          <div className="flex flex-col gap-[60px] md:gap-[90px] lg:gap-[10px] pt-[20%] pb-[90px] lg:pb-0 lg:pt-[25%] px-[25px] lg:px-[150px] z-[100] w-full justify-center">
            <div className=" flex justify-center">
              <div className="mr-[100px] lg:mr-[230px] w-[100px] lg:w-auto">
                <LineOne className="h-full w-full" viewBox="0 0 233 161" preserveAspectRatio="xMidYMid meet" />
              </div>
            </div>

            <div className="flex w-full justify-start mt-[-10%]">
              <div className="flex flex-row-reverse md:flex-row items-center justify-between lg:flex-col gap-[20px]">
                <div className="w-[50%] lg:w-[80%]">
                  <p className="font-primary-glow text-white text-center text-[19px] lg:text-[30px]">The Rise of a Pug</p>
                </div>
                <div className="lg:h-auto lg:w-auto w-[110px]">
                  <CharacterOne className="w-full h-full" viewBox="0 0 253 256" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center mt-[-15%]">
              <div className="w-[180px] lg:w-auto">
                <LineTwo className="h-full w-full" viewBox="0 0 458 200" preserveAspectRatio="xMidYMid meet" />
              </div>
            </div>

            <div className="flex w-full justify-end mt-[-15%]">
              <div className="flex flex-row md:flex-row-reverse items-center justify-between lg:flex-col gap-[20px]">
                <div className="w-[50%] lg:w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[19px] lg:text-[30px]">Pawesome Progress</p>
                </div>
                <div className="lg:h-auto lg:w-auto w-[120px]">
                  <CharacterTwo className="w-full h-full" viewBox="0 0 259 327" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center mt-[-12%]">
              <div className="mr-0 lg:mr-[100px] w-[200px] lg:w-auto">
                <LineThree className="h-full w-full" viewBox="0 0 519 173" preserveAspectRatio="xMidYMid meet" />
              </div>
            </div>

            <div className="flex w-full justify-start mt-[-15%]">
              <div className="flex flex-row-reverse md:flex-row items-center justify-between lg:flex-col gap-[20px]">
                <div className="w-[50%] lg:w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[19px] lg:text-[30px]">Howling to the Moon</p>
                </div>
                <div className="lg:h-auto lg:w-auto w-[120px]">
                  <CharacterThree className="w-full h-full" viewBox="0 0 280 293" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </div>

            <div className="flex w-full justify-center mt-[-5%]">
              <div className="ml-0 lg:ml-[100px] w-[200px] lg:w-auto">
                <LineFour className="h-full w-full" viewBox="0 0 519 230" preserveAspectRatio="xMidYMid meet" />
              </div>
            </div>

            <div className="flex w-full justify-end">
              <div className="flex flex-row md:flex-row-reverse items-center justify-between lg:flex-col gap-[20px] mt-[-20%]">
                <div className="w-[50%] lg:w-[70%]">
                  <p className="font-primary-glow text-white text-center text-[19px] lg:text-[30px]">Beyond the Moon</p>
                </div>
                <div className="lg:h-auto lg:w-auto w-[120px]">
                  <CharacterFour className="w-full h-full" viewBox="0 0 273 289" preserveAspectRatio="xMidYMid meet" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 lg:h-[250px] w-full"></div>
      </div>

      <div ref={partnersRef} className="relative h-[500px] md:h-[100vh] flex flex-col gap-[50px] items-center">
        <div className="absolute mt-[-165px] md:mt-[-170px] lg:mt-[-200px] w-full h-[300px]">
          <Arc className="top-0 ml-[-1%] overflow-visible h-full w-full" viewBox="0 0 1804 225" preserveAspectRatio="xMidYMid meet" />
        </div>
        <p className="font-primary-glow self-center text-brown text-[35px] md:text-[60px] mt-0 md:mt-[-50px] z-[100]">OUR PARTNERS</p>

        <div className="w-full z-[100] px-[80px] flex items-center gap-[30px] overflow-hidden">

          <div className="w-full py-[50px]">
            <Slider slant="" isStyled={false}>
              {partnerData.map((Partner) => (
                <Card
                  topStyle="bg-white rounded-[30px] md:rounded-[50px] font-[500] flex justify-center items-center tracking-tight leading-[25px] text-[22px] text-left p-[30px] md:p-[70px] text-black hover:m-0 duration-150"
                  baseStyle="bg-primaryDark rounded-[30px] md:rounded-[50px]"
                  className="w-[180px] md:w-[300px] h-[180px] md:h-[300px]"
                  slideTo="top-right"
                  topColor={Partner.topColor}
                  bottomColor={Partner.bottomColor}
                  text={Partner.name}
                  textPosition="bottom"
                >
                  <Partner.img className="w-full h-full" viewBox={Partner.viewBox} preserveAspectRatio="xMidYMid meet" />
                </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center h-auto py-[80px] md:py-0 md:h-[120vh] overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${StarySky})` }}
      >
        <div className="absolute h-full w-full flex flex-row justify-between">
          <div className="hidden md:block absolute md:relative h-full w-full ml-[-600px] md:ml-[-500px]"><PlanetLeft className="w-full h-full" viewBox="0 0 386 759" preserveAspectRatio="xMidYMid meet" /></div>
          <div className="absolute md:relative h-full w-full mr-[-400px] md:mr-[-350px]"><PlanetRight className="w-full h-full" viewBox="0 0 419 759" preserveAspectRatio="xMidYMid meet" /></div>
        </div>

        <div className="flex flex-col items-center gap-[100px] z-[100]">
          <h1 className="font-primary-glow text-white text-[40px] md:text-[80px]">Coming Soon</h1>
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-[30px]">
            <Card
              topStyle="bg-white rounded-[50px] font-[500] py-[40px] flex flex-col gap-[20px] justify-between items-center tracking-tight leading-[25px] text-[22px] text-left p-[25px] text-black hover:m-0 duration-150"
              baseStyle="bg-primaryDark rounded-[50px]"
              className="w-[320px] md:w-[250px] h-[320px]"
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
              className="w-[320px] md:w-[250px] h-[320px]"
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
              className="w-[320px] md:w-[250px] h-[320px]"
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

      <div className="relative h-[700px] pr-0 lg:pr-[100px] overflow-hidden">
        <div className="absolute left-0 bottom-0 lg:bottom-auto lg:w-[650px] h-auto lg:h-full w-[400px] ml-[-150px] lg:ml-[-100px] mb-0 md:mb-[-50px] lg:mb-0">
          <PugabullFooter className="w-full h-full" viewBox="0 0 840 933" preserveAspectRatio="xMidYMid meet" />
        </div>

        <div className="absolute right-0 mr-[20px] lg:mr-[60px] w-full lg:w-[850px]">
          <FooterIllustration className="w-full h-full" viewBox="0 0 789 476" preserveAspectRatio="xMidYMid meet" />
        </div>

        <div className="relative w-full h-full flex flex-col justify-end items-end z-[100]">
          <div className="w-full lg:w-[55%] flex flex-col px-[5%] lg:px-[2%] gap-[200px] md:gap-[120px] lg:gap-[30px] pb-[60px]">
            <div className="w-full flex flex-col">
              <p className="self-start font-primary-glow text-brown text-[60px] md:text-[80px] lg:text-[100px] rotate-[-6deg]">Do Good.</p>
              <p className="self-end font-primary-glow text-brown text-[60px] md:text-[80px] lg:text-[100px] mt-[-20px] rotate-[3deg]">Have Fun.</p>
            </div>

            <div className="w-full flex flex-col items-center gap-[20px]">
              <div className="">
                <Button
                  topStyle="bg-white self-center flex flex-row gap-[20px] px-[10px] items-center text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-green"
                  baseStyle="bg-pink rounded-[15px]"
                  className="w-[320px] h-[60px]"
                  slideTo="top-right"
                  link="http://t.me/pugacoin"
                >
                  <p className="font-primary-glow text-brown text-[20px]">Join The Pugabull Pack!</p>
                  <LoveSmall />
                </Button>
              </div>
              <div
                
                className="">
                <div className="cursor-pointer">
                  <Button
                    topStyle="bg-primaryDark self-center flex flex-row gap-[20px] items-center text-[25px] rounded-[15px] font-primary-glow text-primaryLight active:m-0 duration-150 hover:bg-primaryLight"
                    baseStyle="bg-secondary rounded-[15px]"
                    className="w-[250px] h-[50px]"
                    slideTo="top-right"
                    link=""
                    downloadLink={downloadLinkRef}
                    downloadFunction={handleDownload}
                  >
                    <p className="font-primary-glow text-brown text-[20px]">Get Whitepaper</p>
                    <Paper />
                  </Button>       </div>

              </div>


            </div>
          </div>

        </div>


      </div>
      <Footer/>
    </>
  )
}
