
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
      
    `}>
      <CardSide />
      <FormSide />

    </div>
    </> 
  )
}

export default App
