import { motion } from "framer-motion";

export default function Advertisement() {
  return (
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
      <div className="max-w-[80rem] w-full">
        <h1 className="text-4xl text-center mt-[4rem]">GÜLLÜ</h1>

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
        <div className="flex justify-between items-center mb-[12rem]">
          <img
            className="object-cover"
            src="/images/introduction/women.jpg"
            alt="Women"
          />
          <img
            className="object-cover"
            src="/images/introduction/men.jpg"
            alt="Men"
          />
        </div>
      </div>
    </motion.div>
  );
}
