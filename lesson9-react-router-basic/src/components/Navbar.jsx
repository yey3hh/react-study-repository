import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        // components/Navbar.jsx
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>My App</h2>
            </div>

            <div className="navbar-links">
                {/* link 페이지 이동 시 새로 고침 없이 이동 */}
                <Link to="/" className="nav-link">홈</Link>
                <Link to="/about" className="nav-link">소개</Link>
                <Link to="/contact" className="nav-link">연락처</Link>
            </div>
        </nav>
    );
};

export default Navbar;
