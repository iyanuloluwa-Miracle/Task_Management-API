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

Response Body:

```json
{
  "id": 1,
  "title": "Task Title",
  "assigned_user": "User Name",
  "completed": false
}

```

#### List All Tasks
#### Endpoint: GET /tasks

Retrieves a list of all tasks in the system.

Response:


```json
[
  {
    "id": 1,
    "title": "Task 1",
    "assigned_user": "User A",
    "completed": true
  },
  {
    "id": 2,
    "title": "Task 2",
    "assigned_user": "User B",
    "completed": false
  }
  // More tasks...
]

```

### Get a Specific Task
#### Endpoint: GET /tasks/:id

Retrieves a specific task by its ID.

Response:


```json
{
  "id": 1,
  "title": "Task Title",
  "assigned_user": "User Name",
  "completed": false
}

```

### Update a Task
### Endpoint: PUT /tasks/:id

#### Updates the title or completion status of a specific task.

Request:


```json
{
  "title": "Updated Task Title",
  "completed": true
}

```

Response:

```json
{
  "title": "Updated Task Title",
  "completed": true
}

```


### Delete a Task
### Endpoint: DELETE /tasks/:id

Deletes a specific task by its ID.

Response:


```json

{
  "message": "Task deleted successfully"
}

```

## Bulk Operations

### Bulk Add Tasks
### Endpoint: POST /tasks/bulk

Creates multiple tasks in a single request.

Request:
