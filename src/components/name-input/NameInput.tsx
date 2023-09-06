import { FC } from 'react';

interface NameInputProps{

}

const NameInput: FC<NameInputProps> = () => 
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
           <input 
           type="text"
           placeholder='e.g. Jane Appleseed' 
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

export default NameInput;