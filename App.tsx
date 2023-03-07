import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Header from './src/components/header';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <View>
        <Header />
      </View>
    </>
  );
};

export default App;
