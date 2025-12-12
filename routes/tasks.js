// routes/tasks.js
import express from 'express';
import * as ctrl from '../controllers/tasksController.js';
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.createTask);
router.put('/:id', ctrl.updateTask);
router.delete('/:id', ctrl.deleteTask);

export default router;
