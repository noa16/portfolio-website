import React,{Fragment, useState} from "react"
import classes from './Portfolio.module.css'
import data from '../data'

import DialogBoxProjects from '../layout/DialogBoxProjects'
const Portfolio = ({technology,img,images,link,text})=>{

    const [dialog,setDialog] = useState(false)
    const handleClick=(status)=>{
        console.log("clicked"+dialog)
        setDialog(status)
        
    }
    return(
       
        <Fragment>
          <div id="Portfolio" className={classes.galleryImgContainer} style={{  marginLeft: "20rem"}}  >
          <img src={img} className={classes.galleryImg} alt="" onClick={()=>handleClick(true)} />
          <a href="#" className={classes.galleryIcon}>
            <i class="fas fa-search"></i>
          </a>
            </div>
            {dialog&&<DialogBoxProjects technology={technology} handleClick={handleClick} images={images} url={link} text={text}/>}

        </Fragment>
    )

}

export default Portfolio