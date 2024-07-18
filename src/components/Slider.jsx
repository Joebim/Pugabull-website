import React, { Children } from 'react'

export default function Slider(props) {

  
    return (
        <div className={`${props.className} ${props.slant == "left" ? "rotate-[6deg]" : props.slant == "right" ? "rotate-[-3deg]" : "rotate-0"} slider ${props.isStyled ? " relative h-[45px] sm:h-[80px] w-[110%] m-auto flex items-center py-[5px] bg-custom-gradient" : ""}`}>
            <div className={`${props.slant == "left" ? " animate-scrollForward" : " animate-scrollBackward"} slide-track w-[3000px] flex ${props.isStyled ? "bg-black" : ""} h-full`}>
                <div className="slide flex flex-row gap-[40px] sm:gap-[70px] items-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
