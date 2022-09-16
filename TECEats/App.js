import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator 
      
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="home" component={Home} />
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
// export default function App() {
//   return (
//     <View style={styles.centered}>
//       <Text style={styles.title}>Center a View Component</Text>
//       <Text style={styles.subtitle}>Using Flexbox</Text>
//     </View>
//   );
// }
  
// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffc2c2",
//   },
//   title: {
//     fontSize: 18,
//     marginVertical: 2,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#888",
//   },
// });
