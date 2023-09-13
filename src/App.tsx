
import { CardSide, FormSide } from "./app-sides/main"
import './App.css';
import React, { useState, useContext, createContext, ReactNode } from "react";
import bgMainDesktop from './assets/bg-main-desktop.png';


interface MyContextValue {
  holderName: string;
  changeHolderName: (newName: string) => void;
  formattedNumber: string;
  changeFormattedNumber: (newNum: string) => void;
  cardMonth: string;
  changeCardMonth: (newMonth: string) => void;
  cardYear: string;
  changeCardYear: (newYear: string) => void;
  cardCvc: string;
  changeCardCvc: (newCvc: string) => void;
  
  nameInputerror: boolean;
  numInputError: boolean;
  dateInputError: boolean;
  cvcInputError: boolean;
  changeNameError: (newName: boolean) => void;
  changeNumError: (newState: boolean) => void;
  changeDateError: (newState: boolean) => void;
  changeCvcError: (newState: boolean) => void;

  formSubmited: boolean;
  changeFormSubmited: (newState: boolean) => void;
  

}

const MyContext = createContext<MyContextValue | undefined>(undefined);

interface MyContextProviderProps
{
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) =>
{
  const [holderName, setHolderName ] = useState<string>('');
  const [cardMonth, setCardMonth ] = useState<string>('');
  const [cardYear, setCardYear ] = useState<string>('');
  const [cardCvc, setCardCvc ] = useState<string>('');

  
  const [nameInputerror, setNameInputError] = useState<boolean>(false);
  const [numInputError, setNumInputError] = useState<boolean>(false);
  const [dateInputError, setDateInputError] = useState<boolean>(false);
  const [cvcInputError, setCvcInputError] = useState<boolean>(false);
  
  const [formSubmited, setFormSubmited] = useState<boolean>(false);

  const [formattedNumber, setFormattedNumber] = useState<string>('');
  
  
  const changeHolderName = (newName: string) =>
 {
    setHolderName(newName);
 }
 const changeFormattedNumber = (newNumber: string) =>
 {
  setFormattedNumber(newNumber);
 }
 const changeCardMonth = (newMonth: string) =>
 {
  setCardMonth(newMonth)
 }
 const changeCardYear = (newYear: string) =>
 {
  setCardYear(newYear)
 }
 const changeCardCvc = (newCvc: string) =>
 {
  setCardCvc(newCvc)
 }

 const changeNameError = (newCvc: boolean) =>
 {
  setNameInputError(newCvc)
 }
 const changeNumError = (newCvc: boolean) =>
 {
  setNumInputError(newCvc)
 }
 const changeDateError= (newCvc: boolean) =>
 {
  setDateInputError(newCvc)
 }
 const changeCvcError= (newCvc: boolean) =>
 {
  setCvcInputError(newCvc)
 }

 const changeFormSubmited = (newVal: boolean) =>
 {
  setFormSubmited(newVal);
 }

 const contextValue: MyContextValue = {
  holderName,
  changeHolderName,
  formattedNumber,
  changeFormattedNumber,
  cardMonth,
  cardYear,
  cardCvc,
  changeCardMonth,
  changeCardYear,
  changeCardCvc,
   
  nameInputerror,
  numInputError,
  dateInputError,
  cvcInputError,
  changeNameError,
  changeNumError,
  changeDateError,
  changeCvcError,

  formSubmited,
  changeFormSubmited
 };

 return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if(!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }else
  {
    return context;
  }
}
 
function App() {
  
  return (
    <>
    <MyContextProvider>

    <div className={`
      w-screen
      min-h-screen
      flex
      xl:flex-row
      flex-col
      items-center
      justify-around
      relative
      font-custom
      font-normal
      bg-commonWhite
      relative
      
      `}>
      <img  
      src={bgMainDesktop} 
      alt="Gradient background"
      className={`
       absolute
       top-0
       xl:left-0
       xl:w-auto
       w-full
       xl:min-h-screen
       h-60
      `} />
      <CardSide />
      <FormSide />
    </div>
       </MyContextProvider>
    </> 
  )
}

export default App
