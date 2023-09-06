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
            h-28
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
            pr-29
            mr-2.5
            uppercase
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
            {false && <span className={`
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