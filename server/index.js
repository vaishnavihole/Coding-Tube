const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Video = require('./models/Video');
const User = require('./models/User');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI,
{useNewUrlParser: true,
useUnifiedTopology: true}, () => {
console.log('Connected to mongoDB')
});



app.get('/videos/all', async (req, res) =>{
  const videoData =  await Video.find();
    res.send(videoData);
  });

app.post('/videos/add', async(req,res) => {
    const videoObject = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      channel: req.body.channel,
      keywords: req.body.keywords,
      videoUrl: req.body.videoUrl
    }

    const video = new Video(videoObject)
    const result = await video.save()
    
    res.send({
      message:'Video added successfully'
    })
});

app.post("/user/add",async(req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email:  req.body.email,
    password: req.body.password,
  })

  const result = await user.save();

  res.send({
    message: "User added successfully",
    user: result
  });
})

app.post("/user/login", async(req, res) =>{
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })

  if(user) {
    res.send({
    status: "success",
    message: "User logged in successfully",
    user: user
    })
  }
  else{
    res.send({
      status: "failure",
      message: "User not found",
    })
  }
});
  
   if(process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}


app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});