import React from 'react'

export default function Button(props) {

  return (
    <button className={`${props.className} relative`}>
      <div className={`${props.topStyle} ${props.slideTo == "bottom-left" ? "ml-[-6px] mt-[6px]" : props.slideTo == "top-left" ? "ml-[-6px] mt-[-6px]" : props.slideTo == "bottom-right" ? "mt-[6px] ml-[6px]" : props.slideTo == "top-right" ? "ml-[6px] mt-[-6px]" : "m-0" } absolute flex justify-center items-center w-full h-full border-solid border-black border-[3px]`}>{props.children}</div>
      <div className={`${props.baseStyle} w-full h-full border-solid border-black border-[3px]`}></div>
    </button>
  )
}
