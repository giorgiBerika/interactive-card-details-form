import { FC } from 'react';
import ovalsSrc from '../../assets/ovals.png';

interface CardFrontProps{

}

const CardFront: FC<CardFrontProps> = () => 
{
    return (
        <>
        <div className={`
            rounded-[10px]
            max-w-md
            w-full
            bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700
        `}>
            <img src={ovalsSrc}  alt='Ovals figures'/>
             Card Front
             <div className={`
              flex
              items-center
              gap-3
             `}>
               <span>0000</span>
               <span>0000</span>
               <span>0000</span>
               <span>0000</span> 
             </div>
        </div>
        </>
    )

}

export default CardFront;