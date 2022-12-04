import React from 'react'
import Image from 'next/image'
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"
import phone_green from "../public/assets/icon/phone_green.svg"
import phone_white from "../public/assets/icon/phone_white.svg"
import location_green from "../public/assets/icon/location_green.svg"
import location_white from "../public/assets/icon/location_white.svg"
import mail_green from "../public/assets/icon/mail_green.svg"
import mail_white from "../public/assets/icon/mail_white.svg"

const ContactInfo = () => {
    return (
        <section className=' py-5 border-b-4 border-[#ffbd59] md:border-[#faf8ebc3]  min-h-[50vh] items-center w-[95vw] text-center flex flex-col' >
            <h1 className='mt-3  uppercase luthier-bold text-3xl md:text-4xl tracking-wider' >Elérhetőségek</h1>
            <div className=" hidden  mb-10 md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_white} />
            </div>
            <div className="flex  md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_green} />
            </div>

            <div className="flex flex-col md:flex-row justify-center w-[100%]">

                <div className="text-center m-5 mx-8 flex flex-col justify-center items-center">


                    <h3 className='libre-italic text-xl custom-border-orange' >Balla Brigitta</h3>

                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_green} />
                        </span>
                        <p className="text-cente my-1 text-lg  libre"><a href="tel:06-30/85-68-438">06-30/85-68-438</a></p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-cente my-1 text-lg libre"> 9025 Győr Diós utca 22. 1/2</p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_green} />
                        </span>
                        <p className="text-cente my-1 text-lg libre"><a href="mailto: ballabrigi96@gmail.com">ballabrigi96@gmail.com</a></p>
                    </div>
                </div>

                <div className="text-center m-5 flex mx-8 flex-col justify-center items-center">
                    <h3 className='libre-italic text-xl custom-border-orange' >Végh Kálmán</h3>
                    <div className='flex items-center relative'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_green} />
                        </span>
                        <p className="text-cente my-1 text-lg  libre"><a href="tel:06-20/34-83-728">06-20/34-83-728</a></p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-cente my-1 text-lg libre">9025 Győr Diós utca 22. 1/2</p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_green} />
                        </span>
                        <p className="text-cente my-1 text-lg libre"><a href="mailto: vkalman06@gmail.com">vkalman06@gmail.com</a></p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactInfo