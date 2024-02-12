# JWT Authentication in Node.js

This repository contains code for implementing JSON Web Token (JWT) authentication in a Node.js application. The purpose of this project is for learning and studying JWT authentication mechanisms.

## Installation and Setup

To run the code in this repository, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/ajzal-byte/JWT-auth.git
```

2. Navigate to the project directory:
```bash
cd jwt-authentication-nodejs
```

3. Install dependencies using npm:
```
npm install
```

4. Create a `.env` file in the root directory and add the following environment variables:
```makefile
ACCESS_TOKEN_SECRET=<your_access_token_secret>
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
```

5. Start the server:
```sql
npm start
```

6. Start the JWT authentication server in a new terminal:
```arduino
npm run startAuth
```

## Testing JWT Authentication

You can test the JWT authentication using the REST Client extension or any API testing tool. The `request.rest` file provides sample requests to test the authentication endpoints.

To use the `request.rest` file:

1. Open the file in your code editor.
2. Send the requests to the appropriate endpoints to test the authentication flow.

## Important Notes

- Make sure to replace `<your_access_token_secret>` and `<your_refresh_token_secret>` with your own secret keys in the `.env` file.
- The code in this repository is for educational purposes and should not be used in production environments without appropriate security measures.

Feel free to explore and play with the code! If you have any questions or suggestions, please open an issue in this repository.
