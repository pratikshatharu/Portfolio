import React from 'react'
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>hello i am a developer</h1>
                <Typed
                    className="typed-text"
                    strings={["Web design, Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/contact" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
