import React from "react";
import s from './imgresponsive.module.css'

const Imgresponsive = () => {
    return (
        
        <div className={s.wholeblock}>
            <img className={s.img} src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="#" />
            <span className={s.onlinedot}></span>
        </div>
        
    )
}
export default Imgresponsive