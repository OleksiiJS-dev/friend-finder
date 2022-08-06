import React from "react";
import s from './Leftsidebar.module.css'
// background: linear-gradient(to bottom, rgba(39,170,225,.8), rgba(28,117,188,.8)), url(../images/covers/1.jpg) no-repeat;
const Leftsidebar = () => {
    return (
        <div className="sidebar">
        <div className={s.sidebar}>
            <div className={s.imagelogoblock}>
                <img alt="adsads" src=''/>
                <a href='ASDads'>XYI XYI</a>
                <button>12313followers</button>
            </div>
            <div className={s.mainmenu}>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </div>
            <buttun>chat online</buttun>
            <div>9rounds</div>
        </div>
        </div>
    )
}
export default Leftsidebar