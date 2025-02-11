
import ViewUsers from "./components/ViewUsers"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from "./components/CreateUser"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"




function App() {

  
  return (
    <>

      
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/CreateUSer" element={<CreateUser />} />


        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </>
  )
}

export default App
