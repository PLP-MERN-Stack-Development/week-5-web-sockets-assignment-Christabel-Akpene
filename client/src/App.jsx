import { Route, Routes } from "react-router"
import { Login } from "./components/Login"
import { Layout } from "./components/Layout"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route>
        <Route path="/chat" element={<Layout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
