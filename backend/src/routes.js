import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import EquipTypeController from './app/controllers/EquipTypeController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.use(authMiddleware);
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.delete('/users/:idUser', UserController.destroy);
routes.get('/types', EquipTypeController.index);
routes.post('/types', EquipTypeController.store);
routes.put('/types/:idType', EquipTypeController.update);
routes.delete('/types/:idType', EquipTypeController.destroy);
routes.post('/files', uploads.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
