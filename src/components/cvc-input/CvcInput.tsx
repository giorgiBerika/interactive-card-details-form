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
           `}>cardholder name</h2>
           <input 
           type="text"
           placeholder='cvc' 
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