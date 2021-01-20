import React from "react"


const Validation = ({msg,phone})=>{
    if((msg===""||phone==="")){
        return(
            <p style={{color:"red"}}>
                Phone and message  are required
            </p>
        )
    }
    if((phone.length<10||phone.length>10)){
        return(
            <p>Invalid phone number</p>
        )
    }
    return(
        <div>
          
        </div>
    )

}
export default Validation