const express=require("express")
const body=require("body-parser")
const cors=require("cors")
const bodyParser = require("body-parser")
const app=express()

//import 

let port=8080
let corsOptions={
    origin:true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Methods",
        "Access-Control-Request-Headers",
    ]
}

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.listen(port, ()=> {
    console.log("Server listens to "+port)
})

app.get("/api/users",getAllUsers=async(request, response)=>{
    try{
        const users=[
            {
                name:"Ion",
                age:20
            },
            {
                name:"john",
                age:25
            },
        ]
        response.status(200).send(users);
    }catch(e){
        console.error(e)
        response.status(500).send("Server error")
    }
})