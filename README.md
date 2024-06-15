# Redux Counter Application

A simple application that demonstrates the use of Redux for managing state in a React application.

## Getting Started

To get started, clone this repository and install the dependencies:

    git clone https://github.com/Harshyadav00/Redux-counter-application.git
    cd Redux-counter-application
    npm install


Then, start the development server:

    npm start

The application will be available at `http://localhost:3000`.

## Features

* Displays a counter that can be incremented or decremented using buttons
* Uses Redux to manage the state of the counter
* Demonstrates the use of React Hooks (useState, useDispatch, useSelector) to interact with the Redux store

## Redux Store

The Redux store is created in `src/store/store.js` and uses the `counterReducer` to manage the state of the counter.

## React Components

The main application component is `src/component/Counter.js`, which uses the `useSelector` hook to retrieve the current count from the Redux store and the `useDispatch` hook to dispatch actions to increment or decrement the count.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Author

[Harsh yadav]
