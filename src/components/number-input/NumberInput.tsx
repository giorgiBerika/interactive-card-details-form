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
         h-28
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
          { false && <span className={`
            text-errorRed
            text-xs
            leading-normal
            font-medium
           `}>Wrong format, numbers only</span> }
        </div>
        </>
    )

}

export default NumberInput;