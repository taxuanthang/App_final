import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contact: {
    marginBottom: 10,
  },
  contactBlock: {
    padding:25,
  },
  ul: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon:{
    marginRight:30,
    marginLeft:30,
  },
  li: {
    marginRight: 20,
    width: 60,
    height: 60,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  liHover: {
    backgroundColor: '#f33f3f',
    color: '#fff',
  },
  contactHeading: {
    fontSize: 28,
    fontWeight: '500',
  },
  iframe: {
    marginTop: 60,
  },
  contactTitle: {
    marginTop: 60,
    color: '#1a6692',
    fontSize: 22,
  },
  contactDescription1: {
    marginTop: 30,
  },
  contactDescription2: {
    marginTop: 30,
  },
  contactFormHeading: {
    fontSize: 28,
  },
  contactFormBlock: {
    margin:10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  contactFormMessage: {
    height: 150,
    // verticalAlign: 'top' // Not needed in React Native
  },
});

export default styles;
