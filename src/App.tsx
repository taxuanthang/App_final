import * as React from 'react';
import { Button,Text,View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';
import styles from './style';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import RootStack from './Components/RootStack';
enableScreens();


const App = () => {
  return (
    <NavigationContainer independent = {true}>
      <RootStack/>
    </NavigationContainer>
  );
};

export default App;
