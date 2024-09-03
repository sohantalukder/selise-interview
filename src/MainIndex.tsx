import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './assets/styles/global.style.asset';
import RouterIndex from './routes/RouterIndex.routes';
import BottomSheetIndex from './components/bottom-sheet';
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
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainIndex;
