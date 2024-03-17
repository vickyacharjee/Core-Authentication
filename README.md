# Stateful Authentication for URL Shortener Service

This repository contains a Node.js application that implements stateful authentication for accessing a URL shortener service. With stateful authentication, users can securely access the URL shortening functionality while maintaining session persistence.

## Features

- **Stateful Authentication**: Implements a stateful authentication system using cookies to manage user sessions.
- **URL Shortening**: Provides URL shortening functionality to create shortened versions of long URLs.
- **Node.js and Express**: Built using Node.js and Express.js for server-side logic and routing.
- **MongoDB**: Utilizes MongoDB for storing user data and session information.
- **NPM Packages**: Incorporates npm packages like UUID and cookie-parser for enhanced functionality and session management.

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/url-shortener.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and define the following environment variables:

    ```plaintext
    PORT=8002
    MONGODB_URI=mongodb://localhost:27017/short-url
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Access the URL shortener service:

    Open your web browser and navigate to `http://localhost:8002` to access the URL shortener service. You can now authenticate using the provided authentication mechanism and start shortening URLs.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

