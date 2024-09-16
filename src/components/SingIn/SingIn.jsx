import { Link, useNavigate } from "react-router-dom"
import AdidasLogo from "../imgHolder/AdidasLogo.png"
import Google from "../imgHolder/Google.png"
import SingInPicture from "../imgHolder/SingInPicture.png"
import "./singin.css"
import { useState } from "react"

export default function SingIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    let storedEmail = JSON.parse(localStorage.getItem("Email"));
    let storedPassword = localStorage.getItem("Password");

    const handleLogin = () => {

        if (email === storedEmail && password === storedPassword) {
            navigate("/Shoes")
        } else {
            alert("Email or password is wrong")
        }
    }

    return (
        <div>
            <header>
                <div className="dominator">
                    <img src={AdidasLogo} alt="error" />
                    <nav className="head_nav">
                        <div className="texts-adidas">
                            <Link to="/"><h3>SignIn</h3></Link>
                            <img src={SingInPicture} alt="error" />
                            <Link to="/SingUp"><h3 className="Link-1" >SignUp</h3></Link>
                        </div>
                        <hr />
                        <input onChange={(e) => setEmail(e.target.value)} className="input-1" type="text" placeholder="Email" />
                        <input onChange={(e) => setPassword(e.target.value)} className="input-2" type="password" placeholder="Password" />

                        <button onClick={handleLogin} className="adidas_button">Login</button>

                        <p>Forgot your password?</p>

                        <button className="Enter-google">
                            <img src={Google} alt="error" />
                            Login with Google
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    )
}