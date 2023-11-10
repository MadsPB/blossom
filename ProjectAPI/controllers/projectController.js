import Project from '../models/project.js'

export const createProject = async (ctx, next) => {

  try{
    const project = await Project.create({...ctx.request.body,creatorId:ctx.session.userId});

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
    const projects = await Project.findAll({where: {creatorId:ctx.session.userId}});

    ctx.response.statusCode = 200;
    ctx.response.body = projects;
  } catch (error)
  {
    console.log(error);
  }
}

export default { createProject, getAllProjectsFromUser }