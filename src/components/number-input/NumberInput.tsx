import { FC, ChangeEvent } from 'react';

import { useMyContext } from '../../App';
interface NumberInputProps{

}

const NumberInput: FC<NumberInputProps> = () => 
{
      const {formattedNumber, changeFormattedNumber} = useMyContext();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      
      
        const inputValue = event.target.value.replace(/\s/g, ''); // Remove existing spaces
        const formatted = inputValue.replace(/(.{4})/g, '$1 '); // Add a space after every four characters
        
        changeFormattedNumber(formatted);
    };
  
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
           onChange={handleInputChange} 
           type="text"
           placeholder='e.g. 1234 5678 9123 0000' 
           className={`
            input-style
            max-w-sm
            w-96
            py-3
            pl-4
           `} 
            value={formattedNumber}
           />
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