import React from "react";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col w-[500px] absolute left-[26vh] top-[28vh]">
                <div className="text-[45px] font-bold">
                    <h1>Hello, I'm</h1>
                    <h1 className="bg-blue w-[290px] text-center rounded-md text-white mb-4">Wilson Koss</h1>
                </div>
                <span className="text-justify m-auto font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic laborum fuga adipisci ea sunt iusto corrupti, nostrum doloribus voluptas eius! Vero vitae aliquam laboriosam amet quia quisquam tempora nihil?</span>
                <div className="w-[500px] flex justify-between pt-[7vh] h-[100px] font-bold">
                    <button className="w-[212px] rounded-xl bg-black text-white">Get in touch</button>
                    <button className="w-[212px] border-black border-2 rounded-xl">My story</button>
                </div>
            </div>
        </>
    )
}