import Head from "next/head";
import Gallery from "../components/Gallery";
import Modal from "../components/Modal";

const gallery = () => {
    return (
        <div className="text-[#62622a] bg-[#faf8eb] md:bg-[#62622a]/70 md:text-[#fdfbf7] ">
            <Head>
                <title>Esküvői galéria</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-3xl md:text-4xl p-5  luthier-regular uppercase tracking-wider">Brigi & Kálmi</h1>
            <h1 className="text-center text-2xl md:text-3xl p-1  luthier-regular tracking-wider ">Galéria</h1>
            <Gallery />
            <Modal />
        </div>
    )
}

export default gallery