import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from "../components/Hero.jsx"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}

export default Home
