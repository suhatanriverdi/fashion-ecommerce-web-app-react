import { motion } from "framer-motion";

export default function Products() {
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
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-9xl">Products</h1>
      </div>
    </motion.div>
  );
}
