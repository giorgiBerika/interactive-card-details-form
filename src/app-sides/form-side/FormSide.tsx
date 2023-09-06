import { FC } from 'react';
import { NameInput, NumberInput, CvcInput, ConfirmBtn, DateInput } from '../../components/main';

interface FormSideProps {
 setHolderName: (newName: string) => void;
}

const FormSide: FC<FormSideProps> = ({setHolderName}) => 
{
    return (
        <>
        <form className={`
         flex
         flex-col
         
        `}>
            <NameInput 
             setHolderName={setHolderName}
            />
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