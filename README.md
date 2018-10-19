# IBM Cloud Garage - React Typescript Starter

This README covers the basic running of the React Typescript Starter for the IBM Cloud Garage. This is project is a good boilerplate starter if you wish to use React with Typescript on your next Garage project. For other boilerplates to start your Garage project, please see our boilerplate catalogue at: . Feel free to request other boilerplates, suggest enhancements to current ones, or get involved with the development of these assets.

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

- To be added!

## Q&A

### Why Not Use create-react-app?

Good question. After using create-react-app (both vanilla and typescript versions) we felt that, while useful, it came with more gubbins than we would have liked. Additionally, within a short time of using the application it was created we came upon situations that required us to install things to application that create-react-app didn't really like and so required us to eject. Finally, we wanted something that has a bit of an IBM Cloud Garage flavour, i.e. it would be ready to deploy on CF, come with test-driven starter code, include the example deploy scripts, etc. For these three reasons, we decided we wanted to create this boilerplate.
You are more than welcome to use create-react-app if you feel it is more suitable to your needs. :)

### Why is there an express server?

Running locally is fine with the webpack server and is perfect for development and testing. However, most of our applications will run in the Cloud (we are the Cloud Garage after all) and so we wanted this application to be deployable there. This lightweight server is designed just for this purpose. It also sits outside of the main project directory (_client_) so that it can ripped out and replaced as necessary.
