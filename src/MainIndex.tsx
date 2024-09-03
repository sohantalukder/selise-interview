import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './assets/styles/global.style.asset';
import RouterIndex from './routes/RouterIndex.routes';
import BottomSheetIndex from './components/bottom-sheet';
import toastConfig from './packages/toast/toastConfig';
import {Provider} from 'react-redux';
import configStore from './redux/store';

const MainIndex = () => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
        <GestureHandlerRootView style={globalStyles.flex1}>
          <NavigationContainer>
            <RouterIndex />
            <BottomSheetIndex />
            <Toast config={toastConfig} position="bottom" />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainIndex;
