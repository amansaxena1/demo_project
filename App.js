import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SingleItem from './components/SingleItem';

export default function App() {
  return (
    <View style={styles.container}>
      <SingleItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b4d5f0',
  },
});
