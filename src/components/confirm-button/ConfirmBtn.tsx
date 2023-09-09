import { FC } from 'react';
import { useMyContext } from '../../App';

interface ConfirmBtnProps{

}

const ConfirmBtn: FC<ConfirmBtnProps> = () => 
{
   const {changeFormSubmited,
     cardMonth, cardYear,
     cardCvc, numInputError,
     holderName, formattedNumber,
     changeDateError, changeCvcError,
     changeNumError, changeNameError
    } = useMyContext(); 
   
   const onClickHandler = () => 
   {
     if(!cardMonth || !cardYear || !cardCvc || numInputError || 
        !holderName || !formattedNumber)
     {
       if(!cardMonth || !cardYear)
       {
        changeDateError(true)
       }
       if(!cardCvc)
       {
        changeCvcError(true)
       }
       if(!formattedNumber)
       {
        changeNumError(true)
       }
       if(!holderName)
       {
        changeNameError(true)
       }
       changeFormSubmited(false)
     }else{
       
       changeFormSubmited(true);
     }
   }
   
   return (
        <>
        <button 
        onClick={() => onClickHandler()}
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