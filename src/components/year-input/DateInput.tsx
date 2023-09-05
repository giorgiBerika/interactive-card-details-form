import { FC } from 'react';

interface DateInputProps{

}

const DateInput: FC<DateInputProps> = () => 
{
    return (
        <>
        <div className={`
         flex
         flex-col
         gap-y-2.5
        `}>
           <h2 className={`
            input-title
           `}>cardholder name</h2>
           <div>

           <input 
           type="text"
           placeholder='mm' 
           className={`
            input-style
            w-20
            py-3
            pl-4
            pr-9
            uppercase
            mr-2.5
            `} /> 
            <input 
           type="text"
           placeholder='yy' 
           className={`
            input-style
            w-20
            py-3
            pl-4
            pr-29
            uppercase
            `} /> 
            </div>
        </div>
        </>
    )

}

export default DateInput;