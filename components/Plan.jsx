import Image from 'next/image'
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"

const Plan = () => {



    const adresses = {
        maidenRequest: "https://www.google.com/maps/place/Sereg%C3%A9lyes,+Ady+Endre+u.+99,+8111+Magyarorsz%C3%A1g/@47.1077026,18.5724881,17z/data=!3m1!4b1!4m5!3m4!1s0x4769fc2cf59e26ef:0xaaf0c6e6e6708967!8m2!3d47.107699!4d18.5746768",
        churcCremony: "https://www.google.com/maps/place/Sz%C3%A9kesfeh%C3%A9rv%C3%A1r+Budai+%C3%9Ati+Reform%C3%A1tus+Gy%C3%BClekezet/@47.194554,18.4481225,17z/data=!3m1!4b1!4m5!3m4!1s0x4769f78d40d41c21:0x38163c419bdc8e45!8m2!3d47.1945504!4d18.4503112",
        waitGuest: "https://www.google.com/maps/place/Sokor%C3%B3+Fogad%C3%B3/@47.4858221,17.6827449,17z/data=!4m8!3m7!1s0x476bdab8985074fb:0x335e2ea09e46ea94!5m2!4m1!1i2!8m2!3d47.4858464!4d17.6850031"
    }

    return (
        <section className='py-5 w-[95vw]  relative min-h-screen items-center text-center  flex flex-col' >

            <div className="text-center w-[100%] items-center tracking-wide flex flex-col">

                <h1 className='uppercase text-3xl md:text-4xl   mt-3 tracking-wider luthier-regular' >Menetrend</h1>
                <div className=" hidden  mb-10 md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_white} />
                </div>
                <div className="flex  md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_green} />
                </div>

                {/* maiden request */}
                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col h-full w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >13:00</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Lánykikérés
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full' ><a target="_blank" href={adresses.maidenRequest} rel="noopener noreferrer">8111 Seregélyes Ady Endre utca 99</a> </p>
                        </div>
                    </div>
                </div>
                {/* church ceremony */}
                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >14:00</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Templomi szertartás
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full' ><a target="_blank" href={adresses.churcCremony} rel="noopener noreferrer">Budai úti Református Templom 8000 Székesfehérvár Budai út 113.</a> </p>
                        </div>
                    </div>
                </div>
                {/* waith guest */}
                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >16:30</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Vendégvárás
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full' ><a target="_blank" href={adresses.waitGuest} rel="noopener noreferrer">Sokoró Fogadó 9112 Sokorópátka Főmajor</a> </p>
                        </div>
                    </div>
                </div>

                {/* civil */}
                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >17:30</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Polgári szertartás
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full' >Pavilon </p>
                        </div>
                    </div>
                </div>

                {/* dinner */}
                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >19:30</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Vacsora
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full invisible' >placeholder</p>
                        </div>
                    </div>
                </div>

                {/* cake */}

                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >22:30</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                                Menyasszonyi torta
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full invisible' >placeholder</p>
                        </div>
                    </div>
                </div>

                {/* dance */}

                <div className="row flex  relative w-full  ">
                    {/* time */}
                    <div className="felx relative flex-col  w-[40%]">
                        <span className='libre-italic flex  h-full justify-end pr-10 md:pr-20 text-[#ffbd59] text-2xl' >00:00</span>
                    </div>
                    {/* place */}
                    <div className="flex w-[60%] h-full border-l-2  justify-start items-start text-left relative  ">
                        <div className="flex items-start flex-col justify-start pb-5 w-full">
                            <p className=' text-2xl  libre-italic w-full flex flex-col pl-10 md:pl-20 relative ' >
                                <div className="absolute  top-2 left-[-6px] w-[10px] text-left h-[10px]  rounded-full bg-[#ffbd59]"></div>
                               Menyecsketánc
                            </p>
                            <p className='libre-italic  pl-10 md:pl-20 w-full invisible' >placeholder</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Plan