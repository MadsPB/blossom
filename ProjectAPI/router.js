import Router from '@koa/router';
import projectController from './controllers/projectController.js';
import progressController from './controllers/progressController.js';
import skillController from './controllers/skillController.js';
import sequelize from './db.js';

try{
  (async()=>await sequelize.sync({force:true}))();
} catch (error)
{
  console.log("could not sync: "+error);
}

const router = new Router();

router.get('/', (ctx) => ctx.response.body = "success");

router.post('/projects',projectController.createProject );
router.get('/projects',projectController.getAllProjectsFromUser );

router.post('/progress',progressController.addProgress );
router.get('/progress/project/:projectId',progressController.getAllProgressForProject );

router.get('/skills', skillController.getAll );
router.get('/skills/:name', skillController.getSkillsByName );
router.post('/skills/:name', skillController.addSkill)


export default router;