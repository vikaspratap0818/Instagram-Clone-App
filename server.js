require('dotenv').config();
const { connect } = require("mongoose");
const app=require("./src/app");
const connectDB=require("./src/config/db")

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running on 3000");
})

