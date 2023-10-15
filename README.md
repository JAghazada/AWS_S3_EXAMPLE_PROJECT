## AWS S3 Example Project

This is a simple example project designed to help you learn how to work with Amazon S3, a popular cloud storage service. The project's focus is on the logic of AWS S3, and it is intentionally kept minimal and straightforward. All server-related files are consolidated in a single server.js file for simplicity.

## Prerequisites

Before running this project, you need to set up your environment by creating an .env file with the following configuration:

#### .env file :
```js 
PORT = EXAMPLE_PORT
AWS_USER_PASS = YOUR_AWS_USER_PASSWORD
BUCKET_NAME = YOUR_S3_BUCKET_NAME
BUCKET_REGION = YOUR_S3_BUCKET_REGION
SECRET_ACCESS_KEY = YOUR_S3_BUCKET_SECRET_KEY
ACCESS_KEY = YOUR_S3_BUCKET_ACCESS_KEY
```

#### NOTE : Make sure to replace the placeholders with your actual values.

## Project Overview

This project demonstrates how to interact with AWS S3 in a simple manner. It includes the following components:

Express Server (server.js): The project utilizes Express, a popular Node.js web application framework, to set up a server for handling HTTP requests. The server provides two main functionalities:

Generating a pre-signed URL for uploading a file to your S3 bucket.
Handling file uploads to your S3 bucket.
You can access these functionalities via HTTP endpoints, making it easy to integrate S3 uploads into your applications.

Client-Side HTML and JavaScript: The client-side code is kept minimal. It allows users to select a file and upload it to the S3 bucket using the pre-signed URL provided by the server. The uploaded images are displayed on the webpage as a visual confirmation.

AWS S3 Integration: The project connects to Amazon S3 using the AWS SDK. It generates pre-signed URLs that provide temporary access for uploading files directly to your S3 bucket without exposing your credentials. After generating a URL, it performs the actual file upload to your S3 bucket.

## Running the Project

Install the required Node.js packages by running npm install in your project directory.

Create an .env file with the necessary configuration as described in the "Prerequisites" section.

Start the server by running node server.js or using a process manager like npm start.

Open your web browser and navigate to the server's URL (e.g., http://localhost:EXAMPLE_PORT).

Use the provided user interface to select a file and upload it to your configured S3 bucket.

## Conclusion

This example project provides a foundational understanding of how to use AWS S3 for file uploads. While the project's primary focus is on S3 interactions, you can further expand and style it to suit your needs. It serves as a valuable starting point for learning and integrating S3 storage into your web applications.