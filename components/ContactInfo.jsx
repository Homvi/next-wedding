import React from 'react'

const ContactInfo = () => {
    return (
        <section className=' py-3  min-h-[50vh] items-center w-[95vw] text-center flex flex-col' >
            <h1 className='mt-3 mb-10 uppercase luthier-bold text-4xl tracking-wider' >Elérhetőségek</h1>

            <div className="flex flex-col md:flex-row justify-center w-[100%] custom-border pb-10">
                
                <div className="text-center m-5 mx-8 flex flex-col justify-center items-center">
                    <h3 className='luthier-bold-italic text-xl custom-border-orange' >Balla Brigitta</h3>
                    <p className="text-cente my-1 text-lg  luthier-regular"><a href="tel:06-30/85-68-438">06-30/85-68-438</a></p>
                    <p className="text-cente my-1 text-lg luthier-regular"> 9025 Győr Diós utca 22. 1/2</p>
                    <p className="text-cente my-1 text-lg luthier-regular"><a href="mailto: ballabrigi96@gmail.com">ballabrigi96@gmail.com</a></p>
                </div>

                <div className="text-center m-5 flex mx-8 flex-col justify-center items-center">
                    <h3 className='luthier-bold-italic text-xl custom-border-orange' >Végh Kálmán</h3>
                    <p className="text-cente my-1 text-lg  luthier-regular"><a href="tel:06-20/34-83-728">06-20/34-83-728</a></p>
                    <p className="text-cente my-1 text-lg luthier-regular">9025 Győr Diós utca 22. 1/2</p>
                    <p className="text-cente my-1 text-lg luthier-regular"><a href="mailto: vkalman06@gmail.com">vkalman06@gmail.com</a></p>
                </div>

            </div>
        </section>
    )
}

export default ContactInfo