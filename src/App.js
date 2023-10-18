import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./Register/Register"
function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/"/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default App