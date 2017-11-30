import * as types from '../constants/actions/home';

export const countAdd = () => (
  { type: types.HOME_COUNT_ADD }
);

export const countReduce = () => (
  { type: types.HOME_COUNT_REDUCE }
);
