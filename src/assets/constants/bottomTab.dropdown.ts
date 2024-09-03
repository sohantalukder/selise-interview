import {screens} from '../../routes/routeName.routes';
import Dashboard from '../../modules/dashboard/Dashboard.m';
import Cart from '../../modules/cart/Cart.m';
import AddItem from '../../modules/add-item/AddItem.m';
import {_bottomTabInterface} from '../../routes/bottom-tab/interface';
import HomeIcon from '../icons/HomeIcon.assets';
import CartIcon from '../icons/CartIcon.assets';
import AddIcon from '../icons/AddIcon.assets';
const bottomTabDropdown: _bottomTabInterface[] = [
  {
    Icon: HomeIcon,
    route: screens.dashboard,
    Component: Dashboard,
  },
  {
    Icon: CartIcon,
    route: screens.cart,
    Component: Cart,
  },
  {
    Icon: AddIcon,
    route: screens.addItem,
    Component: AddItem,
  },
];

export {bottomTabDropdown};
