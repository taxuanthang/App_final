import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: 200, // Adjust height as needed
        resizeMode: "cover",
      },
      content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 30,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black background
      },
    heading: {
      padding: 0,
      textAlign: 'center',
      backgroundColor: '#fff', // Background color can't be transparent in React Native
      // Adjust other styles as needed
    },
    title: {
      fontSize: 22,
      color: '#f33f3f', // Red color
      fontWeight: '700',
      marginBottom: 20,
      textTransform: 'uppercase',
    },
    description: {
      fontSize: 40,
      color: '#fff',
      textTransform: 'uppercase',
    },
  });
  export default styles;
  