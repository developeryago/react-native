import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return (
    <View style={styles.line} />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000', // cor da linha
    marginVertical: 10, // espaço vertical
    marginBottom: 25,
  },
});

export default HorizontalLine;
