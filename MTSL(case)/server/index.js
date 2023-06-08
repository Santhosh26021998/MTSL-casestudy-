const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const UserRouter= require('./userrouter')
const app= express();


app.use(cors());
app.use(express.json());
app.use(UserRouter)

const port = 8080;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//connection to mongodb
async function connectToDatabase() {
    try {
      await mongoose.connect(
        "mongodb+srv://santhoshpanneerselvam1998:sandy@cluster0.j11k9tg.mongodb.net/",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("connected to mongodb");
    } catch (error) {
      console.error("error connecting to mongodb", error);
      return;
    }
  }
  connectToDatabase();

