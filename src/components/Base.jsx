import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants ={
  hidden:{
    opacity:0,
    x: '100vw',
  },
  visible:{
    opacity: 1,
    x:0,
    transition:{
      type:'spring', 
      delay:0.5
    }
  }
}
const nextVariants={
  hidden:{
    opacity:0,
    x:'-100vw',

  },
  visible:{
    opacity: 1,
    x : 0,
    transition:{
      type: 'spring',
      stiffness:120 
    }
  }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
   variants={containerVariants} 
   initial='hidden' animate='visible'>

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base}
            whileHover={{
              scale:1.3,
              originX:0,
              color: '#f8e112'
            }} 
            transition={{type:'spring', stiffness: 300}}
            onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
       variants={nextVariants}
       /* inheritance wrk here no need for declaration again */
  /*      initial="hidden"
       animate="visible" */
       >
          <Link to="/toppings">
            <motion.button  whileHover={{ scale:1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
