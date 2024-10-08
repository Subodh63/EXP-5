Student Management API
This is a RESTful API built using Node.js, Express, and MongoDB to manage student data. It supports basic CRUD (Create, Read, Update, Delete) operations for student information such as name, course, address, and more.

Features
Create a new student record
Retrieve all student records or a specific student by ID
Update student details
Delete a student record
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/student-management-api.git
Navigate to the project directory:

bash
Copy code
cd student-management-api
Install the required dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is running locally or update the DB/db.js file with your MongoDB URI.
Start the server:

bash
Copy code
node app.js
The server will run on port 2000 by default. You can access it at http://localhost:2000.

API Endpoints
Create a New Student
POST /Student
Request Body:
json
Copy code
{
  "name": "John Doe",
  "Course": "MCA",
  "Address": "123 Main St",
  "Country": "USA",
  "State": "California",
  "Religion": "Christianity"
}
Response:
201 Created: If the student data is saved successfully
400 Bad Request: If data submission fails
500 Internal Server Error: If a server error occurs
Retrieve All Students
GET /Student
Response:
200 OK: Returns a list of all student records
500 Internal Server Error: If a server error occurs
Retrieve a Student by ID
GET /Student/:id
Response:
200 OK: If the student is found
400 Bad Request: If the student is not found
500 Internal Server Error: If a server error occurs
Update a Student by ID
PATCH /Student/:id
Request Body:
json
Copy code
{
  "name": "Jane Doe",
  "Course": "MCA"
}
Response:
200 OK: If the student data is updated successfully
400 Bad Request: If the update fails
500 Internal Server Error: If a server error occurs
Delete a Student by ID
DELETE /Student/:id
Response:
200 OK: If the student data is deleted successfully
400 Bad Request: If deletion fails
500 Internal Server Error: If a server error occurs
Technologies Used
Node.js
Express
MongoDB
Mongoose
License
This project is licensed under the MIT License - see the LICENSE file for details.