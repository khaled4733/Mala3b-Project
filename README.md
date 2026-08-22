# Stadium Booking App

A mobile application for booking sports facilities with support for multiple users concurrently.

## Technologies
- React Native
- Firebase (Authentication, Realtime Database)

## Key Features
- Multiple users can book sports facilities concurrently
- Intuitive and user-friendly mobile interface
- Real-time updates using Firebase Realtime Database

## What I Learned
- Used Firebase Realtime Database to handle live, concurrent updates
- Developed a mobile interface with React Native
- Managed app state and data flow to ensure accurate user interactions and database updates
- Gained experience building a real-world mobile application with real-time features

## Deploy the Web Demo

This project can be deployed as a static Expo web app on Render.

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render will use `render.yaml` to build and publish `web-build`.
4. Add the deployed URL to the project section of your CV.

The production build command is `npm run build`. The Render configuration also
includes a rewrite to `index.html` so browser navigation works correctly.
