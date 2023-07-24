// models/taskModel.js
const db = require('../models/db');

function createTask(title, assigned_user, completed) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (title, assigned_user, completed) VALUES (?, ?, ?)';
    db.query(sql, [title, assigned_user, completed], (err, result) => {
      if (err) {
        return reject(err);
      }
      const taskId = result.insertId;
      resolve({ id: taskId, title, assigned_user, completed });
    });
  });
}

function getAllTasks() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}

function getTaskById(id) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, id, (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length === 0) {
        return reject(new Error('Task not found'));
      }
      resolve(results[0]);
    });
  });
}

function deleteTask(id) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, id, (err, result) => {
      if (err) {
        return reject(err);
      }
      if (result.affectedRows === 0) {
        return reject(new Error('Task not found'));
      }
      resolve('Task deleted successfully');
    });
  });
}

function updateTask(id, title, completed) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE tasks SET title = ?, completed = ? WHERE id = ?';
    db.query(sql, [title, completed, id], (err, result) => {
      if (err) {
        return reject(err);
      }
      if (result.affectedRows === 0) {
        return reject(new Error('Task not found'));
      }
      resolve('Task updated successfully');
    });
  });
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
  updateTask,
};
