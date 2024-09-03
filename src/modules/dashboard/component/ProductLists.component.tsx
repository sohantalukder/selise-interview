import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import EmptyContent from '../../../components/empty-content/EmptyContent.component';
import EachProduct from './EachProduct.component';
import useProductList from '../hooks/useProductList.hook';
const ProductLists = () => {
  const {list, isLoading, hasMore} = useProductList();
  return (
    <FlatList
      keyboardDismissMode="on-drag"
      keyExtractor={(_item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      initialNumToRender={4}
      data={list}
      ListFooterComponent={
        hasMore ? (
          <View style={{height: rs(30)}}>
            <ActivityIndicator color={colors.pink} />
          </View>
        ) : undefined
      }
      ListEmptyComponent={
        <EmptyContent forLoading={isLoading} text={'No Products Found!'} />
      }
      renderItem={({item, index}) => <EachProduct item={item} index={index} />}
      style={{paddingTop: rs(20)}}
      contentContainerStyle={
        list?.length > 0
          ? {...customPadding(0, 20, 50, 20), gap: rs(12)}
          : globalStyles.emptyFlexBox
      }
    />
  );
};

export default ProductLists;
