import React, { useState } from 'react'
import {Dialog,DialogActionsBar} from 'react-dialog'


const DialogBox = ()=>{
        const [visible,setVisible] = useState(false)
        const toggleDialog=()=> {
        setVisible(true);
    }
    return(
        <div>
            
             <Dialog title={"Please confirm"}>
                    <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <button className="k-button">No</button>
                        <button className="k-button">Yes</button>
                    </DialogActionsBar>
                </Dialog>

        </div>
    )

}

export default DialogBox