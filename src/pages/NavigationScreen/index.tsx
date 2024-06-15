import React from "react";
import {List} from 'react-native-paper';
import { StyleSheet,View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavigationScreen = () =>{
  const navigation = useNavigation();
  return (
    <View styles ={{ flex :1}}>
      <List.Section>
        <List.Item title = 'Home' onPress={()=> navigation.navigate('Home')}/>
        <List.Item title = 'Our Products' onPress={()=> navigation.navigate('Products')}/>
        <List.Item title = 'Contact Us' onPress={()=> navigation.navigate('Contact')}/>
        <List.Item title = 'About Us' onPress={()=> navigation.navigate('About')}/>
        <List.Item title = 'Cart' onPress={()=> navigation.navigate('Cart')}/>
      </List.Section>
    </View>
  )
}
export default NavigationScreen;