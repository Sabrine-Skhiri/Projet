import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

// Set up Redux DevTools extension for debugging
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with root reducer and middleware (thunk)
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

// Export the store to be used in the application
export default store;
