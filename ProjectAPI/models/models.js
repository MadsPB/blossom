import Skill from './skill.js'
import Progress from './progress.js'
import sequelize from '../db.js';

Skill.belongsToMany(Progress, { through: 'Skill_Progress' });
Progress.belongsToMany(Skill, { through: 'Skill_Progress' });

try{
  (async()=>await sequelize.sync({force:false}))();
} catch (error)
{
  console.log("could not sync: "+error);
}