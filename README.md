# Task-Management-API DOCUMENTATION

## Installation Instructions

### Node.js Installation

Before you can run this project, you'll need to install Node.js. You can download the latest version of Node.js from the official website: https://nodejs.org/

* For Windows: Download the installer and follow the installation wizard to set up Node.js.

* For macOS: Download the macOS Installer and follow the installation instructions.

* For Linux: You can use your package manager to install Node.js. For example, on Ubuntu, you can use:

```
sudo apt-get update
sudo apt-get install nodejs
```
### Project Setup

* Clone the repository:

```
git clone [repository_url]
```

### Project setup

* Change into the project directory:
  
```
cd [project_directory]
```

* Install project dependencies:
  
```
npm install
```

### Running the project

* To start the development server, run
```  
npm start
```
* The application will be available at `http://localhost:3000`.



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

```json

[
  {
    "title": "Task 1",
    "assigned_user": "User A",
    "completed": false
  },
  {
    "title": "Task 2",
    "assigned_user": "User B",
    "completed": true
  }
  
]

```

Response:

```json

[
  {
    "title": "Task 1",
    "assigned_user": "User A",
    "completed": false
  },
  {
    "title": "Task 2",
    "assigned_user": "User B",
    "completed": true
  }
  
]

```

#### Bulk Delete Tasks
#### Endpoint: DELETE /tasks/bulk

Deletes multiple tasks in a single request.

Request:

```json

{
  "taskIds": [1, 2, 3]
}

```

Response:

```json

{
  "message": "Tasks deleted successfully"
}

```

## Error Responses

In case of errors, the API will return appropriate error responses with status codes and error messages. The common status codes used are:

* `400 Bad Request:` Invalid or missing parameters in the request.
* `401 Unauthorized:` Authentication failure or missing token.
* `404 Not Found:` Resource not found.
* `500 Internal Server Error:` Server-side error.