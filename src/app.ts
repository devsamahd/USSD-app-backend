const express = require('express')

const app = express()



app.get('/',(req:any,res:any) => {
    res.json({hello:"hello dev"})
})

app.listen(300,()=>{
    console.log("listening on port 300")
})