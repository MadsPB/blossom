import Project from './models/project.js'

const USER_ID = 1;
export const healthCheck = (ctx, next) => {
  ctx.response.body = "success"
}

export const createProject = async (ctx, next) => {

  try{
    const project = await Project.create({...ctx.request.body,creatorId:USER_ID});

    ctx.response.statusCode = 201;
    ctx.response.body = project;
  } catch (error)
  {
    console.log(error);
    ctx.response.body = error;
  }
}

export const getAllProjectsFromUser = async (ctx, next) => {

  try{
    const projects = await Project.findAll({where: {creatorId:USER_ID}});

    ctx.response.statusCode = 200;
    ctx.response.body = projects;
  } catch (error)
  {
    console.log(error);
  }
}

export default {healthCheck, createProject, getAllProjectsFromUser}