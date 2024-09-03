import {createSlice} from '@reduxjs/toolkit';

import {
  _commonStatesP,
  _moduleReducers,
} from '../../../types/redux/commonState.types';
import commonStates from '../../commonState.state';
import sliceName from '../../sliceName.state';
import commonReducers from '../../commonReducer.state';

const initialState: _commonStatesP = {
  ...commonStates,
  price: undefined,
  category: [],
  rating: undefined,
  order: 'descending',
  search: '',
};

const productsSlice = createSlice({
  name: sliceName.products,
  initialState: initialState,
  reducers: {
    ...commonReducers,
    clearAction: (state: _commonStatesP) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
    queryChange: (state: _commonStatesP, {payload}: any) => {
      const {page, perPage} = payload || {
        page: 1,
        perPage: 10,
      };
      state.isLoading = true;
      state.hasMore = false;
      state.page = page;
      state.perPage = perPage;
      state.search = payload?.search || state.search;
      state.category = payload?.category || state.category;
      state.order = payload?.order || state.category;
      state.price = payload?.price || state.category;
      state.rating = payload?.rating || state.category;
      state.list = [];
    },
  },
});

export const {
  isGettingSuccess,
  isGettingError,
  isGetting,
  queryChange,
  clearAction,
  isGettingMore,
  isRefresh,
  addAction,
}: _moduleReducers = productsSlice.actions;

export default productsSlice.reducer;
