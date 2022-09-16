import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
import Cart from './src/components/Cart';
import Login from './src/components/Login';
import Register from './src/components/Register';
import AddItem from './src/components/AddItem';
import OptionUsers from './src/components/OptionUsers';
import HomeUser from './src/components/HomeUser';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator 
      
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="optionUsers" component={OptionUsers} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="HomeUser" component={HomeUser} />
        <Stack.Screen name="Carrito" component={Cart} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

