
import { CardSide, FormSide } from "./app-sides/main"

function App() {

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
      bg-red-700

      
    `}>
      
      <CardSide />
      <FormSide />

    </div>
    </> 
  )
}

export default App
