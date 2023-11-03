import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

const App =()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo world</Text>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.img}
      />
      <StatusBar style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FF0000',
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  }
});
export default App;