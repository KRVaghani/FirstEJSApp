const express = require('express');
const app = express();
const path = require('path');

app.set('views',path.join(__dirname,'views'));//tell the views directory name 
app.set('view engine','ejs')//this line though we are not every time define .ejs in file
app.use(express.static('public'));//tell the express we have used this public directory to used css,images,js files

app.get('/user/:id/:username',(req,res)=>{

    let userId = req.params.id;
    let user = req.params.username;
    res.render('index',{id: userId, username: user});
});

app.listen(3000,()=>{
    console.log('server started at port 3000.');
})