const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const Admin = require("../models/admin");
const middleware = require("../middleware/auth")

const Message = require("../models/message");

router.get('/myMessage',async(req,res)=>{
    let Messages
    console.log("jj")
    try{
    Messages = await Message.find()
    console.log((Messages))
    res.json(Messages)
    }
    catch(e){
        res.status(404)
    }
})

router.post('/postMessage',async(req,res)=>{

     console.log("gggg")
     const { phone, message } =  await req.body;
    console.log(message)
    try {
        
      let msg = await Message.findOne({ phone });
      if (msg) {
        return res.status(400).json({ msg: "already send a message" });
      }
      
      
      msg = new Message({
        phone,
        message,
    
      });
     
     console.log("create message"+message.message)
    
      await msg.save();
      res.send("message saved");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
})
router.delete('/:phone',async(req,res)=>{//need to add middleware do problem with token
    

    try{
    let contcat = await Message.find({phone:req.params.phone})
   // console.log(concat+'kkk')
    if (!contcat) return res.status(404).json({msg: 'Contact not found'});

 

    await Message.deleteOne({phone:req.params.phone});

    res.json({msg: 'Message removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

})
module.exports = router;
