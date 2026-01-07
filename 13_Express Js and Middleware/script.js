const express=require('express');

const app = express();

app.use(function(req,res,next){
    console.log("Mideleware1.")
    next();
})

app.use(function(req,res,next){
    console.log("Mideleware2.")
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('we are on about page.')
})

app.get('/profile', (req, res, next) => {
    return next(new Error("Something Went Wrong!"));
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("Something Went Wrong Try Again!!!");
} )

app.listen(3000)