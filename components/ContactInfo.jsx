import React from 'react'

const ContactInfo = () => {
    return (
        <section className=' py-3  min-h-[50vh] items-center w-[95vw] text-center flex flex-col' >
            <h1 className='text-2xl mt-3 mb-5 uppercase luthier-bold' >Elérhetőségek</h1>
            <div className="flex flex-col md:flex-row justify-center w-[100%] custom-border pb-10">
                <div className="text-center m-5 flex flex-col justify-center items-center">
                    <h3 className='luthier-bold-italic custom-border-orange' >Balla Brigitta</h3>
                    <p className="text-cente my-1 luthier-regular"> 06-30/85-68-438</p>
                    <p className="text-cente my-1 luthier-regular"> 9025 Győr Diós utca 22. 1/2</p>
                    <p className="text-cente my-1 luthier-regular">ballabrigi96@gmail.com</p>
                </div>
                <div className="text-center m-5 flex flex-col justify-center items-center">
                    <h3 className='luthier-bold-italic custom-border-orange' >Végh Kálmán</h3>
                    <p className="text-cente my-1 luthier-regular">06-20/34-83-728</p>
                    <p className="text-cente my-1 luthier-regular">9025 Győr Diós utca 22. 1/2</p>
                    <p className="text-cente my-1 luthier-regular">vkalman06@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo