import React, { useState } from "react";

export default function Navbar() {
    return (
        <>
            <nav className="m-0 p-0 rounded-md border-solid border-black border w-[1000px] h-[50px] bg-white z-10 flex flex-row-reverse">
                <span className="h-[74px] w-[74px] bg-black rounded-full inline-block absolute left-[160px] top-[10px]"></span>
                <span className="h-[43px] w-[11px] bg-yellow rounded-full inline-block absolute left-[180px] top-[27px]"></span>
                <span className="h-[8px] w-[8px] bg-white rounded-full inline-block absolute left-[199px] top-[28px]"></span>
                <span className="h-[8px] w-[8px] bg-white rounded-full inline-block absolute left-[199px] top-[39px]"></span>
                <span className="h-[21px] w-[8px] bg-yellow rounded-full inline-block absolute left-[199px] top-[49px]"></span>
                <ul className="flex justify-center h-[46px] items-center pr-5 font-semibold">
                    <li className="w-200 h-200 px-5"><a href="Home">Home</a></li>
                    <li className="w-200 h-200 px-5"><a href="About">About</a></li>
                    <li className="w-200 h-200 px-5"><a href="Portfolio">Portfolio</a></li>
                    <li className="w-200 h-200 px-5"><a href="Pricingzzzz">Pricing</a></li>
                    <button className="flex justify-center rounded-md p-[3px] bg-black text-white w-[105px] h-[33px]">Contact</button>
                </ul>
            </nav>
            <div className="w-[992px] h-[50px] bg-black rounded-md absolute top-[25px] left-[190px]"></div>
        </>
    )
}   