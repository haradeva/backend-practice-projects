# Assignment JWT

This project is a backend practice assignment focused on implementing JSON Web Tokens (JWT) for authentication.

## Features

- User registration and login
- JWT-based authentication
- Protected routes accessible only with valid JWT

## Technologies Used

- Node.js
- Express.js
- JSON Web Token (JWT)
- MongoDB (or any other database of your choice)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/assignment-jwt.git
   ```
2. Navigate to the project directory:
   ```sh
   cd assignment-jwt
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Login and receive a JWT
- `GET /protected` - Access a protected route (requires JWT)

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [MongoDB](https://www.mongodb.com/)
