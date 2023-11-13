import Skill from '../models/skill.js'
import Progress from '../models/progress.js';
import { Op }  from "sequelize";

export const getAll = async (ctx, next) => {

  try{
    const skills = await Skill.findAll();

    ctx.response.statusCode = 200;
    ctx.response.body = skills;
  } catch (error)
  {
    console.log(error);
    ctx.response.body = error;
  }
}

export const getSkillsByName = async (ctx) => {

  try{
    const skills = await Skill.findAll({where: {name: { [Op.iLike]: ctx.request.params.name+'%'}}});

    ctx.response.statusCode = 200;
    ctx.response.body = skills;
  } catch (error)
  {
    console.log(error);
  }
}

export const addSkill = async (ctx) => {

  try{
    const skill = await Skill.create({name:ctx.request.params.name});

    ctx.response.statusCode = 201;
    ctx.response.body = skill;
  } catch (error)
  {
    console.log(error);
    ctx.response.status = 409;
    ctx.response.body = error;
  }
}

export const getSkillsForUser = async (ctx) => {

  try{
    const skills = await Skill.findAll({include: {model:Progress, where: {contributtorId:ctx.session.userId}}});
    
    ctx.response.statusCode = 200;
    ctx.response.body = skills;
  } catch (error)
  {
    console.log(error);
  }
}

export const getAllProgressForProject2 = async (ctx, next) => {

  
}

export default { getAll, getSkillsByName, addSkill, getSkillsForUser }