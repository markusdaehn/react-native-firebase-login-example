
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducers';

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
