// @flow

import Web3 from 'web3';

import type { Action } from './actions';
import * as a from './actions';

export type NetworkState = {|
  isConnected: boolean,
  isFailed: boolean,
  error: ?number,
  id: ?number,
  name: ?string,
  account: ?string,
  web3: ?Web3,
  web3WS: ?Web3,
|};

const defaultState: NetworkState = {
  isConnected: false,
  isFailed: false,
  error: null,
  id: null,
  name: null,
  account: null,
  web3: null,
  web3WS: null,
};

export default (state: NetworkState = defaultState, action: Action) => {
  switch (action.type) {
    case a.CONNECTED:
      return {
        ...state,
        isConnected: true,
        ...action.params,
      };
    case a.FAIL:
      return {
        ...state,
        isConnected: false,
        isFailed: true,
        error: action.error,
      };
    default:
      return state;
  }
};
