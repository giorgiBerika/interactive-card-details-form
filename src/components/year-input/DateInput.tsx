import { ChangeEvent, FC } from 'react';
import { useMyContext } from '../../App';

interface DateInputProps{

}

const DateInput: FC<DateInputProps> = () => 
{
    const { changeCardYear, changeCardMonth, dateInputError, changeDateError, formSubmited} = useMyContext();
    
    const monthChangeHandler = (e: ChangeEvent<HTMLInputElement>) => 
    {
        
        const inputVal = e.target.value;
        changeCardMonth(inputVal);
        changeDateError(false);
    }
    
    const yearChangeHandler = (e: ChangeEvent<HTMLInputElement>) => 
    {   
        
        const inputVald = e.target.value;
        changeCardYear(inputVald);
        changeDateError(false);
    }

    return (
        <>
        <div className={`
         flex
         flex-col
         gap-y-2.5
            h-28
         `}>
           <h2 className={`
            input-title
           `}>cardholder name</h2>
           <div>

           <input 
           onChange={(e) => monthChangeHandler(e)}
           type="text"
           placeholder='mm' 
           className={`
            input-style
            w-20
            py-3
            pl-4
            pr-29
            mr-2.5
            uppercase
            ${dateInputError ? 'border-errorRed hover:border-errorRed' : ''}
            `} /> 
            <input
           onChange={(e) => yearChangeHandler(e)} 
           type="text"
           placeholder='yy' 
           className={`
            input-style
            w-20
            py-3
            pl-4
            pr-29
            uppercase
            ${dateInputError ? 'border-errorRed hover:border-errorRed' : ''}
            `} /> 
            </div>
            {dateInputError && <span className={`
             text-errorRed
             text-xs
             leading-normal
             font-medium
            `}>
                Can't be blank
            </span>}
        </div>
        </>
    )

}

export default DateInput;