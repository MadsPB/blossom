import Progress from '../models/progress.js'
import Skill from '../models/skill.js'
import sequelize from '../db.js';

export const addProgress = async (ctx) => {

  try{

    const skills = ctx.request.body.skills;
    const {projectId, comment} = ctx.request.body;

    const t = await sequelize.transaction();
    await Skill.bulkCreate(skills, {ignoreDuplicates: true, transaction: t});
    const foundSkills = await Skill.findAll({where:{name:skills.map(skill=> skill.name)},transaction: t})

    const progress = await Progress.create(
      {
        projectId,
        comment,
        contributtorId:ctx.session.userId,
      }, {transaction: t});

    await progress.addSkills(foundSkills, { transaction: t });

    await t.commit();

    ctx.response.statusCode = 201;
    ctx.response.body = await Progress.findByPk(progress.id , {include:Skill});
  } catch (error)
  {
    console.log(error);
    ctx.response.body = error;
  }
}

export const getAllProgressForProject = async (ctx, next) => {

  try{
    const projects = await Progress.findAll({where: {projectId:ctx.request.params.projectId},include:Skill});

    ctx.response.statusCode = 200;
    ctx.response.body = projects;
  } catch (error)
  {
    console.log(error);
  }
}

export default {addProgress, getAllProgressForProject}