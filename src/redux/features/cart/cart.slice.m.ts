import {createSlice} from '@reduxjs/toolkit';

import {
  _CustomAction,
  _commonStatesP,
  _moduleReducers,
} from '../../../types/redux/commonState.types';
import commonStates from '../../commonState.state';
import sliceName from '../../sliceName.state';
import commonReducers from '../../commonReducer.state';
import isEmpty from '../../../helpers/utilities/isEmpty.utility';
import {_product} from '../../../services/types/product.type';

const initialState: _commonStatesP = {
  ...commonStates,
};

const cartSlice = createSlice({
  name: sliceName.cart,
  initialState: initialState,
  reducers: {
    ...commonReducers,
    clearAction: (state: _commonStatesP) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
    addAction: (state: _commonStatesP, {payload}: _CustomAction<_product>) => {
      if (!isEmpty(payload)) {
        // Clone the existing list
        const updatedArray = [...state.list];
        const index = updatedArray.findIndex(
          product => product.id === payload.id,
        );
        if (index === -1) {
          updatedArray.push(payload);
        } else {
          updatedArray[index] = {
            ...updatedArray[index],
            price: updatedArray[index].price + payload.price,
          };
        }
        state.list = updatedArray;
      }
    },
  },
});

export const {
  isGettingSuccess,
  isGettingError,
  isGetting,
  queryChange,
  clearAction,
  addAction,
  deleteAction,
}: _moduleReducers = cartSlice.actions;

export default cartSlice.reducer;
