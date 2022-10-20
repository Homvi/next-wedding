const Plan = () => {

    return (
                <section className=' py-3  min-h-screen items-center text-center flex flex-col bg-[#62622a] ' >

                    <h1 className='text-4xl m-5 luthier-bold text-[#fff]' >Menetrend</h1>

                    {/* arrow */}
                    <div className="w-3 mb-2 h-3 bg-[#ffbd59]"></div>

                    {/* maiden request */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >13:00</span> Lánykikérés</p>
                    <p className='luthier-italic  text-center text-[#fff]' >8111 Seregélyes Ady Endre utca 99</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>

                    {/* churc cremony */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >14:00</span> Templomi szertartás</p>
                    <p className='luthier-italic text-center text-[#fff]' >Budai úti Református Templom 8000 Székesfehérvár Budai út 113.</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>

                    {/* wait guest */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >16:30</span> Vendégvárás</p>
                    <p className='luthier-italic text-center text-[#fff]' >Sokoró Fogadó 9112 Sokorópátka Főmajor</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>

                    {/* civil */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >17:30</span> Polgári szertartás</p>
                    <p className='luthier-italic text-center text-[#fff]' >Pavilon</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>

                    {/* Dinner */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >19:30</span> Vacsora</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>

                    {/* Cake */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >22:30</span> Menyasszonyi torta</p>

                    <div id="hr" className='w-[4px] h-[4px] bg-[#fff] m-3 rounded-full'></div>
                    {/* Dance */}
                    <p className='text-[#fff] text-2xl luthier-bold-italic' ><span className='text-[#ffbd59] text-2xl luthier-bold-italic' >00:00</span> Menyecsketánc</p>

                </section>
           
    )
}

export default Plan