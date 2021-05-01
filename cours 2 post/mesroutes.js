//import express
let express = require('express');

//initialize the app
let router = express.Router();

//send message for default URL
router.get('/',(req,res) => {
    res.render('form.ejs');
})

router.post('/',(req, res)=> {
    console.log(req.body);
    res.send("Hello " + req.body.myname)
})

module.exports = router;