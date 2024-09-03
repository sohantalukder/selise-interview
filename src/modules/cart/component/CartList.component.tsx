import {FlatList} from 'react-native';
import React from 'react';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import EmptyContent from '../../../components/empty-content/EmptyContent.component';
import {_product} from '../../../services/types/product.type';
import EachCart from './EachCart.component';
const CartLists: React.FC<{list: Array<_product>}> = ({list}) => {
  return (
    <FlatList
      keyboardDismissMode="on-drag"
      keyExtractor={(_item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      initialNumToRender={4}
      data={list}
      ListEmptyComponent={<EmptyContent text={'No Products Found!'} />}
      renderItem={({item, index}) => <EachCart item={item} index={index} />}
      style={{paddingTop: rs(20)}}
      contentContainerStyle={
        list?.length > 0
          ? {...customPadding(0, 0, 50, 0), gap: rs(12)}
          : globalStyles.emptyFlexBox
      }
    />
  );
};

export default CartLists;
