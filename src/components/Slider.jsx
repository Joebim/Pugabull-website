import React from 'react'

export default function Slider({data, slant, className}) {

  
    return (
        <div className={`${className} ${slant == "left" ? "rotate-[6deg]" : "rotate-[-3deg]"} slider overflow-hidden relative h-[80px] w-full m-auto flex items-center py-[5px] bg-custom-gradient`}>
            <div className={`${slant == "left" ? " animate-scrollForward" : " animate-scrollBackward"} slide-track w-[3000px] flex bg-black h-full`}>
                <div className="slide flex flex-row gap-[70px] items-center">
                    {data.map((title, id) => (
                        <>
                            <p key={`${id}${slant}`} className="text-[24px] text-white font-bold">{title.text}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
