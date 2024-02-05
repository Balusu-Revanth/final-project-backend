# Backend ReadMe - Nice Note Taker

## Project Overview
Nice Note Taker Backend serves as the robust foundation for the note-taking application, employing the MVC (Model-View-Controller) architecture. Developed using Node.js and Express.js, the backend ensures secure user authentication through JWT and password hashing using bcrypt. PostgreSQL is used for efficient data storage and retrieval.

## Key Features
- Secure user authentication with JWT
- Passwords hashed using bcrypt for enhanced security
- Utilizes MVC architecture for efficient data flow

## Architecture/Folder Structure
The backend follows a structured folder organization, including:
- `configs`: Database configuration files
- `controllers`: Logic for authentication and note management
- `middlewares`: Authorization and note-related middlewares
- `routes`: Defines routes for authentication and notes
- `notes.js`: Core logic for note handling

## Getting Started with the Project
1. Clone the repository: 
```bash
git clone https://github.com/your-username/Nice-Note-Taker.git
```
2. Navigate to the Backend directory: 
```bash
cd Nice-Note-Taker/Backend
```
3. Install dependencies: 
```bash
npm install
```
4. Configure PostgreSQL database in `configs/db.js`
5. Start the server: 
```bash
npm start
```

The backend is now ready to handle requests from the frontend. Configure the database and environment variables as needed.

## Frontend Repository
Find the frontend and client-side implementation in the [webmonth-finalproject-frontend](https://github.com/Balusu-Revanth/webmonth-finalproject-frontend).

## Conclusion
Nice Note Taker Backend provides a secure and efficient server-side solution for your note-taking application. Customize and extend the codebase to meet your specific requirements, creating a reliable backend for seamless frontend interactions.
