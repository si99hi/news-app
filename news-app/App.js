// npm install @react-navigation/drawer
// npm install @react-navigation/native
// npm install @react-navigation/stack
// expo install react-native-gesture-handler react-native-reanimated react-native-screens

import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { SplashScreen } from './screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens/HomeScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // Drawer navigator for the main app screens
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Sports' component={CategoryScreen}/>
        <Drawer.Screen name='Business' component={CategoryScreen}/>
        <Drawer.Screen name='Entertainment' component={CategoryScreen}/>
        <Drawer.Screen name='Science' component={CategoryScreen}/>
      </Drawer.Navigator>
    );
  };

  // Stack for Splash and Home Screen
  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={DrawerNavigator}/>
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}