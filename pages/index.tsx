import type { NextPage } from 'next'
import Hero from "../components/Hero.jsx"
import Plan from "../components/Plan"

const Home: NextPage = () => {
  return (
    <>
    <div className="max-w-screen bg-[#ffbd59]">
      <Hero />
      <Plan />
    </div>
    </>
  )
}

export default Home
