const router = require('express').Router();
const tasksController = require('../Controllers/task_Controller');

router.post('/tasks', tasksController.createTask);
router.get('/tasks', tasksController.getAllTasks);
router.get('/tasks/:id', tasksController.getTaskById);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksController.updateTask);
router.post('/tasks/bulk', tasksController.bulkCreateTasks);
router.delete('/tasks/bulk', tasksController.bulkDeleteTasks);


router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
