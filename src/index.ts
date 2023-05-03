import http from 'http';
// import controller
import { getTasks, addTask, updateTask, deleteTask } from "./controller";
//https://blog.logrocket.com/build-rest-api-typescript-using-native-modules/
// create the http server
const server = http.createServer((req, res) => {
   // get tasks
   if (req.method == "GET" && req.url == "/api/tasks") {
     return getTasks(req, res);
   }

   // Creating a task
   if (req.method == "POST" && req.url == "/api/tasks") {
     return addTask(req, res);
   }

   // Updating a task
   if (req.method == "PUT" && req.url == "/api/tasks") {
     return updateTask(req, res);
   }

   // Deleting a task
   if (req.method == "DELETE" && req.url == "/api/tasks") {
     return deleteTask(req, res);
   }
});

// set up the server port and listen for connections
server.listen(3000, () => {
   console.log("Server is running on port 3000");
   //http://localhost:3000/api/tasks
});
 
 