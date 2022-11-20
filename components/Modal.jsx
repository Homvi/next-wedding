
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const Modal = ({ visible, src, closeModal, width, height }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setloadingMessage] = useState("A kép betöltése folyamatban...")

  useEffect(() => {
    setIsLoading(true)
  }, [visible])

  const hanleLoadingComplete = () => {
    setIsLoading(false)
    setloadingMessage("")
  }
  const handleCloseModal = () => {
    closeModal()
    setTimeout(() => {
      setloadingMessage("A kép betöltése folyamatban...")
    }, 1000);
  }

  return (
    <>
      <div className={visible ? 'h-screen w-screen z-20 p-1 bg-white/80 flex flex-col justify-center items-center ease-in-out transition-all duration-1000 delay-75 scale-100 opacity-100 text-white text-2xl fixed top-0 left-0' : "h-screen w-screen z-20 bg-white/10  delay-75 flex flex-col justify-center items-center ease-in-out transition-all duration-1000 scale-0 opacity-0 text-white text-2xl fixed top-0 left-0"}>
        <div onClick={handleCloseModal} className="close  h-7 w-7 rounded-sm flex justify-center items-center fixed z-[51] top-2 right-2 md:top-5 md:right-10  text-black bg-white/70 cursor-pointer"><CloseIcon /></div>
        {src && <Image objectFit='contain' width={width} height={height} src={src} onLoadingComplete={hanleLoadingComplete} alt="image" className='landscape:h-screen landscape:w-auto portrait:w-screen md:h-auto p-1 rounded-lg' />}
        {isLoading && <Spinner loadingMessage={loadingMessage} />}
      </div>
    </>
  )
}


export default Modal