import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingUp from "./components/SingUp/SingUp"
import SingIn from "./components/SingIn/SingIn"
import Shoes from "./components/Shoes/Shoes"

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SingIn />} />
                    <Route path="/SingUp" element={<SingUp />} />
                    <Route path="/Shoes" element={<Shoes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}