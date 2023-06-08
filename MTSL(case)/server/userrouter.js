const express= require('express')
const UserModel = require('./user')
const app=express();

app.post('/user/signup', async (req,res)=>{
    const user= new UserModel(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }

});

app.post('/user/log', async (req, res) => {
    try {
      const { email, pass } = req.body;
      const user = await UserModel.findOne({ email });
      if (user) {
        if (pass === user.pass) {
          return res.status(200).send({ message: 'Logged in successfully' });
        } else {
          return res.status(400).send({ message: 'Invalid credentials' });
        }
      } else {
        return res.status(404).send({ message: 'User not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  });

app.get('/user/display',async(req,res)=>{
    const users = await UserModel.find({});
    try{
        res.send(users)
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/user/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const user = await UserModel.findOne({ email });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  

module.exports = app;