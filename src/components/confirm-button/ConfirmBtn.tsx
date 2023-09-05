import { FC } from 'react';

interface ConfirmBtnProps{

}

const ConfirmBtn: FC<ConfirmBtnProps> = () => 
{
    
    return (
        <>
        <button 
        type='button' 
        className={`
         rounded-[8px]
         py-4
         px-40
         text-commonWhite
         bg-deepViolet
         capitalize
         cursor-pointer
        `}>
          confirm  
        </button>
        </>
    )

}

export default ConfirmBtn;