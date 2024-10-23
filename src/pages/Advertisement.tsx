import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Advertisement() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
    setTimeout(() => {
      navigate("/products");
    }, 800);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="flex flex-col justify-center items-center text-justify"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "anticipate",
          }}
        >
          <div className="tablet:max-w-[30rem] desktop:max-w-[60rem] w-full">
            <h1 className="text-sm tablet:text-2xl desktop:text-3xl text-center mt-[40px]">
              GÜLLÜ
            </h1>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[3.5rem] desktop:px-[5rem]">
              <div className="relative">
                <img
                  className="object-cover -rotate-6 w-[12rem] tablet:w-[18rem] desktop:w-[30rem]"
                  src="/images/advertisement/green.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-green-300 -rotate-6 absolute -z-[1] -top-[1.3rem] right-[3.7rem] tablet:right-[3rem] w-[10rem] h-[15rem] tablet:-top-[1.6rem] desktop:-top-[2.2rem] tablet:w-[18rem] desktop:w-[31rem] tablet:h-[22rem] desktop:h-[35rem]"></div>
              </div>
              <p className="text-2xl tablet:text-6xl desktop:text-7xl">SADE</p>
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[3.5rem] desktop:px-[5rem]">
              <p className="text-2xl tablet:text-6xl desktop:text-7xl">BOL</p>
              <div className="relative">
                <img
                  className="object-cover rotate-6 w-[12rem] tablet:w-[18rem] desktop:w-[30rem]"
                  src="/images/advertisement/blue.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-cyan-300 rotate-6 absolute -z-[1] -top-[1.3rem] -right-[1.8rem] tablet:-right-[2rem] w-[10rem] h-[15rem] tablet:-top-[1.6rem] desktop:-top-[2.2rem] tablet:w-[18rem] desktop:w-[31rem] tablet:h-[22rem] desktop:h-[35rem]"></div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[3rem] desktop:px-[5rem]">
              <div className="relative">
                <img
                  className="object-cover -rotate-6 w-[11rem] h-[11rem] tablet:w-[15rem] tablet:h-[14.5rem] desktop:h-[30rem] desktop:w-[30rem]"
                  src="/images/advertisement/orange.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-orange-300 -rotate-6 absolute -z-[1] -top-[1.3rem] right-[3rem] tablet:right-[2rem] w-[10rem] h-[14rem] tablet:-top-[1.6rem] desktop:-top-[2.2rem] tablet:w-[15rem] desktop:w-[31rem] tablet:h-[18.2rem] desktop:h-[35rem]"></div>
              </div>
              <div>
                <p className="text-md tablet:text-2xl desktop:text-3xl text-center">
                  ve
                </p>
                <p className="text-2xl tablet:text-5xl desktop:text-7xl">
                  RAHAT
                </p>
              </div>
            </div>

            <h1 className="text-2xl tablet:text-5xl desktop:text-7xl text-center mb-[2rem] tablet:mb-[4rem] mt-[10rem] tablet:mt-[20rem] desktop:mt-[22rem]">
              TAKILANLARA
            </h1>
            <p className="text-md animate-bounce tablet:text-xl desktop:text-2xl text-center mb-[3rem] tablet:mb-[4rem]">
              Koleksiyonlara gitmek için seçim yapınız ⤵
            </p>
            <div className="flex justify-between items-center">
              <div className="cursor-pointer" onClick={handleShow}>
                <div className="max-w-[140px] tablet:max-w-[500px] overflow-hidden">
                  <img
                    className="object-cover hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/women.jpg"
                    alt="Women"
                  />
                </div>
                <p className="text-center text-white mix-blend-overlay pointer-events-none text-4xl tablet:text-6xl desktop:text-9xl relative -top-[100px] tablet:-top-[180px] desktop:-top-[350px]">
                  KADIN
                </p>
              </div>

              <div className="cursor-pointer" onClick={handleShow}>
                <div className="max-w-[140px] tablet:max-w-[500px] overflow-hidden">
                  <img
                    className="object-cover hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/men.jpg"
                    alt="Men"
                  />
                </div>
                <p className="text-center text-white mix-blend-overlay pointer-events-none text-4xl tablet:text-6xl desktop:text-9xl relative -top-[100px] tablet:-top-[180px] desktop:-top-[350px]">
                  ERKEK
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
