
import { AsyncStorage } from 'react-native';
// @note: commented out because react 16 removed React.PropTypes
//import {composeWithDevTools} from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducer';
import saga from './sagas'
import createSagaMiddleware from 'redux-saga';

export default function configureStore(onCompletion:()=>void):any {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    // thunk,
    // promise,
    sagaMiddleware,
  ];
  // @note: commented out because react 16 removed React.PropTypes
  //const compose = composeWithDevTools({name: 'yuzsa', realtime: true});
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  const store = autoRehydrate()(createStore)(reducer, enhancer);

  persistStore(store, {
    blacklist: ['logs', 'navigators'],
    storage: AsyncStorage,
    debounce: 50
  }, onCompletion);

  sagaMiddleware.run(saga);

  return store;
}
