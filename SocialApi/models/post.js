//const { Timestamp } = require('mongodb')
import mongoose from '../db.js'
//const ObjectId = mongoose.Schema.ObjectId;


const commentScheme = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  authorId: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const postScheme = new mongoose.Schema({
  content:{
    type: String,
    required: true
  },
  progress:{
    type: String,
    required: true
  },
  authorId: {
    type: Number,
    required: true
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: [Number]
  },
  progressId:Number,
  progressImageUrl:String,
  comments: [commentScheme]
})

postScheme.methods.addComment = async function (authorId, content){
  this.comments.push({authorId,content});
  return await this.save();
}

const Post = mongoose.model('Post',postScheme);

export default Post;