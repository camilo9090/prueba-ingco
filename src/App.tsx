import { useEffect } from "react"
import ViewUsers from "./components/ViewUsers"
import { usersStore } from "./store"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from "./components/CreateUser"




function App() {

  const salida = usersStore((state) => state.fetchUsers)

  useEffect(() => { salida() }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/CreateUSer" element={<CreateUser/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
