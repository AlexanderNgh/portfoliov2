'use client';
import WindowComponent from "./components/window";
import WindowComponent2 from "./components/window2";
import WindowComponent3 from "./components/window3";
import Taskbar from "./components/taskbar";
import { Press_Start_2P } from 'next/font/google';
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

// this is for the font, temporary until I find a better one
const logo_font = Press_Start_2P({
  subsets:['latin'],
  weight: ['400'],
});

export default function Home() {
  // text for one of the windows
  const bioText = `Hello! My name is Alex. I recently graduated with a degree in computer science. Two of my main interests in school were machine learning and web development. This portfolio contains some of my favorite projects :D. Currently, I work as an analyst using mainly Python and SQL. But, I am exploring my freelance career, and I am looking to work with small businesses to help them make websites.`;

  // state hook to manage which windows are open
  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({});

  // openwindow
  // given a string 
  // call the setOpenWindows, which should update the state
  const openWindow = (id: string) => {
    setOpenWindows(function (previousValue: Record<string, boolean>) {
      // Toggle the window state by checking if it's already open
      return {
        ...previousValue, // Spread the previous state
        [id]: previousValue[id] ? false : true, // Toggle the specific window
      };
    });
  };

  const multipleWindows = (ids: string[]) => {
    setOpenWindows(prev => {
      const updatedState = { ...prev };
      ids.forEach(id => {
        updatedState[id] = !updatedState[id]; // Toggle based on latest state
      });
      return updatedState;
    });
  };
  
  const closeWindow = (name: string) => {
    setOpenWindows(prev => ({ ...prev, [name]: false }));
  };

  

  return (
    <div className="min-h-screen w-full flex flex-col pb-8 bg-image">
      <div className="flex justify-between bg-gray-200 px-4">
        <div className="space-x-2">
          <span>Alexander Pham</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>

        <div>
          <span>Sun Apr 27 2:40 PM </span>
        </div>
      </div>

      <div className="relative flex-grow w-full p-8">
        
        <div className={`absolute inset-0 flex justify-center items-center ${logo_font.className}`}>
          <div className="hidden lg:w-full lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div>
              welcome to my portfolio
            </div>
            <div>
              Alexander Pham
            </div>
          </div>
        </div>

        {Object.values(openWindows).some(isOpen => isOpen) && (
          <div className="fixed inset-0 bg-black opacity-20 z-10"></div>
        )}

        {/* this is the main div we will have stuff in */}
        <div className="relative z-10 flex flex-col lg:justify-between lg:flex-row">
          <div className="grid grid-cols-2 space-x-8 space-y-8 pb-4">
            <div onClick={() => multipleWindows(['window1', 'window2', 'window3'])}>
              <img src="/assets/icons/folder.png" className="h-16"></img> About Me
            </div>
            <div>
              <img src="/assets/icons/folder.png" className="h-16"></img> Machine Learning
            </div>
            <div>
              <img src="/assets/icons/folder.png" className="h-16"></img> Research
            </div>
            <div>
              <img src="/assets/icons/folder.png" className="h-16"></img> Work Experience
            </div>
            <div>
              <img src="/assets/icons/folder.png" className="h-16"></img> Web Dev
            </div>

            <div className="col-span-2 row-span-2 pb-4">
              <div className="w-[300px] h-[300px] bg-amber-300 rounded-xl shadow p-4">
                <div className="font-bold pb-2">TO DO LIST</div>
                <div className="line-through pb-2">* graduate college with a computer science degree</div>
                <div className="line-through pb-2">* get a research grant and study how to use machine learning to help doctors</div>
                <div>* get my first client as a freelance web developer</div>
              </div>
            </div>

            {/* <button onClick={() => openWindow('window1')}>CLICK ME</button>

            <button onClick={() => openWindow('window2')}>CLICK ME2</button> */}
          </div>
          <div className="grid grid-cols-2 h-fit space-x-8 space-y-8">
            <div>
              <img src="/assets/icons/documents.png" className="h-16"></img> Resume
            </div>
            <div>
              <img src="/assets/icons/documents.png" className="h-16"></img> Contact Info
            </div>
            <div>
              <img src="/assets/icons/bin.png" className="h-16"></img> Trash
            </div>
          </div>
        </div>

        {/* Overlay Windows */}

        <AnimatePresence>
          {openWindows.window1 && (
            <WindowComponent id="window1" flag={true} left={110} top={200} text={bioText}>
            </WindowComponent>
          )}
        </AnimatePresence>
        {openWindows.window2 && (
          <WindowComponent id="window2" flag={false} left={1000} top={10} text=''>
          </WindowComponent>
        )}

        {/* {openWindows.window3 && (
          <WindowComponent2 id="window3" flag={true} left={750} top={10}>
          </WindowComponent2>
        )} */}
      </div>
      
      <div className="bottom-0 px-64">
        <Taskbar text=""></Taskbar>
      </div>
    </div>
  );
}
