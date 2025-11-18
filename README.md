# My React App

## Project Overview
This is a simple React application built with Vite. It demonstrates basic routing and component structure, designed as part of a DevOps intern assignment to showcase CI/CD with Firebase Hosting.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/aadi090204/my-react-app.git
   cd my-react-app
2. Install dependencies:
    npm install
3. Run the app locally:
    npm run dev

# Build & Deployment

- The project uses Vite to build the React app (npm run build).
- Hosting is done via Firebase Hosting.
- CI/CD is configured using GitHub Actions, which automatically builds and deploys the app to Firebase Hosting on pushes to the 
    main branch.
- The workflow file .github/workflows/firebase-deploy.yml handles the automation.

# Live Demo

- View the live application here:
https://my-react-app-e3967.web.app

# Technologies Used
- React 18
- Vite
- Firebase Hosting
- GitHub Actions (CI/CD)
- Node.js 20
