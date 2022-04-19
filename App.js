import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/pages/home/Home';
import Payment from './components/pages/payment/Payment';
import Project from './components/pages/project/Project';
import Review from './components/pages/review/Review';




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        presentation: 'modal',
        headerStyle: {
          backgroundColor: '#111111',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} style={styles.container} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
    backgroundColor: 'black'


  },
  text: {
    color: 'white',

  },


});
