📇 Contact Manager Application (This repo is the front end part the backend it in: "https://github.com/Swatheshson/S3-contact-springboot-backend")

A web application to add, view, delete the existing contact, and upload contacts using Angular for the frontend and Spring Boot for the backend integrated with aws s3 bucket

💻 Frontend Stack
Technology	Purpose
Angular 16 ⚡	Framework for building the UI and handling component-based architecture
RxJS 📡	Handles asynchronous operations and HTTP requests (observables)
HttpClient 🌐	Sends requests to backend APIs and fetches data
Bootstrap 5 🎨	Styles the interface and makes it responsive (needs to be downloaded to work correctly)

⚠ Note: Bootstrap is required for the interface to display properly. Users must include/download Bootstrap in their project.
----------------------------------------------------------------
🖥️ Backend Stack
Technology	Purpose
Spring Boot ☕	Provides the RESTful backend APIs

HashMap 🗂️	Stores contact data in memory(physical or local)
AWS SDK ☁️	Uploads contacts to cloud storage like S3 (optional but makes it permanent)
⚙️ Setup Instructions
Backend

Clone the repository.

Open in an IDE (IntelliJ, Eclipse, VS Code).

Run the Spring Boot application (ContactApplication.java).

Backend will run on http://localhost:8080.

Frontend

Navigate to the frontend folder:

cd contact-app


Install dependencies:

npm install


Run the Angular application:

ng serve


Open in browser at http://localhost:4200.

⚠ Make sure Bootstrap 🎨 is included in the project; otherwise the interface styling will not work.
