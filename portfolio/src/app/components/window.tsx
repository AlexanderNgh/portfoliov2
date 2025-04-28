import React from 'react';

type WindowComponentProps = {
  id: string;
};

const WindowComponent: React.FC<WindowComponentProps> = ({ id }) => {
  return (
    <div className='w-[400px] absolute inset-0'>
      <div className='absolute z-30 left-15 top-25'>
        <img
            className='w-full rounded-t-lg'
            src="/assets/windowbar.png">
        </img>
        <img
            className='w-full rounded-b-lg'
            src="/assets/headshot.png">
        </img>
      </div>
    </div>
  );
};

export default WindowComponent;
