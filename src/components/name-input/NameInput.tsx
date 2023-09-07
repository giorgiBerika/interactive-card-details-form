import { FC, ChangeEvent } from 'react';
import { useMyContext } from '../../App';
interface NameInputProps{
 
}

const NameInput: FC<NameInputProps> = ({}) => 
{
    const { changeHolderName } = useMyContext();
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    {
        // 
        const nameInput = e.target;
        changeHolderName(nameInput.value)
        
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
           <input 
           type="text"
           placeholder='e.g. Jane Appleseed' 
           className={`
            input-style
            max-w-sm
            w-96
            py-3
            pl-4
           `}
            onChange={(e) => onChangeHandler(e)} 
           /> 
        </div>
        </>
    )

}

export default NameInput;