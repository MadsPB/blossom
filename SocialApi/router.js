import Router from '@koa/router';
// import projectController from './controllers/projectController.js';
// import progressController from './controllers/progressController.js';
// import skillController from './controllers/skillController.js';
// import * as models from './models/models.js'
import auth from './middleware/auth.js'

const router = new Router();
import feedController from './controllers/feedController.js';

router.get('/', (ctx) => ctx.response.body = "success");

//router.use(auth)

router.post('/feed', feedController.createPost );
router.post('/feed/:commentId', feedController.addComment );
router.post('/feed/:commentId/toggleLike', feedController.toggleLike );
router.get('/feed', feedController.getAll );
router.post('/seed',feedController.seed);

export default router;