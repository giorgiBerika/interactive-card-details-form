
import { CardSide, FormSide } from "./app-sides/main"
import './App.css';
import { useState } from "react";
import bgMainDesktop from './assets/bg-main-desktop.png';

import bgMainMobile from './assets/bg-main-mobile.png';

function App() {
  const [holderName, setHolderName ] = useState<string>('');
  return (
    <>
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
      <CardSide 
       holderName={holderName}
      />
      <FormSide 
       setHolderName={setHolderName}
      />
    </div>
    </> 
  )
}

export default App
