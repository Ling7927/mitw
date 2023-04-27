import React from "react";
import { motion } from "framer-motion";
function Specification() {
  return (
    <>
      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1,background:"pink",width:"10rem",height:"10rem" }}
         transition={{
           duration: 0.3,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
             type: "spring",
             damping: 5,
             stiffness: 100,
             restDelta: 0.001
           }}}
           
      >
        fenjek
      </motion.div>
    </>
  );
}

export default Specification;
