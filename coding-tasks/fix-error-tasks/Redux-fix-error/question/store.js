import { applyMiddleware, compose, createStore } from 'redux';
import reducer from 'reducers';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
    )
  )
);

export default store;
