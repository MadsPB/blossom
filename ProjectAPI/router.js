import Router from '@koa/router';
import controller from './controllers.js';

const router = new Router();

router.get('/',controller.healthCheck);
router.post('/projects',controller.createProject );
router.get('/projects',controller.getAllProjectsFromUser );


export default router;