import React from "react";

export default function Footer() {
    return (
        <>
            <div className="w-[325px] h-[179px] bg-yellow skew-y-[-45deg] origin-top-right absolute content-[''] top-[-55px] left-[1024px]">
                <span className="w-[34px] h-[2px] bg-black skew-y-[-4deg] origin-top-right absolute content-[''] top-[58px] left-[170px] rounded-full"></span>
                <span className="w-[34px] h-[2px] bg-black skew-y-[-4deg] origin-top-right absolute content-[''] top-[100px] left-[217px] rounded-full"></span>
                <span className="w-[34px] h-[2px] bg-black skew-y-[0deg] origin-top-right absolute content-[''] top-[137px] left-[191px] rounded-full"></span>
            </div>
            <div className="w-[347px] h-[400px] bg-black rounded-full absolute top-[163px] left-[134vh]"></div>
            <div className="w-[340px] h-[400px] bg-yellow rounded-full absolute border-solid border-black border-[3px] top-[24vh] left-[134vh]">
                <img className="rounded-b-full top-[61px] relative" src="https://cdn-icons-png.flaticon.com/512/5184/5184407.png" alt="image_profile" />
                <span className="w-[208vh] h-[350px] bg-black skew-y-[-2deg] relative content-[''] top-[17vh] left-[-135vh] flex justify-center items-center">
                    <div className="w-[208vh] h-[300px] bg-yellow justify-center content-center flex-wrap flex">
                        <div className="relative skew-y-1 w-[209vh] h-[250px] bg-white text-center font-semibold flex flex-col justify-center">
                            <h1 className="text-[25px] text-blue pb-5">Mateo Andres Cuba Blanco</h1>
                            <p className="px-[50vh] text-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam earum rerum eius, magni odit tenetur excepturi magnam quod voluptates minima, officiis rem quidem temporibus. Obcaecati sint deleniti facilis quis quae?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fugit deserunt ab cum ratione nesciunt. Enim quis adipisci veniam modi asperiores! Nam ullam blanditiis ea in, quod unde! Qui, minima.</p>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}