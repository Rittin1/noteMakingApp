# Note Making App (Node + TypeScript)

A simple RESTful API built with **TypeScript**, **Node.js**, and **Express** that performs **CRUD operations** for managing notes. MongoDB is used as the database.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/noteMakingApp.git
cd noteMakingApp
```


### 2. Install Dependencies
Dependencies are mentioned in the `package.json` file.
```bash
npm install
```

### 3. Create a .env File
You must create a .env file in the root of the project. It should contain:
```
MONGO_URL=your_mongodb_connection_string
port=8080 (any local host port) 
```

## Run the App
### In Development Mode
```bash
npm run dev
```
This uses `nodemon` to restart the server automatically on file changes.

## API Endpoints
Base URL: `http://localhost:PORT/`
| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /notes      | Get all notes     |
| POST   | /notes      | Create a new note |
| PUT    | /notes/\:id | Update a note     |
| DELETE | /notes/\:id | Delete a note     |


Use `Postman` to test the routes

## Alternative: Use curl from Terminal

### Create a note
```bash
curl -X POST http://localhost:8080/notes -H "Content-Type: application/json" -d "{\"title\":\"Test Note\",\"content\":\"Hello World\",\"author\":\"A\"}"
```

### Get all notes
```bash
curl http://localhost:8080/notes
```

### Update a note (replace <id> with actual note ID)
```bash
curl -X PUT http://localhost:8080/notes/<id> -H "Content-Type: application/json" -d "{\"title\":\"Updated\",\"content\":\"Updated content\",\"author\":\"A\"}"
```

### Delete a note
```bash
curl -X DELETE http://localhost:8080/notes/<id>
```

## Folder Structure
``` 
noteMakingApp/
├── node_modules/     #(ignored from Git)
├── package.json
├── tsconfig.json
├── nodemon.json
├── .env              # Your personal env file (ignored from Git)
├── .gitignore
└── src/
    ├── index.ts
    ├── controllers/
    │   └── notes.ts
    ├── db/
    │   └── notes.ts
    └── router/
        ├── index.ts
        └── notes.ts
```




