import { StyleSheet } from 'react-native';

const redColor = '#F33F3F';

const styles = StyleSheet.create({
    nav__container: {
        backgroundColor: '#232323',
        width: '100%',
        position: 'absolute', // React Native uses 'absolute' instead of 'fixed'
        top: 0,
        padding: 30,
        paddingHorizontal: 15,
        zIndex: 999,
      },
    nav__logo: {
        marginLeft: 150,
        fontSize: 24,
        fontWeight: '700',
        width: '50%',
        flexDirection: 'row',
      },
      logoText1: {
        color: '#fff',
      },
      logoText2: {
        color: redColor,
      },
      nav__row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      nav__list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginRight: 150,
      },
      nav__list__item: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
      },
      nav__list__item__active: {
        color: redColor,
      },
});

export default styles;
