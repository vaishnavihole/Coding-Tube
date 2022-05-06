const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Video = require('./models/Video');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
{useNewUrlParser: true,
useUnifiedTopology: true}, () => {
console.log('Connected to mongoDB')
});


app.get('/', (req, res) =>{
    res.send('This is home page');
})

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
   if(process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}


app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});