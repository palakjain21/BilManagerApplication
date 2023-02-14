


# Link

The app is deployed on "https://bil-manager-application.vercel.app/"

# Problem Statement:

Please find the coding assignment problem statement below and its divided into Two levels: -
Adithya owns a car wash business and needs help to manage various bills from his vendors.
Build an application to help Adithya manage his monthly bills.
The application must be written in React with Redux, using appropriate middleware.
The bill manager shows a bill dashboard (list of bills) with the total monthly billed amount.

LEVEL-1:
• The user must be able to manually add, edit and remove bills. (update the state locally)
• The user must be able to filter bills by category. (category filter dropdown)
• Draw a time-series chart of the monthly billing cycle.

LEVEL-2:
Adithya wants to be able to see a minimum number of bills that should be paid (n), such that their
total value does not exceed the monthly budget value while meeting the condition that no more bills
can be added from the remaining bills.. Highlight all the bills that should be paid.

The app uses following libraries/packages for development, build and deployment:

    MDB- Bootstrap Material Design UI KIT
    React.js - An open-source JavaScript library for building user interfaces & single-page or mobile applications.
    Redux.js - A Predictable State Container for JS Apps
    Redux-Saga - A Redux Middleware library to handle Asynchronous Actions such as fetching data more easily & effciently
    React-Router - A package that provides the core routing functionality for React Router
    React-Chartjs-2 - an open-source JavaScript library to draw different types of charts by using the HTML5 canvas element
    LocalStorage - Not a library but a feature that this app uses local storage to store data(temporary storage) and to maintain the new bill id
    Vercel (formerly ZEIT) - for Instant static deploys

### Screen 1: Dashboard

This screen contains time-series chart of the monthly billing cycle and the priority bill list, for which we have taken 1111 as our monthly budget.
![Screenshot from 2023-02-14 23-18-18](https://user-images.githubusercontent.com/56087514/218817315-fdc15c6d-f3e6-4081-995b-4887e2551257.png)

### Screen 2: Create New Bill

This screen contains simple form to add new bill.
![Screenshot from 2023-02-14 23-18-24](https://user-images.githubusercontent.com/56087514/218817332-00284135-7ce9-4ece-b100-3a1622539d2b.png)

### Screen 3: All Bills

This screen contains table showing all the bills. There's an option where the user can filter the bills category-wise.
![Screenshot from 2023-02-14 23-18-31](https://user-images.githubusercontent.com/56087514/218817337-573b10ef-eed2-4bf6-b10a-0b488f54050b.png)

### Screen 4: Edit Bills

This screen contains editable forms.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
