import Router from '@koa/router';
import projectController from './controllers/projectController.js';
import progressController from './controllers/progressController.js';

const router = new Router();

router.get('/', (ctx) => ctx.response.body = "success");

router.post('/projects',projectController.createProject );
router.get('/projects',projectController.getAllProjectsFromUser );

router.post('/progress',progressController.addProgress );
router.get('/progress/project/:projectId',progressController.getAllProgressForProject );


export default router;