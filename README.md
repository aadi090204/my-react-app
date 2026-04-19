# My React App

## Project Overview
This project demonstrates an automated CI/CD pipeline using GitHub Actions for building and deploying a React application to Firebase Hosting.

It is a simple React application built with Vite, showcasing basic routing and component structure.
# Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/aadi090204/my-react-app.git
    cd my-react-app
2. Install dependencies:
    ```bash
    npm install
3. Run the app locally:
    ```bash
    npm run dev

# Build & Deployment

- The project uses Vite to build the React app (npm run build).
- Hosting is done via Firebase Hosting.
- Build output (`dist/`) is generated and deployed to Firebase Hosting.
- CI/CD is configured using GitHub Actions, which automatically builds and deploys the app to Firebase Hosting on pushes to the 
    main branch.
- The workflow file .github/workflows/firebase-deploy.yml handles the automation.

# CI/CD Pipeline

- Pipeline: Code Push → Build → Deploy (Firebase Hosting)
- The project uses **GitHub Actions** to automate the build and deployment process.
- On every push to the `main` branch, the workflow triggers:
  - Checkout of the code.
  - Installation of dependencies.
  - Building the React app using Vite.
  - Deployment of the build output to **Firebase Hosting**.
- The GitHub Actions workflow file is located at `.github/workflows/firebase-deploy.yml`.
- Deployment uses a Firebase service account token stored securely in GitHub Secrets as `FIREBASE_SERVICE_ACCOUNT`.
- This setup ensures that the latest code changes are automatically published to the live site without manual intervention.

# Live Demo

- View the live application here:
https://my-react-app-e3967.web.app

# Technologies Used
- React 18
- Vite
- Firebase Hosting
- GitHub Actions (CI/CD)
- Node.js 20
