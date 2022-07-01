import express from "express";
//"express"에서 express를 import 해야한다. 

//1. express app을 만든다. app이란 이름은 관습임. 
const app = express();

const handleListening = () => console.log("Server listening on port 4000 🚀")

app.listen(4000, handleListening);