/*Custom Text*/
import React from 'react';
import { Text, StyleSheet } from 'react-native';
const Mytext = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    fontWeight: '600',
    textAlign: 'center'
  },
});
export default Mytext;