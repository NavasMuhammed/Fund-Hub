import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/body/Body';
import Topbar from './components/topbar/Topbar';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Topbar />
      <Body />

    </View>

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    paddingTop:35,
    
    backgroundColor: 'black'
   
    
  },
  text: {
    color: 'white',

  },
  

});
