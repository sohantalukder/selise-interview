/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {
  isGetting,
  isGettingMore,
  isRefresh,
} from '../../../redux/features/products/products.slice.m';
import {useDispatch, useSelector} from 'react-redux';
import {_commonStatesP} from '../../../types/redux/commonState.types';
import {productsStates} from '../../../redux/allSelector.state';
const useProductList = () => {
  const {isLoading, firstRender, list, hasMore, refreshing}: _commonStatesP =
    useSelector(productsStates);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!firstRender) {
      dispatch(isGetting());
    }
  }, []);
  const loadMore = () => {
    hasMore && dispatch(isGettingMore());
  };
  const onRefresh = () => {
    dispatch(isRefresh());
  };
  return {
    isLoading,
    list,
    loadMore,
    hasMore,
    onRefresh,
    refreshing,
  };
};

export default useProductList;
