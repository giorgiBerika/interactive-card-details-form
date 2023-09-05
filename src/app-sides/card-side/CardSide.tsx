import { FC } from 'react';
import { CardBack, CardFront } from '../../components/main';

interface CardSideProps {

}

const CardSide: FC<CardSideProps> = () => 
{
    return (
        <>
        <div className={`
         flex
         flex-col
         gap-9
        `}>
            <CardFront />
            <CardBack />
        </div>
        </>
    )

}

export default CardSide;