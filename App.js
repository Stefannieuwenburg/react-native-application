import React from 'react';
import Header from "./components/header/index.js"
import Footer from "./components/footer/index.js"
import Style from './components/style/index.js'
import ArrayData from './components/data/index.js';
import Image from "./components/image/index.js"
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  ImageBackground,
} from 'react-native';


const Item = ({itemName}) => (
  <View style={Style.item}>
    <Text style={Style.textItem}>{itemName}</Text>
  </View>
);

const App = () => {
  
  return (
    <SafeAreaView style={Style.container}>
        <Header />
        <ImageBackground source={Image} resizeMode="cover" style={Style.image}>
      <FlatList
        data={ArrayData}
        renderItem={({item}) => <Item itemName={item.itemName} />}
        keyExtractor={item => item.id}
        />
        <Text style={Style.p}>Hello</Text>
      </ImageBackground>
      <Footer />
    </SafeAreaView>
  );
};



export default App;