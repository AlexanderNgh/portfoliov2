import React from 'react';

type taskbarprops = {
  text: string;
};

const Taskbar: React.FC<taskbarprops> = ({ text }) => {
  return (
    <div className='w-full h-20 bg-gray-200 rounded-3xl shadow p-4 px-16 flex justify-evenly'>
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
