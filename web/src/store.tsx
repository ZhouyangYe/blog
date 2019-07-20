import {
  createStore,
  Store,
} from 'redux';
import Reducer from './reducers';

export const appStore: Store<{}> = createStore(Reducer);
