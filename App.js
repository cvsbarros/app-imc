import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import Footer from './src/components/Footer/';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Footer/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e0e5f5', paddingTop: 80,},
})


