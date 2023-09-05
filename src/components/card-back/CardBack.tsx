import { FC } from 'react';
import backBackground from '../../assets/bg-card-back.png';
interface CardBackProps{

}

const CardBack: FC<CardBackProps> = () => 
{
    return (
        <>
        <div className={`
         max-w-md
         w-full
         h-64
         
         bg-cover
         bg-center
         rounded-[10px]
         translate-x-[96px]
         cursor-pointer
         relative

         
        `}
        style={{
            backgroundImage: `url(${backBackground})`
        }}>
            <span className={`
             absolute
             top-[114px]
             left-[358px]
             text-sm
             font-medium
             leading-normal
             tracking-wider
             text-commonWhite
             
            `}>000</span>
        </div>
        </>
    )

}

export default CardBack;