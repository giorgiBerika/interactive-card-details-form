import { FC, ChangeEvent, useState } from 'react';

import { useMyContext } from '../../App';
interface NumberInputProps{

}

const NumberInput: FC<NumberInputProps> = () => 
{
      const {formattedNumber, changeFormattedNumber, numInputError, changeNumError} = useMyContext();
      
      const [errorState, setErrorState] = useState<boolean>(false);

      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      
      
        const inputValue = event.target.value.replace(/\s/g, ''); // Remove existing spaces
        const formatted = inputValue.replace(/(.{4})/g, '$1 '); // Add a space after every four characters
        
        if (/^[0-9\s]*$/.test(formatted)) {
            setErrorState(false); // Update the state if it contains only numbers
            }else
            {
                setErrorState(true)
            }

        changeFormattedNumber(formatted);
        changeNumError(false);
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
            ${errorState || numInputError ? 'border-errorRed hover:border-errorRed' : ''}
           `} 
            value={formattedNumber}
           />
          { errorState && <span className={`
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