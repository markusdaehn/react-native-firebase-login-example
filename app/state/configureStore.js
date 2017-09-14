
import { AsyncStorage } from 'react-native';
import {composeWithDevTools} from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducer';
import saga from './saga'
import createSagaMiddleware from 'redux-saga';

export default function configureStore(onCompletion:()=>void):any {
  const sagaMiddleware = createSagaMiddleware();
  const compose = composeWithDevTools({name: 'yuzsa', realtime: true});
  const middleware = [
    thunk,
    promise,
    sagaMiddleware,
  ];
  const enhancer = compose(applyMiddleware(...middleware));
  const store = autoRehydrate()(createStore)(reducer, enhancer);

  persistStore(store, {
    blacklist: ['logs', 'navigators'],
    storage: AsyncStorage,
    debounce: 50
  }, onCompletion);

  sagaMiddleware.run(saga);

  return store;
}
