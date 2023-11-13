import Post from '../models/post.js'

async function createPost(ctx,next){

  try {

    const post = new Post(ctx.request.body);
    await post.save();
    ctx.body = post;


  } catch (e)
  {
    console.log(e);
    ctx.body = e;
  }

}

async function getAll(ctx){
  try{
    const result = await Post.find();
    ctx.body = result;
  }catch(e){
    console.log(e);
    ctx.body = e;
  }
}

async function addComment(ctx){
  try{
    const result = await Post.findById(ctx.request.params.commentId);
    const {authorId, content} = ctx.request.body;
    const returnObj = await result.addComment(authorId, content);
    ctx.body = result;
  }catch(e){
    console.log(e);
    ctx.body = e;
  }
}

const User = 1;
async function toggleLike(ctx){
  try{
    const result = await Post.findById(ctx.request.params.commentId);
    if(result.likes.includes(User))
      result.likes = result.likes.filter((el) => el !== User);
    else
      result.likes.push(User);

    await result.save();

    ctx.body = result;
  }catch(e){
    console.log(e);
    ctx.body = e;
  }
}

async function seed(ctx){
  try{
    const result = await Post.insertMany(ctx.request.body);
  
    ctx.body = result;
  }catch(e){
    console.log(e);
    ctx.body = e;
  }
}

export default {createPost, getAll, addComment, toggleLike, seed};