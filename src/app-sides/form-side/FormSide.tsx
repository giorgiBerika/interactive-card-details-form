import { FC } from 'react';
import { NameInput, NumberInput, CvcInput, ConfirmBtn, DateInput } from '../../components/main';
import { useMyContext } from '../../App';
import completeIcon from '../../assets/icon-complete.svg';
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
            
            <div className='
             flex
             flex-col
             items-center
            '>
                <img src={completeIcon} alt='Complete sign'/>
                <h2 className='
                 text-3xl
                 font-normal
                 font-medium
                 leading-normal
                 tracking-wide
                 uppercase
                 text-deepViolet
                 mt-[35px]
                 mb-[16px]
                '>thank you!</h2>
                <span className='
                 text-lg
                 font-medium
                 leading-normal
                 text-commonGrey
                 mb-[45px]
                '>We’ve added your card details</span>
                <button 
                type='button' 
                className={`
                    rounded-[8px]
                    py-4
                    xl:px-40
                    px-10
                    text-commonWhite
                    bg-deepViolet
                    capitalize
                    cursor-pointer
                    `}>
                    continue
                </button>
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