import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const nagivate = useNavigate();

  useEffect(() => {
    // Forward to advertisement page after 3 seconds
    const timer = setTimeout(() => {
      nagivate("/advertisement");
    }, 3300);

    return () => clearTimeout(timer);
  }, [nagivate]);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <h1 className="z-10 text-[9rem] md:text-[18rem] text-white drop-shadow-[0_20px_20px_rgba(0,100,50,0.9)] fixed">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "anticipate" }}
        >
          GÜLLÜ
        </motion.div>
      </h1>
      <div className="flex">
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "auto" }}
          transition={{
            duration: 3,
            ease: "anticipate",
          }}
        >
          <img
            className="object-cover h-[220px] w-[200px] sm:h-[500px] sm:w-auto"
            src="/images/men.jpg"
            alt="Model men photo"
          />
        </motion.div>

        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "auto" }}
          transition={{
            duration: 3,
            ease: "anticipate",
          }}
        >
          <img
            className="object-cover h-[287px] w-[200px] sm:h-[500px] sm:w-auto"
            src="/images/women.jpg"
            alt="Model women photo"
          />
        </motion.div>
      </div>
    </div>
  );
}
