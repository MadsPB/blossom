import Progress from '../models/progress.js'

const USER_ID = 1;

export const addProgress = async (ctx, next) => {

  try{
    const project = await Progress.create({...ctx.request.body,contributtorId:USER_ID});

    ctx.response.statusCode = 201;
    ctx.response.body = project;
  } catch (error)
  {
    console.log(error);
    ctx.response.body = error;
  }
}

export const getAllProgressForProject = async (ctx, next) => {

  try{
    const projects = await Progress.findAll({where: {projectId:ctx.request.params.projectId}});

    ctx.response.statusCode = 200;
    ctx.response.body = projects;
  } catch (error)
  {
    console.log(error);
  }
}

export default {addProgress, getAllProgressForProject}