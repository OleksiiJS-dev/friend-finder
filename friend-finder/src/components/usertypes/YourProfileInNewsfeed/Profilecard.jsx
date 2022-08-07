import React from "react";
import s from './Profilecard.module.css'

const Profilecard = () => {
    return ( <div>
    
    <div className={s.profilecard}>
            <div >
                <img className={s.profilephoto} src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-2.jpg" alt="#" />
            </div>
            <div>
                <a href="" className={s.name}>${}
                </a>
                <div className={s.countoffollowers}>
                    <a>`${}` followers</a>
                </div>
            </div>
        </div>
   </div>)
}
export default Profilecard