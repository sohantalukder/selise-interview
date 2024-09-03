import React from 'react';
import {StatusBarStyle, StyleSheet, View, ViewStyle} from 'react-native';
import {globalStyles} from '../assets/styles/global.style.asset';
import CustomStatusBar from '../components/status-bar/CustomStatusBar.component';
import {colors} from '../assets/styles/colors.style.asset';
interface _props {
  children: any;
  containerStyle?: ViewStyle;
  barStyle?: StatusBarStyle;
}
const SplashContainer: React.FC<_props> = ({
  children,
  containerStyle,
  barStyle,
}) => {
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={colors.transparent}
        showHeader={false}
        barStyle={barStyle ?? 'dark-content'}
      />
      <View style={[styles(colors.white).container, containerStyle]}>
        {children}
      </View>
    </View>
  );
};
export default SplashContainer;

const styles = (bgColor: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
    },
  });
