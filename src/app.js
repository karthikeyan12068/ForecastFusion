const express=require('express')
const path=require('path')
const hbs=require('hbs')
const utilsjs=require('./utils/app.js')

const app=express()

const publicDirectory=path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'))
app.set('view engine', 'hbs');

app.get('',(req,res)=>{
    res.render('index',{
        name1:'This is home page',
        regno:'0145'
    })
    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name1:'This is about page',
        regno:'0145'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must enter a search query'
        })
    }
    utilsjs.geocode(req.query.search,res)
})
app.get('/about/*',(req,res)=>{
    res.render('error',{
        name1:'No such about sub page exists but try the below options',
        regno:'0145'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        name1:'No such page exists but try the below options',
        regno:'0145'
    })
})
//Styling 404 pages

app.listen(3000,()=>{
    console.log('Server is upon 3000')
})