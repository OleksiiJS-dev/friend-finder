import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <div className="header">
            <div className={s.header}>
            <div className={s.logo}>
                <img alt='#' src='https://themified.com/friend-finder/images/logo.png' />
            </div>
            <div className={s.search}>
                <input></input>
            </div>
            <nav className={s.nav}>
                <a href="adsads">home<button>1123</button></a>
                <a href="adsads">newsfeed<button>1123</button></a>
                <a href="adsads">timeline<button>1123</button></a>
                <a href="adsads">all pages<button>1123</button></a>
                <a href="adsads">contact</a>
            </nav>
            </div>
        </div>
    )
}
export default Header