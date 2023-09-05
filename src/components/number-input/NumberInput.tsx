import { FC } from 'react';

interface NumberInputProps{

}

const NumberInput: FC<NumberInputProps> = () => 
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
           `}>card number</h2>
           <input 
           type="text"
           placeholder='e.g. 1234 5678 9123 0000' 
           className={`
            input-style
            max-w-sm
            w-96
            py-3
            pl-4
           `} /> 
        </div>
        </>
    )

}

export default NumberInput;