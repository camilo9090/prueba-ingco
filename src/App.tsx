
import ViewUsers from "./components/ViewUsers"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from "./components/CreateUser"




function App() {

  
  return (
    <>

      
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/CreateUSer" element={<CreateUser />} />


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
