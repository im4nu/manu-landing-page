import Image from 'next/image'
import { FiCommand, FiPenTool, FiMonitor } from 'react-icons/fi'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { 
    prototype,
    develop,
    webDesign
} from './images'

export default function DesignPattern(){
    const [step, setStep] = useState({
        first: 0,
        second: 1,
    });
    const services = [
        {icon: <FiCommand size={24} color={'#DEDEDE'} />, images: prototype, alt: 'Imagem do serviço prototipagem', value: 0, title: 'Prototipagem', description: 'Traga à vida uma ideia que você tem da melhor maneira possível!'},
        {icon: <FiPenTool size={24} color={'#DEDEDE'} />, images: webDesign, alt: 'Imagem do serviço webdesign', value: 1, title: 'WebDesign', description: 'Dê uma nova cara ao seu site com alguém que entende do assunto'},
        {icon: <FiMonitor size={24} color={'#DEDEDE'} />, images: develop, alt: 'Imagem do serviço desenvolvimento', value: 2, title: 'Desenvolvimento', description: 'Não se preocupe com mais nada, apenas em divulgar seu novo site 😉'}
    ]
    function handleNextService() {
        if(step.first === services.length - 1){
            return
        }
        setStep({first: ++step.first, second: ++step.second})
    }
    function handlePreviousService() {
        if(step.first != 0){
            setStep({first: step.first -1, second: step.second -1})
        }
    }
    return(
        <div className="flex flex-col">
            <div className="flex">
                <ul className='flex flex-row justify-between w-full'>
                    { services.map((index) =>
                        <li 
                        key={index.alt}
                        >
                            <button 
                            className='px-4'
                            onClick={index.value <= 1 ? handleNextService : handlePreviousService }
                            >
                                {index.icon}
                            </button>
                        </li>
                    )}
                </ul>
            </div>

            <div className="flex">
                { services.slice(step.first, step.second).map((index) =>
                <>
                    <div className='flex flex-col'>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                key={index.alt}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image key={index.alt} src={index.images} alt={index.alt} />

                                <div className="flex flex-col -mt-16">
                                    <h3>{index.title}</h3>
                                    <p className='text-xs px-6'>{index.description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}