import { StyleSheet, Text, View} from 'react-native';
const Footer = () => {
    return (
    <View style={styles.footerbox}>
      <Text style={styles.text} >https://github.com/Stefannieuwenburg </Text>
    </View>
  ); 
}
const styles = StyleSheet.create({
  footerbox: {
    height: 60,
    backgroundColor: '#006400',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
  
});
export default Footer;