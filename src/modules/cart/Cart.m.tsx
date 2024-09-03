import {Text} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {cartStates} from '../../redux/allSelector.state';
import Container from '../../layouts/Container.layout';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
import CartLists from './component/CartList.component';
import {_product} from '../../services/types/product.type';

const Cart = () => {
  const {list} = useSelector(cartStates);
  const totalPrice = useCallback(() => {
    const sum = list.reduce((accumulator: number, item: _product) => {
      return accumulator + item.price;
    }, 0);
    return sum?.toFixed(2);
  }, [list]);
  return (
    <Container ph={20}>
      <Text style={[typographies.interSemiBold28, {color: colors.black}]}>
        Your Cart Items: {list?.length}
      </Text>
      <Text style={typographies.interMedium16}>
        Total Price: {totalPrice()}
      </Text>
      <CartLists list={list} />
    </Container>
  );
};

export default Cart;
