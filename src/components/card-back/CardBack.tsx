import { FC, useRef } from 'react';
import backBackground from '../../assets/bg-card-back.png';
import { useMyContext } from '../../App';
interface CardBackProps{

}

const CardBack: FC<CardBackProps> = () => 
{
    const {cardCvc } = useMyContext();
    const cvcHolder = useRef<string>('000');
    return (
        <>
        <div className={`
         max-w-md
         w-full
         xl:h-64
         h-40
         
         bg-cover
         bg-center
         rounded-[10px]
         translate-x-[96px]
         
         xl:translate-y-[0%]
         translate-y-[-100%]
         cursor-pointer
         relative

         
        `}
        style={{
            backgroundImage: `url(${backBackground})`
        }}
        >
            <span className={`
             absolute
             xl:top-[114px]
             xl:left-[358px]
             top-[70px]
             right-[30px]
             text-sm
             font-medium
             leading-normal
             tracking-wider
             text-commonWhite
             text-right
             
            `}>{cardCvc || cvcHolder.current}</span>
        </div>
        </>
    )

}

export default CardBack;