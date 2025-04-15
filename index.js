const express = require('express')
const app = express()
const PORT = 8000


const users = [
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"},
]


app.get('/',(req,res)=>{
    const user = req.query.user
    if(!user){
        return res.status(400).json({message:"User parameter cannot be empty"})
    }
    const userDetails = users.filter((u)=>u.username == user)
    if(userDetails.length == 0){
        return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json({message:"User Found",data:{userDetails}})

})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})