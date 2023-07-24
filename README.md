# Task-Management-API DOCUMENTATION

# Introduction

The Task Management API allows you to manage tasks with the ability to create, read, update, and delete tasks. The API also provides functionalities for bulk operations.

## Base URL

The base URL for all API endpoints is: http://localhost:3000/v1

## Endpoint

#### Create a New Task
#### Endpoint: POST /tasks

Creates a new task with the provided details.

Request Body:


```json
{
  "title": "Task Title",
  "assigned_user": "User Name",
  "completed": false
}

```