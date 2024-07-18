import React from "react"
import { ReactComponent as AnimationCoin } from "../assets/animation-coin.svg"

export const Loader = () => {
    return (
        <div role="status" className="h-[100vh] w-full flex justify-center items-center">
            <div className="w-[150px] z-[100]">
                <AnimationCoin className="w-full h-full animate-loading" viewBox="0 0 530 530" preserveAspectRatio="xMidYMid meet" />
            </div>
        </div>
    )
}