# Create Email API

This is a Node.js API for creating email accounts using the cPanel API.

## Prerequisites
- Node.js installed on your system
- cPanel account with API access
- `.env` file with cPanel credentials and host details

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
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

