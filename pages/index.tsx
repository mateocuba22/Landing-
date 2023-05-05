import Head from "next/head"
import { Inter } from "next/font/google"
import Navbar from "@componets/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateo</title>
      </Head>
      <main>
        <section className='w-full container mx-auto p-[20px]'>
          <Navbar />
        </section>
      </main>
    </>
  )
}
