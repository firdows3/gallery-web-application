//Header component for a gallery-like web application

import { Link } from "react-router-dom"
import "../Styles/Header.css"
import { useState } from "react"

export default function Header () {

    const [active, setActive] = useState(0)

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
        </div>
        </>
    )
}