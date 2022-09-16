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
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator 
      
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="home" component={OptionUsers} />
        <Stack.Screen name="details" component={Details} />
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

