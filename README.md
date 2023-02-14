


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
    Vercel - for Instant static deploys

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


