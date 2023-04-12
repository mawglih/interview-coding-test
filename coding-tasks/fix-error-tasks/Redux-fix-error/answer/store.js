import { applyMiddleware, compose, createStore } from 'redux';
import reducer from 'reducers';
import createSagaMiddleware from 'redux-saga'

const logger = store => {
  return next => {
    return action => {
      console.log('[Midlleware] dispatching', action);
      next(action);
    }
  }
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
      logger,
    )
  )
);

export default store;