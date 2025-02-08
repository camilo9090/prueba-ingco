import { useEffect } from "react"
import ViewUsers from "./components/ViewUsers"
import { usersStore } from "./store"



function App() {

  const salida=usersStore((state)=>state.fetchUsers)

  useEffect(()=>{salida()},[])
  return (
    <>
     <ViewUsers/>
    </>
  )
}

export default App
