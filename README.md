# cPanel Email API

A Node.js API to create email accounts using cPanel’s API. This package automates email account creation, making it useful for hosting services, SaaS applications, and businesses that need email provisioning.

## Features
- Automates email account creation in cPanel
- Uses Node.js, Express, Axios, and cPanel API
- Easy to configure with environment variables
- Supports TypeScript and JavaScript

## Installation
Install the package using npm:

```sh
npm install create-emails
```

## Usage
Import the package and use the `createEmailCpanel` function:

### Example:

```typescript
import { createEmailCpanel } from "cpanel-email-api";

const auth = {
    cpanelHost:"cpanel-host",
   username: "your-cpanel-username", password: "your-cpanel-password" };

createEmailCpanel({ domain: "example.com", email: "user", password: "password123" }, auth)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### Expected Response

On success:
```json
{
    "status": 1,
    "message": "Email account created successfully"
}
```

On error:
```json
{
    "error": "Missing required fields"
}
```

## Running the API Server
You can also run the API server to expose an endpoint:

```sh
npm start
```



# Create Email API

This is a Node.js API for creating email accounts using the cPanel API.

## Prerequisites
- Node.js installed on your system
- cPanel account with API access
- `.env` file with cPanel credentials and host details

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/javadroid/Create-custom-emails-with-Cpanel-Nodejs
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   cpanelHost=your-cpanel-host
   cpanelUsername=your-cpanel-username
   cpanelPassword=your-cpanel-password
   PORT=3000
   ```

## Usage
1. Start the server:
   ```sh
   npm start
   ```
2. Use Postman or any HTTP client to send a `POST` request to:
   ```
   http://localhost:3000/create-email
   ```
   
   **Request Body:**
   ```json
   {
       "domain": "example.com",
       "email": "user",
       "password": "securepassword",
       "cpanelHost":"cpanel-host",
       "cpanelUser": "optional-cpanel-username",
       "cpanelPass": "optional-cpanel-password"
   }
   ```

## Response
### Success:
```json
{
    "status": 1,
    "message": "Email account created successfully"
}
```

### Errors:
- **400 Bad Request:** Missing required fields
- **405 Method Not Allowed:** Failed to create email account
- **500 Internal Server Error:** Server-side error

## License
This project is open-source. Modify and use it as needed.

