import React from 'react'

import Bus2 from "../../../assets/bus5.png"

import {animate, motion} from "framer-motion"

const Hero = () => {

     const imageVariants = {
        initial: {
              x: "100%", 
        },
        animate: {
           x: "3%",
           transition:{
                duration: 3,
                ease: "easeInOut",
           }
        }
    }
       
    
  return (
    <div className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
     <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
          <motion.dev className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14"
          intial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, ease: 'linear', delay: 0.2}}
          >
               <motion.dev className="space-y-5"
                intial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: 'linear', delay: 0.2}}
               >
                <motion.h1 className="text-7xl font-bold text-netural-50 leading-[1.15]"
                 intial={{opacity: 0, y: -10}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 2, ease: 'linear', delay: 0.4}}
                >
                   Reserve Your Bus
                   <span className="text-violet-400 tracking-wider">Tickets</span>
                   Now
                </motion.h1>
                <motion.p className="text-lg font-normal text-netural-300 line-clamp-3 text-ellipsis"
                 intial={{opacity: 0, y: -10}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 2, ease: 'linear', delay: 0.6}}
                >
                   Find and book your bus tickets with a few clicks. We offer a wide range of bus routes and schedules to suit your needs.
                </motion.p>
               </motion.dev>

               <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-netural-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300">
                   Reserve Seats now
               </motion.button>

          </motion.dev>

          <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 -right-48">
              <motion.img 
                 className="w-full aspect-[4/2] object-contain"
                 src={Bus2}
                 alt='bus img'
                 initial="initial"
                 animate="animate"
                 variants={imageVariants} 
            />
          </div>
      </div>
    </div>    
    
  )
}

export default Hero
