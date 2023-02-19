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

const Accomodation = () => {

    let adresses = {
        sokoro: "https://goo.gl/maps/wMW9XYrvkb12Dqud9",
        rezo: "https://goo.gl/maps/97w22raE8kgNezVZ7",
        lovas: "https://goo.gl/maps/zXN1v2dy65ECd4zR7",
        panorama: "https://goo.gl/maps/KWyrRoaC72Am6Psu6"
    }

    return (
        <section className=' py-5 min-h-[50vh] items-center w-[95vw] text-center flex flex-col' >
            <h1 className='mt-3  uppercase luthier-regular text-3xl md:text-4xl tracking-wider' >Szállásfoglalási lehetőségek</h1>
            <div className=" hidden  mb-10 md:flex flex-col  justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_white} />
            </div>
            <div className="flex  md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
                <Image width={130} src={leaf_green} />
            </div>
            <div className="flex flex-col xl:flex-row justify-center w-[100%]  ">

                {/* sokoro -> */}
                <div className="text-center m-5 mx-3 flex   flex-col justify-start items-center">
                    <h3 className='luthier-italic text-2xl text-[#ffbd59] line-through' >Sokoró Fogadó, Sokorópátka</h3>
                    <p className='luthier-italic text-cente my-1 text-lg line-through' >/10 férőhely/</p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.sokoro} rel="noopener noreferrer">9112 Sokorópátka , Főmajor</a> </p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_green} />
                        </span>
                        <p className="text-center my-1 text-lg  libre"><a href="tel:+36203891323"> +36 20 389 1323
                        </a></p>
                    </div>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={mail_green} />
                        </span>
                        <p className="text-center my-1 text-lg libre"><a href="mailto: sokorofogado@gmail.com"> sokorofogado@gmail.com</a></p>
                    </div>
                    <p className='luthier-italic text-center my-1 text-xl text-[#ffbd59]' >Sajnos nincs több szabad hely!
                    </p>
                </div>
                {/* <- sokoro */}

                {/* róza -> */}
                <div className="text-center m-5 mx-5 flex   flex-col justify-start items-center">
                    <h3 className='luthier-italic text-2xl text-[#ffbd59]' >Róza Vendégház, Tényő
                    </h3>
                    <p className='luthier-italic text-cente my-1 text-lg' >/16 férőhely/</p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.rezo} rel="noopener noreferrer"> 9111 Tényő, Fő utca 8.
                        </a> </p>
                    </div>
                </div>
                {/* <- róza */}

                {/* Lovas -> */}
                <div className="text-center m-5 mx-5 flex flex-col justify-start items-center">
                    <h3 className='luthier-italic text-2xl text-[#ffbd59]' >Lovasbarát fogadó, Győrújbarát
                    </h3>
                    <p className='luthier-italic text-cente my-1 text-lg' >/16 férőhely/</p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.lovas} rel="noopener noreferrer">9081 Győrújbarát,
                        </a> </p>
                    </div>
                    <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.lovas} rel="noopener noreferrer">Tényői u. 1.
                    </a> </p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_green} />
                        </span>
                        <p className="text-center my-1 text-lg  libre"><a href="tel:+36302309424">+36 30 230 9424
                        </a></p>
                    </div>
                </div>
                {/* <- lovas */}

                {/* panorama -> */}
                <div className="text-center m-5 mx-5 flex flex-col justify-start items-center">
                    <h3 className='luthier-italic text-2xl text-[#ffbd59]' >Panoráma birtok</h3>
                    <p className='luthier-italic text-cente my-1 text-lg' >/60 férőhely/</p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={location_green} />
                        </span>
                        <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.panorama} rel="noopener noreferrer">  9081 Győrújbarát,
                        </a> </p>
                    </div>
                    <p className="text-center my-1 text-lg libre"><a target="_blank" href={adresses.panorama} rel="noopener noreferrer">Vendégfogadó utca 4.
                    </a> </p>
                    <div className='flex relative items-center'>
                        <span className='hidden md:block mr-1  absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_white} />
                        </span>
                        <span className='md:hidden mr-1 absolute left-[-20px]'>
                            <Image width={16} height={16} src={phone_green} />
                        </span>
                        <p className="text-center my-1 text-lg  libre"><a href="tel:+36704212829">+36 70 421 2829
                        </a></p>
                    </div>
                </div>
                {/* <- panorama */}


            </div>

        </section>
    )
}

export default Accomodation