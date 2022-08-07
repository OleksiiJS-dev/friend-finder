import React from "react";
import s from './usertypes.module.css'

const Usertypeone = () => {
    return (
        <>
        <div className="userfirst">
            <div className={s.user}>
                <img className={s.avatarimage} src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-2.jpg" alt="#" />
                <div className={s.name}>
                    <a href="3" className="name">
                        name
                    </a>
                    <a href='3' className='addrequest'>add friend</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Usertypeone