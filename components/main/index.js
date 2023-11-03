import { StyleSheet, Text, View} from 'react-native';
//import styles from "./components/styles/index.js";
const Main =()=> {
  return (
    <View style={styles.main}>
      <Text style={styles.text} >page 1</Text>
      <Text style={styles.text} >page 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 120,
    backgroundColor: '#A52A2A',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
  
});
export default Main;