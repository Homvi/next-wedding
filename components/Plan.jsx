import Image from 'next/image'
import churc from "../public/assets/icon/churc.svg"
import maiden from "../public/assets/icon/lanykikeres.svg"
import dance from "../public/assets/icon/menyecsketanc.svg"
import cake from "../public/assets/icon/torta.svg"
import dinner from "../public/assets/icon/vacsora.svg"
import guest from "../public/assets/icon/vendegvaras.svg"
import civil from "../public/assets/icon/polgari.svg"
import flower1 from "../public/assets/icon/virag1.svg"
import flower2 from "../public/assets/icon/virag2.svg"



const Plan = () => {



    const adresses = {
        maidenRequest: "https://www.google.com/maps/place/Sereg%C3%A9lyes,+Ady+Endre+u.+99,+8111+Magyarorsz%C3%A1g/@47.1077026,18.5724881,17z/data=!3m1!4b1!4m5!3m4!1s0x4769fc2cf59e26ef:0xaaf0c6e6e6708967!8m2!3d47.107699!4d18.5746768",
        churcCremony: "https://www.google.com/maps/place/Sz%C3%A9kesfeh%C3%A9rv%C3%A1r+Budai+%C3%9Ati+Reform%C3%A1tus+Gy%C3%BClekezet/@47.194554,18.4481225,17z/data=!3m1!4b1!4m5!3m4!1s0x4769f78d40d41c21:0x38163c419bdc8e45!8m2!3d47.1945504!4d18.4503112",
        waitGuest: "https://www.google.com/maps/place/Sokor%C3%B3+Fogad%C3%B3/@47.4858221,17.6827449,17z/data=!4m8!3m7!1s0x476bdab8985074fb:0x335e2ea09e46ea94!5m2!4m1!1i2!8m2!3d47.4858464!4d17.6850031"
    }

    return (
        <section className='py-5 w-[95vw] border-b-4 border-[#ffbd59] md:border-[#faf8ebc3] relative min-h-screen items-center text-center  flex flex-col' >
            {/* flowers for flip scale-x-[-1] */}
            <span className='w-[80px] m-2 absolute top-10 left-[-35px] sm:left-[-60px] sm:w-[110px]' ><Image src={flower1} /></span>
            <span className='w-[80px] m-2 absolute rotate-[330deg] top-[500px] right-[-35px] sm:right-[-75px] sm:w-[150px]' ><Image src={flower2} /></span>

            <div className="text-center w-[100%] items-center  flex flex-col">

                <h1 className='uppercase text-3xl md:text-4xl  tracking-wider mt-3 mb-10 luthier-bold ' >Menetrend</h1>

                {/* maiden request */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >13:00</span> Lánykikérés</p><span className='w-[20px] m-2' ><Image src={maiden} /></span>
                </div>
                <p className='luthier-italic  text-center ' ><a target="_blank" href={adresses.maidenRequest} rel="noopener noreferrer">8111 Seregélyes Ady Endre utca 99</a> </p>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>

                {/* churc cremony */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >14:00</span >  Templomi szertartás</p><span className='w-[20px] m-2' ><Image src={churc} /></span>
                </div>
                <p className='luthier-italic text-center ' ><a target="_blank" href={adresses.churcCremony} rel="noopener noreferrer">Budai úti Református Templom 8000 Székesfehérvár Budai út 113.</a> </p>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>

                {/* wait guest */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >16:30</span> Vendégvárás</p><span className='w-[20px] m-2' ><Image src={guest} /></span>
                </div>
                <p className='luthier-italic text-center ' > <a target="_blank" href={adresses.waitGuest} rel="noopener noreferrer">Sokoró Fogadó 9112 Sokorópátka Főmajor</a></p>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>

                {/* civil */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >17:30</span> Polgári szertartás</p><span className='w-[20px] m-2' ><Image src={civil} /></span>
                </div>
                <p className='luthier-italic text-center' >Pavilon</p>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>

                {/* Dinner */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >19:30</span> Vacsora</p><span className='w-[20px] m-2' ><Image src={dinner} /></span>
                </div>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>

                {/* Cake */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >22:30</span> Menyasszonyi torta</p><span className='w-[20px] m-2' ><Image src={cake} /></span>
                </div>

                <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-4 rounded-full'></div>
                {/* Dance */}
                <div className="flex items-baseline">
                    <p className=' text-2xl luthier-bold-italic mb-5' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >00:00</span> Menyecsketánc</p><span className='w-[20px] m-2' ><Image src={dance} /></span>
                </div>
            </div>

        </section>

    )
}

export default Plan