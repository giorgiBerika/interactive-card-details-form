import { FC } from 'react';
import { CardBack, CardFront } from '../../components/main';

interface CardSideProps {

}

const CardSide: FC<CardSideProps> = ({}) => 
{
    return (
        <>
        <div className={`
         flex
         flex-col
         mt-8
         xl:mt-0
         xl:gap-9
         sm:translate-x-[0]
         translate-x-[-15%]
        `}>
            <CardFront />
            <CardBack />
        </div>
        </>
    )

}

export default CardSide;