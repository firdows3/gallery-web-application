//Header component for a gallery-like web application

import { Link } from "react-router-dom"
import "../Styles/Header.css"
import instagram from "../Images/instagram.png"
import tiktok from "../Images/tiktok.png"
import facebook from "../Images/facebook.png"
import pinterest from "../Images/pinterest.png"
import search from "../Images/search.png"
import { useState } from "react"

export default function Header () {

    const [active, setActive] = useState(-1)

    // an array for holding the header components
    const headerElements = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "favorites",
            name: "Favorites"
        },
        {
            path: "blog",
            name: "Blogs"
        }
    ]

    return (
        <>
        <div className="header-container">
            <div className="header-logo">Snapster</div>
            <div className="header-navbar">
                <div className="header-navbar-left header-logo">S</div>
                <div className="header-navbar-center">
                {
                    headerElements.map((item, index) => {
                        return (
                            <>
                            <Link className={active === index ? "each-header-link active" : "each-header-link"} to={`${item.path}`} onClick={() => setActive(index)}>{item.name}</Link>
                            </>
                        )
                    })
                }
                </div>
                <div className="header-navbar-right"> 
                    <img src={instagram} className="header-icon" />
                    <img src={tiktok} className="header-icon" />
                    <img src={facebook} className="header-icon" />
                    <img src={pinterest} className="header-icon" />
                </div>
            </div>
        </div>
        </>
    )
}