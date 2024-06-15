import Home from '../../pages/Home';
import Products from '../../pages/Products';
import About from '../../pages/About'
import Contact from '../../pages/Contact';
import Cart from '../../pages/Cart';
import NavigationScreen from '../../pages/NavigationScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text,View,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Component from 'react-native-paper/lib/typescript/components/List/ListItem';

const Naviagtiontab=[
  { name :'Home', component:Home, titile: 'Home', color:'#F33F3F'},
  { name :'Products',component:Products, titile: 'Our Products', color:'#F33F3F'},
  { name :'About',component:About, titile: 'About Us', color:'#F33F3F'},
  { name :'Contact',component:Contact, titile: 'Contact Us', color:'#F33F3F'},
  { name :'Cart',component:Cart, titile: 'Cart', color:'#F33F3F'},
  { name :'NavigationScreen',component:NavigationScreen, titile: '', color:'#F33F3F'},
]
const RootStack = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <Stack.Navigator  screenOptions={{headerLeft:(props)=>( 
          <View>
            <Button
          onPress={() => {
            navigation.navigate('NavigationScreen');
          }}
          textColor='red'
          icon = 'view-headline'
          mode ='contained-tonal'
          buttonColor='black'
        />
          </View>
        ),headerStyle: { backgroundColor: 'black' },
      }}>
          {Naviagtiontab.map((item,index)=>{
            return (
              <Stack.Screen name= {item.name} component={item.component}  options={{
                title: item.titile,
                headerTitleStyle: { color: item.color }, // Custom color for the title
              }} />
            )
          })} 
      </Stack.Navigator>
    )
}
export default RootStack;