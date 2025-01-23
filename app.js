const express=require('express');
const bodyParser=require('body-parser');

// Konfigurimi i express per me perdor EJS
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded ({extended: true}))

// Renderimi i index.ejs
app.get('/',(req,res)=>{
    res.ender('index');
})

// Path per perpunimin e formes (Sign Up Form)
app.post('/', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
 
    console.log("Username:" + username);
    console.log("Password:" + password);
 
    res.render('Welcome', {emri: username, pw:password})
 })
 
 app.listen(3000, ()=>{
     console.log('Serveri eshte startuar ne porten 3000')
 })

