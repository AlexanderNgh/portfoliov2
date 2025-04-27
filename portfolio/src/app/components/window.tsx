import React from 'react';

type WindowComponentProps = {
  text: string;
};

const WindowComponent: React.FC<WindowComponentProps> = ({ text }) => {
  return (
    <div className='w-[400px]'>
      <img
        className='w-full rounded-t-lg'
        src="/assets/windowbar.png">
      </img>
      <img
        className='w-full rounded-b-lg'
        src="/assets/headshot.png">
      </img>
    </div>
  );
};

export default WindowComponent;
