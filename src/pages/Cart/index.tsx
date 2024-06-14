import React from 'react';
import { View, StyleSheet } from 'react-native';

const Cart = () => {
  return ( 
    <View style={styles.container}>
      {/* Your cart content goes here */}
      <View style={styles.block} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     // Center vertically
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: 'red',   // Example background color
  },
});

export default Cart;
