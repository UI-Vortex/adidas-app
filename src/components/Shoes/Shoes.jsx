import "./shoes.css"
import logoShoes from "../imgHolder/logShoes.png"
import firstShoes from "../imgHolder/firstShoes.png"

import popimage1 from "../imgHolder/pop-image1.png"
import popimage2 from "../imgHolder/pop-image2.png"
import popimage3 from "../imgHolder/pop-image3.png"
import popimage4 from "../imgHolder/pop-image4.png"
import popimage5 from "../imgHolder/pop-image5.png"
import popimage6 from "../imgHolder/pop-image6.png"
import { useState } from "react"

export default function Shoes() {

    const [show, setShow] = useState(false)


    return (
        <div>
            <header>
                <nav className="navbar2">
                    <i onClick={() => setShow(!show)} class="barsof fa-solid fa-bars">{show ? "" : ""}</i>
                    {show && <div className="barsof-child">
                        <h3 className="appbar">AppBar</h3> <br />
                        <hr />
                        <div className="settings">
                            <i class="fa-solid fa-gear"></i>
                            <h3 className="setings">Settings</h3>
                        </div>
                        <hr />
                        <div className="user">
                            <i class="fa-regular fa-user"></i>
                            <h3 className="user-title">Profile</h3>
                        </div>
                        <hr />
                        <div className="bell">
                            <i class="fa-solid fa-bell"></i>
                            <h3 className="bell-title">Notifications</h3>
                        </div>
                        <hr />
                    </div>}
                    <img className="first-image1" src={logoShoes} alt="error" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </nav>

                <div className="carousel">
                    <h1>Men’s Shoes</h1>
                    <div className="carousel-images">
                        <i class="first fa-solid fa-circle-chevron-left"></i>
                        <img className="second-image2" src={firstShoes} alt="error" />
                        <i class="second fa-solid fa-circle-chevron-right"></i>
                    </div>
                    <p className="adidas-desc">Adidas NMD_R1
                        Style and performer</p>
                </div>
                <div className="adi-line"></div>

                <div className="adi-pop">
                    <h1 className="pop-h1">More Popular</h1>
                    <div className="pop-flexer">
                        <div className="pop-texts">
                            <img src={popimage2} alt="error" />
                            <h4>Adidas Yeezy</h4>
                            <i class="fa-solid fa-circle-plus"></i>
                        </div>
                        <div className="pop-texts">
                            <img src={popimage3} alt="error" />
                            <h4>Adidas Yeezy 700</h4>
                            <i class="fa-solid fa-circle-plus"></i>
                        </div>
                    </div>
                    <div className="pop-flexer">
                        <div className="one pop-texts">
                            <img src={popimage4} alt="error" />
                            <h4>Adidas Yeezy</h4>
                            <i class="fa-solid fa-circle-plus"></i>
                        </div>
                        <div className="two pop-texts">
                            <img src={popimage6} alt="error" />
                            <h4>Adidas Yeezy 700</h4>
                            <i class="fa-solid fa-circle-plus"></i>
                        </div>
                    </div>
                </div>

                <button className="seeMore">See More</button>

                <div className="adi-line"></div>

                <h2 className="searched">More Searched</h2>

                <div className="footer">
                    <div className="monarch">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="big fa-solid fa-house"></i>
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>

            </header>
        </div>
    )
}