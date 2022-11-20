import Head from "next/head";
import Gallery from "../components/Gallery";
import Modal from "../components/Modal";

const gallery = () => {
    return (
        <div className="bg-white h-screen">
            <Head>
                <title>Esküvői galéria</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-5xl p-5 text-[#333] Parisienne-Regular ">Brigi & Kálmi</h1>
            <h1 className="text-center text-4xl p-1 text-[#333] Parisienne-Regular ">Galéria</h1>
            <Gallery />
            <Modal />
        </div>
    )
}

export default gallery