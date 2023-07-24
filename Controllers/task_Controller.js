// controllers/tasksController.js
const Task = require('../models/taskModel');

module.exports = {
  async createTask(req, res) {
    const { title, assigned_user } = req.body;
    const completed = false;

    try {
      const task = await Task.createTask(title, assigned_user, completed);
      res.status(201).json(task);
    } catch (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Error creating task' });
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await Task.getAllTasks();
      res.json(tasks);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).json({ error: 'Error fetching tasks' });
    }
  },

  async getTaskById(req, res) {
    const taskId = req.params.id;

    try {
      const task = await Task.getTaskById(taskId);
      res.json(task);
    } catch (err) {
      console.error('Error fetching task:', err);
      res.status(404).json({ error: 'Task not found' });
    }
  },

  async deleteTask(req, res) {
    const taskId = req.params.id;

    try {
      await Task.deleteTask(taskId);
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      console.error('Error deleting task:', err);
      res.status(404).json({ error: 'Task not found' });
    }
  },

  async updateTask(req, res) {
    const taskId = req.params.id;
    const { title, completed } = req.body;

    try {
      await Task.updateTask(taskId, title, completed);
      res.json({ message: 'Task updated successfully' });
    } catch (err) {
      console.error('Error updating task:', err);
      res.status(404).json({ error: 'Task not found' });
    }
  },

  async bulkCreateTasks(req, res) {
    const tasks = req.body;

    try {
      await Task.bulkCreateTasks(tasks);
      res.status(201).json({ message: 'Tasks created successfully' });
    } catch (err) {
      console.error('Error creating tasks:', err);
      res.status(500).json({ error: 'Error creating tasks' });
    }
  },

  async bulkDeleteTasks(req, res) {
    const taskIds = req.body.ids;

    try {
      await Task.bulkDeleteTasks(taskIds);
      res.json({ message: 'Tasks deleted successfully' });
    } catch (err) {
      console.error('Error deleting tasks:', err);
      res.status(500).json({ error: 'Error deleting tasks' });
    }
  },
};
