import React from "react";
import s from './Main.module.css'
import Mainpostcreation from "../usertypes/MainPostCreation/Mainpostcreation";

const Main = () => {
    return (       <>
            <div className="createpost">
            <Mainpostcreation />
            </div>
            <div className="postcontainer">
                <div className={s.postcontainer}>

                    <img src="#" alt="#" />
                    {/* image */}
                    <div className={s.postcontent}>
                        <div className={s.post}>
                            <div className={s.user}>
                                {/* AVATAR */}<img src="" alt="" />
                                <div>name</div>

                                <div>published</div>
                                <button>Like</button>
                                <button>Dislike</button>
                            </div>

                        </div>
                        <div className={s.commentaryy}>Comment</div>
                    </div>
                </div>

            </div>
</>
    );
}
export default Main;