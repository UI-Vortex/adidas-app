import { Link, useNavigate } from "react-router-dom"
import AdidasLogo from "../imgHolder/AdidasLogo.png"
import secondSide from "../imgHolder/second-side.png"
import "./singup.css"
import { useState } from "react"

export default function SingUp() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (first === "" && second === "") {
            alert("You have to the fill the field")
        } else {
            window.localStorage.setItem('Email:', JSON.stringify(first))
            window.localStorage.setItem('Password:',second)
            navigate("/Shoes")
        }
    }

    return (
        <div>
            <header>
                <img src={AdidasLogo} alt="error" />
                <div className="dominator1">
                    <nav className="navbar1">
                        <Link to="/"><h3>SignIn</h3></Link>
                        <img src={secondSide} alt="error" />
                        <Link to="/SingUp"><h3>SignUp</h3></Link>
                    </nav>
                    <hr />
                    <input onChange={(e) => setFirst(e.target.value)} type="text" className="first-one" placeholder="Email" />
                    <input onChange={(e) => setSecond(e.target.value)} type="text" className="second-one" placeholder="Password" />
                    <button onClick={handleSubmit} className="Submit-but">Submit</button>
                </div>
            </header>
        </div>
    )
}