import React ,{useEffect,useReducer,Alert} from "react"
import axios from '../../axios/axios'
import MessageItems from './MessageItems'
import DialogBox from '../layout/DialogBox'

 
const initialState = {
  messages:[],
  Error:"",
  isSuccess:false
 
  

}



const reducer = (state,action)=>{
    switch(action.type){
        case 'CopyMessages':
         console.log("reducer")
         state.messages.push(action.payload)
         return {...state}
        case 'FetchError':
         
         return{...state,Error:action.value}

        case 'DeleteMessage':
                  
        for(var i=0;i<state.messages[0].length;i++){
           
            if(state.messages[0][i].phone===action.payload){
                console.log("equel")
                state.messages[0].splice(i,1)
                
                
            
            }
        }
        state.isSuccess=true
        
                   
               
                   

   
                    
                  
                console.log(state.messages)
             
   

    

            
            return {...state}
        case 'FetchError':
                  

           
            return {...state}


        default:
          return{...state}
        
    }
}
    
const Inbox = (props)=>{
    

  
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        async function fetchMyAPI() {
        try{    
           axios.get('http://localhost:3000/api/contact/myMessage').then(
               async response=>{
                //   for(let i in response.data){
                      
                       
                       await dispatch({type:'CopyMessages',payload:response.data})
                 //  }
                   
               }
           )      
        }
        catch(e){
            dispatch({type:'FetchError',value:"Cant Fetch data from the server!"})
        }
        }
        fetchMyAPI()
        
    },[])


    return(
        <div>
            
        
        
         
        
         {
            
             state.messages.map((msg)=>{
                
                  
                 
                 
                 return(
                     
                 <MessageItems  messages={msg} dispatch={dispatch} />
                 
                 )
                
                
             })
         }
            
             
       
        
       
       
        

        </div>
    )

}

export default React.memo(Inbox)