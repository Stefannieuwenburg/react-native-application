import { StyleSheet, StatusBar } from 'react-native';

const style = StyleSheet.create({
   container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#F0FFFF',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    alignItems: 'center',
    
  },
  textItem: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    },
  text: {
    color: '#FF0000',
    fontSize: 20,
    fontStyle: 'italic',
  },
  img: {  
    width: 200,
    height: 200,
  },
  p: {
    padding: 20,
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
    alignContent: 'center',
    fontStyle: 'italic',
    fontSize: 20,
    
  },
});
export default style;