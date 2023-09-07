import { FC } from 'react';
import { NameInput, NumberInput, CvcInput, ConfirmBtn, DateInput } from '../../components/main';

interface FormSideProps {

}

const FormSide: FC<FormSideProps> = ({}) => 
{
    return (
        <>
        <form className={`
         flex
         flex-col
         
        `}>
            <NameInput />
            <NumberInput />
            <div className={`
             flex
             items-center
             gap-x-5
            `}>
                <DateInput />
                <CvcInput />
            </div>
            <ConfirmBtn />
        </form>
        </>
    )

}

export default FormSide;