import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#8C313B',
    color: '#ffffff',
    padding: 10,
    marginTop: 26,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 15
  },
  text: {
    color: '#86797E',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
export default Mybutton;