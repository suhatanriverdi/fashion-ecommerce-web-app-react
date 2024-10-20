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
          <div className="md:max-w-[80rem] max-w-[40rem] w-full">
            <h1 className="text-3xl text-center mt-[4rem]">GÜLLÜ</h1>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[8rem]">
              <img
                className=""
                src="/images/advertisement/green.jpg"
                alt="Women Wearing Green Sweats"
              />
              <p className="text-9xl">SADE</p>
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[8rem]">
              <p className="text-9xl">BOL</p>
              <img
                className=""
                src="/images/advertisement/blue.jpg"
                alt="Women Wearing Green Sweats"
              />
            </div>

            <div className="flex items-center justify-between mt-[12rem] w-full px-[8rem]">
              <img
                className=""
                src="/images/advertisement/orange.jpg"
                alt="Women Wearing Green Sweats"
              />
              <div>
                <p className="text-3xl text-center">ve</p>
                <p className="text-9xl">RAHAT</p>
              </div>
            </div>

            <h1 className="text-9xl text-center mt-[24rem] mb-[4rem]">
              TAKILANLARA
            </h1>
            <p className="text-xl text-center mb-[4rem]">
              Koleksiyonlara gitmek için seçim yapınız
            </p>
            <div className="flex justify-evenly items-center">
              <div className="cursor-pointer" onClick={handleShow}>
                <div className="max-w-[500px] overflow-hidden">
                  <img
                    className="object-cover hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/women.jpg"
                    alt="Women"
                  />
                </div>
                <p className="text-center text-white mix-blend-overlay pointer-events-none text-[10rem] relative -top-[400px]">
                  KADIN
                </p>
              </div>

              <div className="cursor-pointer" onClick={handleShow}>
                <div className="max-w-[500px] overflow-hidden">
                  <img
                    className="object-cover hover:scale-110 transition-all duration-300 overflow-hidden"
                    src="/images/introduction/men.jpg"
                    alt="Men"
                  />
                </div>
                <p className="text-center text-white mix-blend-overlay pointer-events-none text-[10rem] relative -top-[400px]">
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
