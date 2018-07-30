const express=require('express')
const server = express()

const todos= require('./routes/todo')

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/public",express.static(__dirname +"/public"))
server.use("/todo",todos)
server.listen(4356)
