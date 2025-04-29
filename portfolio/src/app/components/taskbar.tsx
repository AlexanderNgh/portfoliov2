import React from 'react';

type taskbarprops = {
  text: string;
};

const Taskbar: React.FC<taskbarprops> = ({ text }) => {
  return (
    <div className='hidden lg:w-full lg:h-20 lg:bg-gray-200 lg:rounded-3xl lg:shadow lg:p-4 lg:px-16 lg:flex lg:justify-evenly'>
        <img src="/assets/icons/facetime.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/messages.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/maps.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/music.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/notes.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/numbers.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/photos.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/excel.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/store.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/calendar.png" 
            className='h-full hover-grow-up'></img>
        <img src="/assets/icons/contacts.png" 
            className='h-full hover-grow-up'></img>
    </div>
  );
};

export default Taskbar;
