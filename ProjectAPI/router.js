import Router from '@koa/router';
import projectController from './controllers/projectController.js';
import progressController from './controllers/progressController.js';
import skillController from './controllers/skillController.js';
import * as models from './models/models.js'
import auth from './middleware/auth.js'

const router = new Router();

router.get('/', (ctx) => ctx.response.body = "success");

router.use(auth)
router.post('/projects',projectController.createProject );
router.get('/projects',projectController.getAllProjectsFromUser );

router.post('/progress',progressController.addProgress );
router.get('/progress/project/:projectId',progressController.getAllProgressForProject );

router.get('/skills', skillController.getAll );
router.get('/skills/name/:name', skillController.getSkillsByName );
router.post('/skills/name/:name', skillController.addSkill);

router.get('/skills/user/', skillController.getSkillsForUser);

export default router;