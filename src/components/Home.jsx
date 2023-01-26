import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const buttonVariants ={
  /* visible:{
    x: [0,-20, 20, -20, 20, 0],
    transition: {delay: 2}
  } */
  hover: {
    scale:1.1, 
 /*   scale:[1,1.1,1,1.1,1,1.1,1],//keyframes on button */
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
    
      // how many times we want to repeat the animation
      yoyo: Infinity
    }
  }
}
const Home = () => {
  return (
    <motion.div className="home container"
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{ delay: 1.5, duration:1.5}}
    exit={{x:'-100vw', transition:{ease: "easeInOut"}}}>
      <h2 >
      Welcome to Pizza Joint
      </h2>
      
      <Link to="/base">
        <motion.button 
          variants={buttonVariants}
        
          whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;