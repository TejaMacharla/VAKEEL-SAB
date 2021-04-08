const express=require('express')
const hbs=require('hbs')
const path=require('path')
const mysql=require('mysql')
const viewPath=path.join(__dirname,'./views')
const publicDirectoryPath=path.join(__dirname,'./CSS')
const bodyParser=require('body-parser')

const app=express()
app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicDirectoryPath))
 const port=process.env.PORT||9019

 app.get('/',(req,res)=>{
    res.render('lawfirm')
})
app.listen(port,()=>{
    console.log('server is running on port no ' +port)
})