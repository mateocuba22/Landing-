import React, { useState, useEffect } from "react"

export default function Navbar() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize() {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className='box-border p-[16px] border-2 border-black rounded-md '>
      {screenSize.width >= 768 ? (
        <>
          <ul className='flex justify-center items-center font-semibold'>
            <li className='w-200 h-200 px-5'>
              <a href='Home'>Home</a>
            </li>
            <li className='w-200 h-200 px-5'>
              <a href='About'>About</a>
            </li>
            <li className='w-200 h-200 px-5'>
              <a href='Portfolio'>Portfolio</a>
            </li>
            <li className='w-200 h-200 px-5'>
              <a href='Pricingzzzz'>Pricing</a>
            </li>
            <button className='flex justify-center rounded-md p-[3px] bg-black text-white w-[105px] h-[33px]'>
              Contact
            </button>
          </ul>
        </>
      ) : (
        <></>
      )}
    </nav>
  )
}
