import { StyleSheet } from 'react-native';
var redColor: '#F33F3F';
var titleColor: '#1a6692';
const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  latestProduct: {
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  latestProductHeader: {
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  latestProductHeaderTitle: {
    fontSize: 28,
  },
  latestProductHeaderButton: {
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#F33F3F',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  latestProductHeaderButtonText: {
    fontSize: 13,
    color: '#F33F3F',
  },
  hrLine: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  latestProductList: {
    marginTop: 25,
  },
  latestProductListItem: {
    borderColor: '#eee',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 30,
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderColor: '#eee',
    borderWidth: 1,
    borderBottomWidth: 0,
    marginTop: 25,
  },
  productInfo: {
    paddingTop: 10,
  },
  productOverall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
  },
  productTitle: {
    color: '#1a6692',
  },
  productPrice: {
    color: '#1a6692',
  },
  productDescription: {
    marginTop: 10,
  },
  shortAbout: {
    marginTop: 100,
    marginBottom: 80,
  },
  shortAboutTitle: {
    fontSize: 28,
  },
  shortAboutContent: {
    marginTop: 50,
  },
  shortAboutContentTitle: {
    color: '#1a6692',
    fontSize: 17,
    fontWeight: '600',
  },
  shortAboutContentDescription: {
    marginTop: 30,
  },
  buttonReadMore: {
    marginTop: 20,
  },
  troll:{
    padding:60,
  },
});

export default styles;
