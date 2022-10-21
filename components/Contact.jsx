import React from 'react'
import hugContactImage from "../public/assets/img/hug.jpg"
import Image from 'next/image'

const Contact = () => {
    return (
        <section className=' py-3 pt-5 min-h-screen items-center text-center flex flex-col bg-[#62622a] ' >
            <h1 className='text-4xl m-5 luthier-bold text-[#fff]' >Visszajelzések</h1>
            <div className="flex custom-border w-[90%] justify-center">
                {/* image */}
                <div className="relative  overflow-y-hidden w-[60vh] p-5 ">
                    <Image src={hugContactImage} layout="responsive" objectFit='cover'
                    />
                </div>

                {/* form */}
                <form netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success" method="POST" className='justify-around items-start text-white luthier-regular  flex w-[50%] flex-col'>
                    <input type="hidden" name="contact" value="contact" />
                    <label className="hidden">
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                    </label>

                    <p className='flex justify-start  flex-col pl-5 w-[90%]' >
                        <label htmlFor="canCome" className='text-left pb-2' >
                            Kérlek itt jelezz vissza, hogy tudsz e jönni.
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" name="canCome" id="canCome" />
                    </p>

                    <p className='flex justify-start flex-col pl-5 w-[90%]' >
                        <label htmlFor="howManyPerson" className='text-left pb-2' >
                            Hányan jöttök?
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' type="text" placeholder="fő, név..." name="howManyPerson" id="howManyPerson" />
                    </p>
                    <p className='flex justify-start flex-col pl-5 w-[90%]' >
                        <label htmlFor="foodIntolerance" className='text-left  pb-2' >
                            Írd meg, hogy van e ételérzékenységed.
                        </label>
                        <input className='border-4 border-[#ffbd59]/80 px-2  rounded-xl bg-transparent' name="foodIntolerance" id="foodIntolerance"></input>
                    </p>
                    <p className='felx justify-center w-[100%]' >
                        <button className='luthier-bold px-3 bg-[#fdfbf7] text-lg text-[#ffbd59] rounded-xl m-3 ' type="submit">Küldés</button>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact