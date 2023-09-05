import { FC } from 'react';

interface CvcInputProps{

}

const CvcInput: FC<CvcInputProps> = () => 
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
           `}>cvc</h2>
           <input 
           type="text"
           placeholder='e.g.123' 
           className={`
            input-style
            w-48
            py-3
            pl-4
           `} /> 
        </div>
        </>
    )

}

export default CvcInput;