import React from 'react'

export default function Card(props) {

  return (
    <button className={`${props.className} relative`}>
      <div className={`${props.topStyle} ${props.slideTo == "bottom-left" ? "ml-[-12px] mt-[12px]" : props.slideTo == "top-left" ? "ml-[-12px] mt-[-12px]" : props.slideTo == "bottom-right" ? "mt-[12px] ml-[12px]" : props.slideTo == "top-right" ? "ml-[12px] mt-[-12px]" : "m-0" } absolute w-full h-full border-solid border-black border-[2px]`}>{props.children}</div>
      <div className={`${props.baseStyle} w-full h-full border-solid border-black border-[2px]`}></div>
    </button>
  )
}
