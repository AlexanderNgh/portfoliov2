import React from 'react';

type WindowComponentProps = {
    id: string;
    flag: boolean;
    left:number;
    top:number;
};

const WindowComponent2: React.FC<WindowComponentProps> = ({ id, flag, left, top }) => {
    const windowStyle = {
        left: `${left}px`,
        top: `${top}px`,
      };

    if(flag){
        return (
            <div className='w-[400px] absolute inset-0'>
                <div className={`absolute h-full w-full z-30`} style={windowStyle}>
                    <img
                        className='w-full rounded-t-lg'
                        src="/assets/image.png">
                    </img>
                    <div className='bg-gray-100 h-[300px]'>

                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className='w-[400px] absolute inset-0'>
                <div className={`absolute h-full w-full z-30`} style={windowStyle}>
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
    }
};

export default WindowComponent2;
