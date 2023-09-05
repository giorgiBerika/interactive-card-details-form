import { FC } from 'react';
import ovalsImg from '../../assets/card-logo.svg';
import frontBackground from '../../assets/bg-card-front.png';
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
            pt-7
            pr-8
            pb-6
            pl-8
            cursor-pointer
            bg-cover
            bg-center
            z-50
        `} 
         style={{
            backgroundImage: `url(${frontBackground})`,
            }}
        >
            <img src={ovalsImg}  alt='Ovals figures'/>
             <div className={`
              flex
              items-center
              gap-3
              text-28
              font-medium
              tracking-wider
              leading-normal
              text-commonWhite
              mt-[64px]
             ` }>
               <span>0000</span>
               <span>0000</span>
               <span>0000</span>
               <span>0000</span> 
             </div>
             <div className={`
              flex
              items-center
              justify-between
              text-commonWhite
              text-sm
              leading-normal
              font-normal
              tracking-wide
              uppercase
              mt-[22.5px]
             `}>
                <h2>jane appleseed</h2>
                <span>00/00</span>
             </div>
        </div>
        </>
    )

}

export default CardFront;