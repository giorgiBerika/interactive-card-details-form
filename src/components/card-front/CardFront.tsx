import { FC } from 'react';
import ovalsImg from '../../assets/card-logo.svg';
import frontBackground from '../../assets/bg-card-front.png';
import { useRef } from 'react';
import { useMyContext } from '../../App';
interface CardFrontProps{
//  holderName: string;
}


const changeNum = (state: string , num: string) =>
{
    if(state)
    {
        for(let i: number = 0; i < state.length; i++)
        {
            num.split('')[i] = state[i];
        }
    }
}

const CardFront: FC<CardFrontProps> = ({}) => 
{
    const { holderName, formattedNumber } = useMyContext();
    let numberArr = formattedNumber.split(' ');
    let cardholderName = useRef<string>('jane appleseed');
    
    let firstFour = useRef(['0','0','0','0']);
    let secondFour = useRef('0000');
    let thirdFour = useRef('0000');
    let fourthFour = useRef('0000');
    if(formattedNumber)
    {
        if(numberArr[0]) {
            for(let i = 0; i < numberArr[0].length; i++)
            {
                firstFour.current[i] = numberArr[0][i];
            }
        }
    }
    // console.log(formattedNumber.split(' ')[0][0]);
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
               <span>{firstFour.current}</span>
               <span>{secondFour.current}</span>
               <span>{thirdFour.current}</span>
               <span>{fourthFour.current}</span> 
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
                <h2>{holderName ||  cardholderName.current}</h2>
                <span>00/00</span>
             </div>
        </div>
        </>
    )

}

export default CardFront;