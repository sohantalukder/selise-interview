import {StyleSheet} from 'react-native';
import {colors} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {customPadding} from '../../assets/styles/global.style.asset';

const bottomTabStyle = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    borderTopColor: colors.grey3,
    borderTopWidth: 1,
    backgroundColor: colors.white,
    alignSelf: 'baseline',
    ...customPadding(12, 20, 18, 20),
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexGrow: 1,
  },
  label: {
    marginTop: rs(4),
  },
});

export default bottomTabStyle;
