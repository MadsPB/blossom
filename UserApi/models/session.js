import redisDb from "../infrastructure/redisdb.js";
import { v4 as uuidv4 } from 'uuid';

const EXPIRATION = 60*3;

export async function createSession(userId)
{
  const sessionId = uuidv4();

  await redisDb.set(sessionId, userId, {EX:EXPIRATION});
  
  return sessionId;
}

export async function getSession(sessionId)
{
  const session = await redisDb.get(sessionId);
  
  return session;
}

export async function deleteSession(sessionId)
{
  await redisDb.del(sessionId);
  
  return !!sessionId;
}

async function extendSession(sessionId)
{
  await redisDb.expire(sessionId,EXPIRATION);
}

export default { createSession, getSession, deleteSession, extendSession };