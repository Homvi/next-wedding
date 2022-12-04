import React, { useEffect, useState } from 'react'
import hugContactImage from "../public/assets/img/hug.jpg"
import Image from 'next/image'
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"

const Contact = ({ authorized }) => {


    return (
        <section className={authorized === "authorized" ? ' py-5 mb-1  min-h-[95vh] w-[95vw] items-center text-center flex flex-col' : ' py-5  min-h-screen w-[90vw] items-center text-center flex-col hidden '} >
            <h1 className='uppercase  mt-3 luthier-bold text-3xl md:text-4xl tracking-wider' >Visszajelzések</h1>

            <div className=" cursor-pointer hidden  mb-10 md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_white} />
            </div>
            <div className="flex cursor-pointer md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_green} />
            </div>

            <div className="flex w-[100%] justify-center">
                {/* image */}
                <div className="relative hidden md:block overflow-y-hidden w-[60vh] p-5 ">
                    <Image src={hugContactImage} layout="responsive" objectFit='cover'
                    />
                </div>

                {/* form */}
                <form netlify-honeypot="bot-field" data-netlify="true" name="form" action="/success" method="POST" className='justify-around items-start luthier-regular  flex w-[100%] md:w-[50%] flex-col'>
                    <input type="hidden" name="form-name" value="form" />
                    <label className="hidden">
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                    </label>

                    <p className='flex justify-start  flex-col pl-5 w-[90%] mb-5' >
                        <label htmlFor="name" className='text-left pb-2 text-lg' >
                            Név
                        </label>
                        <input /* onChange={e => setName(e.target.value)} */ className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" name="name" id="name" />
                    </p>

                    <p className='flex justify-start  flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="canCome" className='text-left   text-lg pb-2' >
                            Kérlek itt jelezz vissza, hogy tudsz e jönni.
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" name="canCome" id="canCome" />
                    </p>
                    <p className='flex justify-start flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="howManyPerson" className='text-left pb-2  text-lg' >
                            Hány fővel érkeztek?
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2 placeholder-slate-300 rounded-xl bg-transparent' type="text" placeholder="fő, név..." name="howManyPerson" id="howManyPerson" />
                    </p>
                    <p className='flex justify-start flex-col pl-5 w-[90%] my-5' >
                        <label htmlFor="foodIntolerance" className='text-left   text-lg pb-2' >
                            Van ételérzékenységetek? Amennyiben van írd meg, hogy kinek és milyen érzékenysége van.
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