import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="purple nav-wrapper">
            <a href="/" className="brand-logo"><i className="material-icons">brightness_7</i>Horoscope Journal</a>
                <ul id="nav-mobile" className="right">
                    <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
                    <li><a href="/profile" className="nav-link">Profile</a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="purple nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons">brightness_7</i>Horoscope Journal</a>
                <ul id="nav-mobile" className="right">
                <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;