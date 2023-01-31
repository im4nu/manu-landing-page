import Image from "next/image";
import { FiCommand, FiPenTool, FiMonitor } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prototype, develop, webDesign } from "./images";

export default function DesignPattern() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const services = [
    {
      icon: <FiCommand size={24} color={"#DEDEDE"} />,
      images: prototype,
      alt: "Imagem do serviço prototipagem",
      title: "Prototipagem",
      description:
        "Traga à vida uma ideia que você tem da melhor maneira possível!",
    },
    {
      icon: <FiPenTool size={24} color={"#DEDEDE"} />,
      images: webDesign,
      alt: "Imagem do serviço webdesign",
      title: "WebDesign",
      description:
        "Dê uma nova cara ao seu site com alguém que entende do assunto",
    },
    {
      icon: <FiMonitor size={24} color={"#DEDEDE"} />,
      images: develop,
      alt: "Imagem do serviço desenvolvimento",
      title: "Desenvolvimento",
      description:
        "Não se preocupe com mais nada, apenas em divulgar seu novo site 😉",
    },
  ];
  function handleSlide(step: number) {
    setCurrentStep(step);
  }
  return (
    <div className="flex flex-col">
      <div className="flex">
        <ul className="flex flex-row justify-between w-full">
          {services.map((item, index) => (
            <li key={item.alt}>
              <button className="px-4" onClick={() => handleSlide(index)}>
                {item.icon}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={services[currentStep].alt}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                key={services[currentStep].alt}
                src={services[currentStep].images}
                alt={services[currentStep].alt}
                width={543}
                height={285}
              />

              <div className="flex flex-col -mt-16">
                <h3>{services[currentStep].title}</h3>
                <p className="text-xs px-8">
                  {services[currentStep].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
