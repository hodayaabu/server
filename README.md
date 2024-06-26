**Expense Tracker Website**
<br>
Welcome to the Expense Tracker Website! 
<br>
This application allows you to register, log in, and manage your expenses efficiently by recording each expense along with its category.

**Features**
<br>
-User Registration and Login
<br>
-Record expenses with details like amount and category
<br>
-Track and manage your expenses
<br>

**link to a deployment of the application**
https://expense-tracker-li4u.onrender.com/
<br> <br>
**Getting Started**
<br>

Prerequisites
Make sure you have the following installed on your machine:
<br>

Node.js
Visual Studio Code (VSC)
<br>

**Installation**
<br>

Follow these steps to set up the project on your local machine:
<br>

1. Clone both the frontend and server repositories.
(Expense-Tracker-Server & Expense-Tracker)

git clone <Expense-Tracker-Server>
git clone <Expense-Tracker>
<br>

3. Install Dependencies
Open the frontend and server directories in Visual Studio Code (VSC) and run the following commands:

cd Expense-Tracker
npm install

cd Expense-Tracker-Server
npm install

3. Run the Development Servers
In both the frontend and server directories, run the following command to start the development servers:

npm run dev
<br>

4. Connecting and Browsing
After starting both servers, open your browser 
<br>

5. If you want to log in using an existing user, use the following credentials:

Username: hodi
<br>

Password: h123
<br>


**Code and Architecture**
<br>
<br>
**Frontend**
<br>
Framework: React.js
<br>
State Management: Redux
<br>
UI Components: SASS
<br>
The frontend is a React application that interacts with the backend through API calls. It has components for user authentication, expense management, and data visualization.
<br>
<br>

**Server**
<br>
Framework: Node.js with Express.js
<br>
Database: MongoDB 
<br>
Authentication: JWT 
<br>
The server handles user authentication, expense data management, and provides a RESTful API for the frontend to interact with.
<br>
<br>

**API Endpoints**
<br> <br>

**Authentication**<br>
POST /api/auth/register: Register a new user
<br>
Request: { "username": "string", "password": "string" }
<br>
<br>

POST /api/auth/login: Log in an existing user
<br>
Request: { "username": "string", "password": "string" }
<br>
<br>

**Expenses**
<br>
GET /api/expenses: Get all expenses for the logged-in user <br>

Response: [{ "id": "string", "amount": "number", "category": "string", "date": "date","note":"string" }]
<br>
<br>

POST /api/expenses: Add a new expense <br>
Request: { "amount": "number", "category": "string", "note":"string" }
<br/>
<br>

PUT /api/expenses/:id Update an existing expense <br>
Request: { "amount": "number", "category": "string", "note":"string" }
<br>
<br>

DELETE /api/expenses/:id Delete an expense <br>
Response: { "message": "Expense deleted successfully" }
<br>

<br>


**Have Fun!**
