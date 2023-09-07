
import { CardSide, FormSide } from "./app-sides/main"
import './App.css';
import React, { useState, useContext, createContext, ReactNode } from "react";
import bgMainDesktop from './assets/bg-main-desktop.png';

import bgMainMobile from './assets/bg-main-mobile.png';

interface MyContextValue {
  holderName: string;
  changeHolderName: (newName: string) => void;
  formattedNumber: string;
  changeFormattedNumber: (newNum: string) => void;

}

const MyContext = createContext<MyContextValue | undefined>(undefined);

interface MyContextProviderProps
{
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) =>
{
  const [holderName, setHolderName ] = useState<string>('');
  const [formattedNumber, setFormattedNumber] = useState<string>('');
  
  
  const changeHolderName = (newName: string) =>
 {
    setHolderName(newName);
 }
 const changeFormattedNumber = (newNumber: string) =>
 {
  setFormattedNumber(newNumber);
 }

 const contextValue: MyContextValue = {
  holderName,
  changeHolderName,
  formattedNumber,
  changeFormattedNumber
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
       left-0
       min-h-screen
      `} />
      <CardSide />
      <FormSide />
    </div>
       </MyContextProvider>
    </> 
  )
}

export default App
