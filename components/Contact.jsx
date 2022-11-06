import React, { useEffect, useState } from 'react'
import hugContactImage from "../public/assets/img/hug.jpg"
import Image from 'next/image'

const Contact = ({ authorized }) => {


    return (
        <section className={authorized === "authorized" ? ' py-5 mb-1 md:text-[#fdfbf7] min-h-[95vh] w-[95vw] items-center text-center flex flex-col' : ' py-5 text-black md:text-[#fdfbf7] min-h-screen w-[90vw] items-center text-center flex-col hidden '} >
            <h1 className='uppercase  mt-3 mb-10 luthier-bold text-3xl md:text-4xl tracking-wider' >Visszajelzések</h1>
            <div className="flex w-[100%] justify-center md:text-[#fdfbf7]">
                {/* image */}
                <div className="relative hidden md:block overflow-y-hidden w-[60vh] p-5 ">
                    <Image src={hugContactImage} layout="responsive" objectFit='cover'
                    />
                </div>

                {/* form */}
                <form netlify-honeypot="bot-field" data-netlify="true" name="form" action="/success" method="POST" className='justify-around items-start text-white luthier-regular  flex w-[100%] md:w-[50%] flex-col'>
                    <input type="hidden" name="form-name" value="form" />
                    <label className="hidden">
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                    </label>

                    <p className='flex justify-start  flex-col pl-5 w-[90%] mb-5' >
                        <label htmlFor="name" className='text-left pb-2 text-black text-lg md:text-[#fdfbf7]' >
                            Név
                        </label>
                        <input /* onChange={e => setName(e.target.value)} */ className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" name="name" id="name" />
                    </p>

                    <p className='flex justify-start  flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="canCome" className='text-left   text-lg pb-2 text-black md:text-[#fdfbf7]' >
                            Kérlek itt jelezz vissza, hogy tudsz e jönni.
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" name="canCome" id="canCome" />
                    </p>
                    <p className='flex justify-start flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="howManyPerson" className='text-left pb-2  text-lg text-black md:text-[#fdfbf7]' >
                            Hányan jöttök?
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2 placeholder-slate-300 rounded-xl bg-transparent' type="text" placeholder="fő, név..." name="howManyPerson" id="howManyPerson" />
                    </p>
                    <p className='flex justify-start flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="foodIntolerance" className='text-left   text-lg pb-2 text-black md:text-[#fdfbf7]' >
                            Írd meg, hogy van e ételérzékenységed.
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' name="foodIntolerance" id="foodIntolerance"></input>
                    </p>
                    <p className='felx justify-center w-[100%]' >
                        <button className='luthier-bold px-3 bg-[#ffbd59] md:bg-[#fdfbf7] text-lg md:text-[#ffbd59] rounded-xl m-3 ' type="submit">Küldés</button>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact