import React from "react";
import classes from "./Timeline.module.css";
import timelineData from '../data'
import TimelineItem from './TimelineItems'

const Timeline = () =>{
  return(

   <div className={classes.container} style={{ padding: "10px", marginLeft: "15rem" }}>
     {timelineData.map((data,idx)=>(
       <TimelineItem data={data} key={idx}/>
     ))}
    
   </div>
  


)
}
export default Timeline;
