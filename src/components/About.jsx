import React from 'react';
import Typed from "react-typed";
import { motion } from "framer-motion";



function About() {


const downloadFile = () => {
    window.location.href = "CV.pdf"
  }
  return(
    <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5,type:"tween"}} id="home" className="about">
    <Typed className="name"
      strings={[
        "Hi there,",
    

      ]}
      typeSpeed={100} 
/>

<motion.h2 initial={{scale:0.5 ,opacity:0}} animate={{scale:1.5 ,opacity:1}} transition={{delay:1,type:"tween"}} className="name">I am Sarath</motion.h2>
      
      
      <motion.p initial={{x:-110 ,opacity:0}} animate={{x:0,opacity:1}} transition= {{delay:1.5,type:"spring" ,stiffness:120}} className="intro">
    
            "I'm a Front End Developer.
        
            Looking forward towards a career in Web Development"
            
         </motion.p>

      <button onClick={downloadFile} className="btn btn-primary btn-sm">Download Resume</button>
   


    </motion.div>
    
  )
};
export default About;


