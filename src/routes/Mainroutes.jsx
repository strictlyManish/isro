import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Engangements from "../pages/Engangements"
import Programmes from "../pages/Programmes"
import Resources from "../pages/Resources"
import Services from "../pages/Services"
import Activities from "../pages/Activities"
import About from "../pages/About"
import NotFound from "../pages/NotFound"

function Mainroutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/programmes" element={<Programmes/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/engangements" element={<Engangements/>}/>
          <Route path="*"  element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes