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
            <h1 className="text-sm tablet:text-2xl desktop:text-3xl text-center mt-[20px]">
              GÜLLÜ
            </h1>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[3.5rem] tablet:px-10  desktop:px-[5rem]">
              <div className="relative">
                <img
                  className="object-cover -rotate-6 w-[12rem] tablet:w-max-[18rem] desktop:w-[30rem]"
                  src="/images/advertisement/green.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-green-300 -rotate-6 absolute -z-[1] -top-[1.3rem] desktop:right-[2rem] right-[3.7rem] tablet:right-[2rem] w-[10rem] h-[15rem] tablet:-top-[1.6rem] desktop:-top-[2.2rem] tablet:w-[11.5rem] desktop:w-[31rem] tablet:h-[15.7rem] desktop:h-[35rem]"></div>
              </div>
              <p className="text-2xl tablet:text-6xl desktop:text-7xl">SADE</p>
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[3.5rem] tablet:px-10 desktop:px-[5rem]">
              <p className="text-2xl tablet:text-6xl desktop:text-7xl">BOL</p>
              <div className="relative">
                <img
                  className="object-cover rotate-6 w-[12rem] tablet:w-max-[18rem] desktop:w-[30rem]"
                  src="/images/advertisement/blue.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-cyan-300 rotate-6 absolute -z-[1] -top-[1.3rem] -right-[1.8rem] tablet:-right-[1.7rem] desktop:-right-[2.7rem] w-[10rem] h-[15rem] tablet:-top-[1.4rem] desktop:-top-[2.2rem] tablet:w-[12rem] desktop:w-[29rem] tablet:h-[15.7] desktop:h-[35rem]"></div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full pl-[4rem] pr-[3rem] tablet:px-10 desktop:px-[5rem]">
              <div className="relative">
                <img
                  className="object-cover -rotate-6 w-[11rem] h-[11rem] tablet:w-max-[15rem] tablet:h-[11.5rem] desktop:h-[30rem] desktop:w-[30rem]"
                  src="/images/advertisement/orange.jpg"
                  alt="Women Wearing Green Sweats"
                />
                <div className="bg-orange-300 -rotate-6 absolute -z-[1] -top-[1.3rem] right-[3rem] tablet:right-[2rem] w-[10rem] h-[14rem] tablet:-top-[1.6rem] desktop:-top-[2.2rem] tablet:w-[10.5rem] desktop:w-[31rem] tablet:h-[15rem] desktop:h-[35rem]"></div>
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

            <p className="text-md animate-bounce tablet:text-xl desktop:text-2xl text-center mb-[3rem] tablet:mb-[4rem] mt-[10rem] tablet:mt-[20rem] desktop:mt-[22rem]">
              Koleksiyonlara gitmek için seçim yapınız ⤵
            </p>
            <div className="flex justify-center items-center mb-[10rem]">
              <div className="cursor-pointer relative" onClick={handleShow}>
                <div className="overflow-hidden tablet:w-[20rem] desktop:w-[100%]">
                  <img
                    className="object-cover hover:scale-125 tablet:hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/women.jpg"
                    alt="Women"
                  />
                </div>
                <p className="text-white w-[100%] text-center mix-blend-overlay pointer-events-none text-6xl tablet:text-8xl desktop:text-9xl absolute top-[80px] tablet:top-[140px] desktop:top-[200px]">
                  KADIN
                </p>
              </div>

              <div className="cursor-pointer relative" onClick={handleShow}>
                <div className="overflow-hidden tablet:w-[20rem] desktop:w-[100%]">
                  <img
                    className="object-cover hover:scale-125 tablet:hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/men.jpg"
                    alt="Men"
                  />
                </div>
                <p className="text-white w-[100%] text-center mix-blend-overlay pointer-events-none text-6xl tablet:text-8xl desktop:text-9xl absolute top-[80px] tablet:top-[140px] desktop:top-[200px]">
                  ERKEK
                </p>
              </div>
            </div>
          </div>
            <small className="text-center mb-[20px]">GÜLLÜ</small>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
