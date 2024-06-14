
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  iconButton: {
    display: 'flex',
    marginHorizontal: 'auto',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    height:60,
    width:60,
    justifyContent: 'center',
  },
  iconButtonPressed: {
    backgroundColor: '#ff0000',
    borderColor: '#000',
  },
});


export default styles;
