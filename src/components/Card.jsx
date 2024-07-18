import React from 'react'

export default function Card(props) {


  return (
    <div className=" flex flex-col gap-[20px] items-center">
      {props.text && props.textPosition == "top" ? <p className="text-black font-bold text-[22px]">{props.text}</p> : <></>}

      <div className={`${props.className} relative`}>
        <div className={`${props.topStyle} ${props.slideTo == "bottom-left" ? "ml-[-12px] mt-[12px]" : props.slideTo == "top-left" ? "ml-[-12px] mt-[-12px]" : props.slideTo == "bottom-right" ? "mt-[12px] ml-[12px]" : props.slideTo == "top-right" ? "ml-[12px] mt-[-12px]" : "m-0"} absolute w-full h-full border-solid border-black border-[2px]`}
          style={{ backgroundColor: props.topColor }}
        >
          {props.children}
          {props.text && props.textPosition == "inside" ? <p className="text-black font-bold text-[22px]">{props.text}</p> : <></>}
        </div>
        <div className={`${props.baseStyle} w-full h-full border-solid border-black border-[2px]`}
          style={{ backgroundColor: props.bottomColor }}
        ></div>

      </div>
      {props.text && props.textPosition == "bottom" ? <p className="text-black font-bold text-[22px]">{props.text}</p> : <></>}
    </div>

  )
}
