import {ReactElement} from 'react';
import {TextStyle, StyleProp, ViewStyle} from 'react-native';

interface _buttonProps {
  text: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactElement;
  isLoading?: boolean;
  disabled?: boolean;
}

export type {_buttonProps};
