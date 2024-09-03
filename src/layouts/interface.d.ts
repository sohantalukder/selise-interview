import React from 'react';
import {colors} from './../../assets/styles/colors.style.asset';
import {StatusBarStyle, StyleProp, ViewStyle} from 'react-native';

interface _container {
  children: React.CElement;
  containerStyle?: StyleProp<ViewStyle>;
  bg?: colors;
  showActivity?: boolean;
  showHeader?: boolean;
  statusBarStyle?: StatusBarStyle;
  statusBarBg?: colors;
  activityBgColor?: colors;
  ph?: number;
}

export type {_container};
