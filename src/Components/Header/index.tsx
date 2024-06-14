import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./style";

const Header = ({ title, description, url }) => {
  return (
    <View style={styles.heading}>
      <Image source={{ uri: url }} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
