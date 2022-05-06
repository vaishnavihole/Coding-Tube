const mongoose = require('mongoose')

const Video = mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    thumbnail:String,
    keywords: [String],
    videoUrl:String
})

const model = mongoose.model('Video',Video)


module.exports = model