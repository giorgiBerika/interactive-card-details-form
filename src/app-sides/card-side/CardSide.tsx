import { FC } from 'react';
import { CardBack, CardFront } from '../../components/main';

interface CardSideProps {

}

const CardSide: FC<CardSideProps> = () => 
{
    return (
        <>
        <div>
            <CardFront />
            <CardBack />
        </div>
        </>
    )

}

export default CardSide;