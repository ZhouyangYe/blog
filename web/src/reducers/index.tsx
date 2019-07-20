import {
  combineReducers,
} from 'redux';
import {
  test,
} from './test';

const allReducers: any = combineReducers({
  test,
});

export default allReducers;
