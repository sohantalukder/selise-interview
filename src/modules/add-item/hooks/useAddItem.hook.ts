import {useNavigation} from '@react-navigation/native';
import showAlertWithOneAction from '../../../helpers/utilities/showAleartWithOneAction.utility';
import {addAction} from '../../../redux/features/products/products.slice.m';
import {screens} from '../../../routes/routeName.routes';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

const useAddItem = () => {
  const values = useRef<{
    title: string;
    image: string;
    price: string;
    shortDescription: string;
    category: string;
    id: string;
    rating: number;
  }>({
    title: '',
    image: '',
    price: '',
    category: '',
    shortDescription: '',
    id: `${new Date().getFullYear()}${String(
      new Date().getMonth() + 1,
    ).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${String(
      new Date().getHours(),
    ).padStart(2, '0')}${String(new Date().getMinutes()).padStart(
      2,
      '0',
    )}${String(new Date().getSeconds()).padStart(2, '0')}${String(
      new Date().getMilliseconds(),
    ).padStart(3, '0')}`,
    rating: 4.0,
  });
  const [reset, setReset] = useState(false);
  const handleChange = (text: string, name: string) => {
    values.current = {...values.current, [name]: text};
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleAdd = () => {
    const {price, image, title, shortDescription, category} = values.current;
    if (price && image && title && shortDescription && category) {
      dispatch(addAction(values.current));
      navigation.navigate(screens.dashboard as never);
      setReset(!reset);
      values.current = {
        title: '',
        image: '',
        shortDescription: '',
        price: '',
        category: '',
        id: `${new Date().getFullYear()}${String(
          new Date().getMonth() + 1,
        ).padStart(2, '0')}${String(new Date().getDate()).padStart(
          2,
          '0',
        )}${String(new Date().getHours()).padStart(2, '0')}${String(
          new Date().getMinutes(),
        ).padStart(2, '0')}${String(new Date().getSeconds()).padStart(
          2,
          '0',
        )}${String(new Date().getMilliseconds()).padStart(3, '0')}`,
        rating: 4.0,
      };
    } else {
      showAlertWithOneAction({
        title: 'Add Product',
        body: 'Please fill-up correctly!',
      });
    }
  };
  return {values, handleAdd, handleChange};
};
export default useAddItem;
