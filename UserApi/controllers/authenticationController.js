import User from '../models/user.js';

const session = new Set();

export async function register(req,res) {

  try {
    const user = await User.create(req.body);
   
    setSession(res, user);

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

    setSession(res, foundUser);
    res.send('success');

  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export function logout(req,res) {
  const sessionId = getSessionId(req);
  session.delete(sessionId);

  res.send(`logout success`);
};

export function auth(req,res) {

  const sessionId = getSessionId(req);

  res.send(`user is ${session.has(sessionId)}`);
};

function getSessionId(req)
{
  const cookieRaw = req.headers.cookie;
  return +cookieRaw.split('=')[1];
}

function setSession(res, user)
{
  session.add(user.id);
  res.setHeader('Set-Cookie',`sessionId=${user.id}`)
}