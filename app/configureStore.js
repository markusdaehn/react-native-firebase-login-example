
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers';
//TODO: Replace with redux-promise
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: 'yuzsa', realtime: true,
    }),
  );
  const store = autoRehydrate()(createStore)(reducer, enhancer);

  persistStore(store, {
    blacklist: ['logs'],
    storage: AsyncStorage,
    debounce: 50
  }, onCompletion);

  return store;
}
