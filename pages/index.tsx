import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@componets/components/Navbar'
import Footer from '@componets/components/Footer'
import Hero from '@componets/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center'>
        <main className="flex justify-center pt-5 h-full w-[1800px] bg-white rounded-md">
          <Navbar />
        </main>
        <Footer />
        <Hero />
      </div>
    </>

  )
}
