import React, { useEffect, useState } from 'react'
import Loading from "./Loading"
import Image from 'next/image'
import coverDesk from "../public/assets/img/hero-desktop.jpg"
import WrongAccesCode from "./WrongAccesCode"
import coverMobile from "../public/assets/img/hero-mobile.jpg"
import checkUser from "../checkUser.js"
import VerifyedHero from "../components/VerifyedHero"
import Plan from "../components/Plan"
import { AiOutlineUserSwitch } from 'react-icons/ai'
import Intro from "./Intro"
import Contact from "./Contact"
import OurStory from "./OurStory"
import OurLove from "./OurLove"
import ContactInfo from "./ContactInfo"
import Providers from "./Providers"
import ToImages from "./ToImages"



const Hero = () => {
    const [loading, setLoading] = useState(true)
    const [accessCode, setAccessCode] = useState("")
    const [actualUser, setActualUser] = useState("")
    const [authState, setAuthState] = useState("unauthorized")

    useEffect(() => {
        if (localStorage.getItem('authorized' === true)) {
            setActualUser({
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),
                accessCode: localStorage.getItem('accessCode')
            })
            setAuthState("authorized")
        }
    }, [])


    const handleLoad = () => {
        setLoading(false)
    }

    const handleSubmit = (e) => {
        if (checkUser(accessCode)) {
            setActualUser(checkUser(accessCode))
            setAuthState("authorized")
            localStorage.setItem('firstName', checkUser(accessCode).firstName);
            localStorage.setItem('lastName', checkUser(accessCode).lastName);
            localStorage.setItem('accessCode', checkUser(accessCode).accessCode);
            localStorage.setItem('authorized', true);
        }
        else {
            setAuthState("wrong accessCode")
            localStorage.setItem('firstName', "");
            localStorage.setItem('lastName', "");
            localStorage.setItem('accessCode', "");
            localStorage.setItem('authorized', false);
        }
    }

    const handleSignOut = () => {
        setActualUser({})
        setAuthState("unauthorized")
        setAccessCode("")
        localStorage.clear();
    }


    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <>


            {/* Loading */}
            {loading && <Loading />}

            {authState === "authorized" && (
                <>
                    <nav className='absolute w-screen z-30 top-0  flex justify-center  md:justify-end' >{actualUser && <div className='luthier-regular hidden  md:px-11 text-2xl text-center italic text-[#fdfbf7] drop-shadow-lg p-3 opacity-0' >Üdv, {actualUser.firstName}  </div>}</nav>
                    <nav className='absolute w-screen z-30 top-0  flex justify-end md:justify-start ' >{actualUser && <div onClick={handleSignOut} className="text-white text-3xl cursor-pointer p-3"><AiOutlineUserSwitch /></div>}</nav>
                </>
            )}

            {/* dynamic hero section */}
            {authState === "authorized" ? <VerifyedHero /> : (<div className='relative  text-[#fdfbf7] flex flex-col h-screen z-20 w-screen items-center justify-center' >
                {/* error message */}
                {authState === "wrong accessCode" ? <WrongAccesCode unvisible={false} /> : <WrongAccesCode unvisible={true} />}
                <h3 className=' text-3xl md:text-4xl max-w-[500px]  drop-shadow-2xl md:mt-52 flex text-center p-2 luthier-italic md:mb-2 ' >Kedves vendég!
                </h3>
                <h3 className=' text-2xl md:text-3xl max-w-[500px]  drop-shadow-xl flex text-center p-2 luthier-italic md:mb-2 ' >Ide írhatod a meghívón található QR kód alatti számsort a belépéshez</h3>
                <input value={accessCode} onKeyPress={e => handleEnter(e)} onChange={e => setAccessCode(e.target.value)} type="text" className='border-4 border-[#fdfbf7]/80 m-2 rounded-xl bg-transparent px-2 md:min-w-[400px] ' />
                {/* submit btn */}
                <button onClick={e => handleSubmit(e.target.value)} className='luthier-bold px-3 bg-[#fdfbf7] text-lg text-[#ffbd59] rounded-xl m-3 '>Küldés</button>
            </div>)}

            {/* plan */}


            {authState === "authorized" && <ToImages/>}
            {authState === "authorized" && <Intro />}
            {authState === "authorized" && <OurStory />}
            {authState === "authorized" && <OurLove />}
            {authState === "authorized" && <Plan />}
            {authState === "authorized" && <ContactInfo />}
            {authState === "authorized" && <Providers />}
            {/*   {authState === "authorized" && <Contact user={actualUser} />} */}
            <Contact authorized={authState} />

            {/*  Desktop bcg */}
            <div className="absolute hidden lg:block top-0 left-0 h-screen overflow-y-hidden  w-screen ">
                <Image alt='background' onLoad={handleLoad} src={coverDesk} layout="responsive" objectFit='cover'
                />
            </div>

            {/*  Phone bcg */}
            <div className="absolute  lg:hidden top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image alt='background' onLoad={handleLoad} src={coverMobile} layout="fill" objectFit='cover'
                />
            </div>

            {/* Overlay */}
            <div className="absolute bg-white/[0.0 z-10 top-0 left-0 h-screen w-screen" ></div>



        </>
    )
}

export default Hero