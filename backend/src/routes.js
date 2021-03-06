import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import EquipTypeController from './app/controllers/EquipTypeController';
import FileController from './app/controllers/FileController';
import EquipmentController from './app/controllers/EquipmentController';
import TeamController from './app/controllers/TeamController';
import PhaseController from './app/controllers/PhaseController';
import OperationController from './app/controllers/OperationController';
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

routes.post('/files', uploads.single('file'), FileController.store);

routes.get('/equipments', EquipmentController.index);
routes.post('/equipments', EquipmentController.store);
routes.put('/equipments/:idEquip', EquipmentController.update);

routes.get('/teams', TeamController.index);
routes.post('/teams', TeamController.store);
routes.put('/teams/:idTeam', TeamController.update);

routes.get('/phases', PhaseController.index);
routes.post('/phases', PhaseController.store);
routes.put('/phases/:idPhase', PhaseController.update);
routes.delete('/phases/:idPhase', PhaseController.destroy);

routes.get('/operations', OperationController.index);
routes.post('/operations', OperationController.store);
routes.put('/operations/:idOp', OperationController.update);

export default routes;
