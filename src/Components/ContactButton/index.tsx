import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose other icon sets too
import styles from './style';

const ContactButton = ({ iconName, iconSize, iconColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={isPressed ? [styles.iconButton, styles.iconButtonPressed] : styles.iconButton}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      
    >
      <Icon name={iconName} size={iconSize} color={isPressed ? '#000000' : iconColor} />
    </TouchableOpacity>
  );
};

export default ContactButton;
