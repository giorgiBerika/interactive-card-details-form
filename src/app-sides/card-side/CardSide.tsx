import { FC } from 'react';
import { CardBack, CardFront } from '../../components/main';

interface CardSideProps {
 holderName: string;
}

const CardSide: FC<CardSideProps> = ({holderName}) => 
{
    return (
        <>
        <div className={`
         flex
         flex-col
         gap-9
        `}>
            <CardFront 
             holderName={holderName} 
            />
            <CardBack />
        </div>
        </>
    )

}

export default CardSide;