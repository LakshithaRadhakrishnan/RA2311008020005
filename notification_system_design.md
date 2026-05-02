In this project, I created a simple logging system using middleware. The main idea is to capture events happening in the application (like API calls or errors) and send them to an external logging service. This helps in understanding what is going on inside the system and makes debugging easier.

Components Used
Frontend: A basic interface used to trigger API calls.
Backend (Node.js + Express):Handles requests and responses.
Logging Middleware:A custom function Log that sends log data to the external API.
External Logging API:Receives and stores logs.

1. The user interacts with the frontend.
2. A request is sent to the backend.
3. The backend processes the request.
4. At the same time, the logging function is triggered.
5. The log details are sent to the external logging API.
6. The API returns a response confirming the log was created.

Logging Details
Each log contains:
stack: where the log comes from 
level: type of log (info, error, etc.)  
package: part of the system  
message:what actually happened  
When a user opens an API route:
1. The backend receives the request  
2. A log is created using the middleware  
3. The log is sent to the external API  
4. A success response confirms it is stored  
Conclusion: This project shows how logging can be added to an application using middleware. It helps in tracking what is happening in the system and makes it easier to find and fix errors.