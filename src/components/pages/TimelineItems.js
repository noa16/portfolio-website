import React from 'react'
import classes from "./Timeline.module.css";
const TimeLineItems = ({data})=>{
    return(
    <div className={classes.timelineitem}>
      <div className={classes.timelineitemcontent}>
        <span className={classes.tag} style={{background:data.category.color}}>
         {data.category.tag}
        </span>
        <time>{data.time}</time>
         <p>{data.time}</p>
            {data.link && (<a href={data.link.url} target="_blank" rel="noooo">
             {data.link.text}
         </a>)}
         <span className={classes.circle}></span>
       </div>
      
    </div>
    )
}

export default TimeLineItems