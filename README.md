# IBM Cloud Garage - React Typescript Starter

This README covers the basic running of a boilerplate starter project using React with Typescript, designed to help accelerate the outset of your next project without using CRA.

## Local Running

To run this asset locally, in Developer mode:

1. From the app directory, change into the client directory with `cd client`.
1. Run `npm install`.
1. Run `npm start` (note this starts a 'hot' server that will refresh on changes detected in the code. If you want a static server run `npm run start:static`).
1. The browser should open automatically with you react application.

To run the tests:

1. From the app directory, change into the client directory with `cd client`.
1. Then run either:

- `npm test` for a single test run.
- `npm run tdd` to keep your tests running in watch mode (tests will automatically run when changes occur in the code).

You can also run the express server:

1. From the app directory run `npm install`.
1. If you dont already have a dist directory you will to create one. Run `npm run build` to automatically generate this for you.
1. Run `npm start`.
1. The console should show that the app is serving on port 3000.
1. Navigate to localhost:3000 to see your react app served from the express server.

## Running in a Cloud Environment

To be added!

## Q&A

### Why Not Use create-react-app?

Good question. After using create-react-app (both vanilla and typescript versions) we felt that, while useful, it came with more gubbins than we would have liked. Additionally, within a short time of using the application it was created we came upon situations that required us to install things to application that create-react-app didn't really like and so required us to eject. For these reasons, we decided we wanted to create this boilerplate.
You are more than welcome to use create-react-app if you feel it is more suitable to your needs. :)

### Why is there an express server?

Running locally is fine with the webpack server and is perfect for development and testing. However, most applications will run in the Cloud and so we wanted this application to be deployable there. This lightweight server is designed just for this purpose. It also sits outside of the main project directory (_client_) so that it can ripped out and replaced as necessary.
