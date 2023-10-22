import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./Register/Register"
import Category from "./Category/Category"
import WeatherNews from "./WeatherNews/WeatherNews"
function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/"/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/weathernews" element={<WeatherNews/>}/>
            </Routes>
        </Router>
    )
}

export default App