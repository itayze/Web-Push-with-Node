const express=require('express')
const webpush=require('web-push')
const bodyParser=require('body-parser')
const path=require('path')

const app=express()
app.use(bodyParser.json())
const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))

const publicVapidKey='YOUR PUBLIC VAPID KEY HERE'
const privateVapidKey='YOUR PRIVATE VAPID KEY HERE'

webpush.setVapidDetails('mailto:YOUR MAIL HERE',publicVapidKey,privateVapidKey)

app.post('/subscribe',(req,res)=>{
    //reciece subscription object
    const subscription=req.body
    console.log(subscription)
    //send 201 status
    res.status(201).send({})

    //create payload
    const payload=JSON.stringify({title:'push test'})

    //pass object into sendNotification
    webpush.sendNotification(subscription,payload).catch((e)=>{
        console.log(e)
    })

})

const port=3000

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})