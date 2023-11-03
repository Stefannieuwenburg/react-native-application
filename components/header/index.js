import { StyleSheet, Text, View, StatusBar} from 'react-native';
//import styles from "./components/styles/index.js";
const Header = ()=> {
  return (
   <View style={styles.header}>
    <Text style={styles.text}>React Native</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
  
});
export default Header;