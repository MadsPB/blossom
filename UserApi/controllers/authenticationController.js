import User from '../models/user.js';
import session from '../models/session.js'

export async function register(req,res) {

  try {
    const user = await User.create(req.body);
   
    const sessionId = await session.createSession(user.id);
    setSessionCookie(res, sessionId);

    res.send(user);
  } catch (error) {
    if(error.name === 'SequelizeUniqueConstraintError')
    {
      console.log("username not unique");
      res.statusCode = 400;
      res.setHeader("content-type","plain/text")
      res.send("user already exists");
      return;
    }
    
    console.log(error);
    res.send(error);
  }

};

export async function login(req,res) {

  const { username, password } = req.body;

  if (!username || !password){
      res.status(400);
      res.send("missing username or password");
      return;
  }

  try {
    const foundUser = await User.findOne({where: { username }});
    
    if(!foundUser || foundUser.password !== password)
    {
      res.setHeader('Set-Cookie',`sessionId=''`)
      res.status(401);
      res.send("username not or password incorrect");
      return;
    }

    const sessionId = await session.createSession(foundUser.id);
    setSessionCookie(res, sessionId);
    res.send('success');

  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export async function logout(req,res) {
  const sessionId = getSessionIdFromCookie(req);
  await session.deleteSession(sessionId);

  res.send(`logout success`);
};

export async function auth(req,res) {

  const sessionId = getSessionIdFromCookie(req);
  const authorized = await session.exists(sessionId);
  
  authorized && await session.extendSession(sessionId);

  res.send(`user is ${authorized}`);
};

function getSessionIdFromCookie(req)
{
  const cookieRaw = req.headers.cookie;
  return cookieRaw.split('=')[1];
}

function setSessionCookie(res, id)
{
  res.setHeader('Set-Cookie',`sessionId=${id}`)
}