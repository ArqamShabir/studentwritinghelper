import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-8 border-gray-900 border-t-transparent rounded-full"
      ></motion.div>
    </div>
  );
}
