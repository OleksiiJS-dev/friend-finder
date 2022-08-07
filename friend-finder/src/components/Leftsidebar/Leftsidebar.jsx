import React from "react";
import s from './Leftsidebar.module.css'
import Usertypeone from './../usertypes/usertypes';
import Profilecard from "../usertypes/YourProfileInNewsfeed/Profilecard";
import Imgresponsive from './../usertypes/OnOrOffLineProfilePicture/imgresponsive';
// background: linear-gradient(to bottom, rgba(39,170,225,.8), rgba(28,117,188,.8)), url(../images/covers/1.jpg) no-repeat;
const Leftsidebar = () => {
    return (
        <div className="sidebar">
            <div className={s.sidebar}>
                <div className={s.imagelogoblock}>
                    <Profilecard />
                </div>
                <ol className={s.mainmenu}>
                    <li><a className={s.menuelement}>My Newsfeed</a></li>
                    <li><a className={s.menuelement}>Prople Nearby</a></li>
                    <li><a className={s.menuelement}>Fruends</a></li>
                    <li><a className={s.menuelement}>Messages</a></li>
                    <li><a className={s.menuelement}>Images</a></li>
                    <li><a className={s.menuelement}>Videos</a></li>
                </ol>
                <div className="chatblock">
                    <button className={s.button}>chat online</button>
                    <div className={s.onlineusers}>
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                        <Imgresponsive className={s.omg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Leftsidebar