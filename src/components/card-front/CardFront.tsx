import { FC } from 'react';
import ovalsImg from '../../assets/card-logo.svg';
import frontBackground from '../../assets/bg-card-front.png';
import { useRef } from 'react';
import { useMyContext } from '../../App';

interface CardFrontProps{

}

const fillString = (currentInput: string) =>
{
    
    let fullString = '';
    if(currentInput.length < 4 && currentInput != '')
    {
        fullString = currentInput;
        let zeroNum = ( 4 - (currentInput.length) );
        for(let i = 0; i < zeroNum; i++)
        {
            fullString += '0'; 
        }
        
    }else
    {
        fullString = currentInput;
    }
    return fullString;
}


const CardFront: FC<CardFrontProps> = ({}) => 
{
    const { holderName, formattedNumber, cardMonth,cardYear } = useMyContext();
    
    let cardholderName = useRef<string>('jane appleseed');
    let defaultDate = useRef<string>('00');
    let defaultNum = useRef<string>('0000');
    let numberArr = formattedNumber.split(' ');
    

    return (
        <>
            {/* max-w-md  */}
        <div className={`
            rounded-[10px]
            xl:max-w-[410px]
            max-w-[285px]
            xl:h-auto
            h-40
            w-full
            pt-7
            pr-8
            pb-6
            pl-8
            cursor-pointer
            bg-cover
            bg-center
            z-50
            xl:translate-y-[0%]
            translate-y-[55%]
        `} 
         style={{
            backgroundImage: `url(${frontBackground})`,
            // width: '410px',

            }}
        >
            <img 
            src={ovalsImg}  
            alt='Ovals figures'
            className='
             xl:w-auto
             xl:h-auto
             h-8
             w-14
            ' />
             <div className={`
              flex
              items-center
              gap-3
              xl:text-28
              text-lg
              font-medium
              tracking-wider
              leading-normal
              text-commonWhite
              xl:mt-[64px]
              mt-[20px]
             ` }>
               <span>{(numberArr[0]) ? fillString(numberArr[0]) : defaultNum.current}</span>
               <span>{(numberArr[1]) ? fillString(numberArr[1]) : defaultNum.current}</span>
               <span>{(numberArr[2]) ? fillString(numberArr[2]) : defaultNum.current}</span>
               <span>{(numberArr[3]) ? fillString(numberArr[3]) : defaultNum.current}</span> 
             </div>
             <div className={`
              flex
              items-center
              justify-between
              text-commonWhite
              xl:text-sm
              text-xs
              leading-normal
              font-normal
              tracking-wide
              uppercase
              mt-[22.5px]
             `}>
                <h2>{holderName ||  cardholderName.current}</h2>
                <div>
                    <span>{cardMonth || defaultDate.current}</span>
                    
                    <span>/{cardYear || defaultDate.current }</span>
                </div>
               
             </div>
        </div>
        </>
    )

}

export default CardFront;