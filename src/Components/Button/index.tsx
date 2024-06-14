import React, { useState } from 'react';
import {Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = props=> {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity 
      id= {props.id}
      style={isPressed ? [styles.btnn, styles.btnnPressed] : styles.btnn}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text style={styles.btnnText}>{props.value}</Text>
    </TouchableOpacity>
  );
};


export default Button;
