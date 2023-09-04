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
        </div>
        </>
    )

}

export default CardFront;