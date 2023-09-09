import { FC } from 'react';
import { NameInput, NumberInput, CvcInput, ConfirmBtn, DateInput } from '../../components/main';
import { useMyContext } from '../../App';

interface FormSideProps {

}

const FormSide: FC<FormSideProps> = ({}) => 
{
    const {formSubmited } = useMyContext();
    return (
        <>
        {
        
        formSubmited 
        
        ? 
            
            <div>
                formSubmited
           </div>
        
        : 
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


        
        }
        
        
        </>
    )

}

export default FormSide;