import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/pages/home/Home';
import Payment from './components/pages/payment/Payment';
import Review from './components/pages/review/Review';



export default function App() {
  return (
    <View style={styles.container}>

      <Home />
      {/* <Review/> */}
      {/* <Payment/> */}

    </View>



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
