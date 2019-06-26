import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>TODO LIST</h1>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
            </div>
        )
    }
}

export default Header;