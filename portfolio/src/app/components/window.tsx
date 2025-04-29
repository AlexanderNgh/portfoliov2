import React from 'react';
import { motion } from 'framer-motion';

// this is to set the type of the props
type WindowComponentProps = {
  id: string;
  flag: boolean;
  left:number;
  top:number;
  text: string;
};

// random time function
const getRandomDuration = () => Math.random() * (0.7 - 0.1) + 0.1;

//actual component
const WindowComponent: React.FC<WindowComponentProps> = ({ id, flag, left, top, text }) => {
    // for the positioning of the components
    const windowStyle = {
        left: `${left}px`,
        top: `${top}px`,
      };
    // get a time
    const time = getRandomDuration()

    // if true then its a text window, else its an image, text should be the text inside as well as the img src
    if(flag){
        // return a motion div
        // set a fixed width even though the inset-0 makes it the entire parent
        // it makes the children fit to 400px
        // set the initial ones, the animate/final ones, and then the exit one as well as the duration
        // inner div has absolute so it overlays, and then give it a z of 30 so its in the front
        return (
            <motion.div 
                className='w-[400px] absolute inset-0'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: time }}>
                
                <div className={`absolute h-fit w-full z-30`} style={windowStyle}>
                    <img
                        className='w-full rounded-t-lg'
                        src="/assets/windowbar.png">
                    </img>
                    <div className='bg-gray-100 h-[300px] p-4'>
                        {text}
                    </div>
                </div>
            </motion.div>
        );
    }
    else{
        return (
            <motion.div className='w-[400px] absolute inset-0'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: time }}>
                <div className={`absolute h-fit w-full z-30`} style={windowStyle}>
                    <img
                        className='w-full rounded-t-lg'
                        src="/assets/windowbar.png">
                    </img>
                    <img
                        className='w-full rounded-b-lg'
                        src="/assets/headshot.png">
                    </img>
                </div>
            </motion.div>
        );
    }
};

export default WindowComponent;
