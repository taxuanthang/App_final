import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
  html: {
    position: 'relative',
    height: '100%',
  },
  body: {
    position: 'relative',
    height: '100%',
    marginTop: 88,
    backgroundColor: '#eee',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: 14,
    color: '#000',
    margin: 0,
    padding: 0,
  },
  swiper: {
    width: '100%',
    height: '100%',
  },
  swiperSlide: {
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  swiperSlideImg: {
    display: 'none',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  swiperPaginationBullet: {
    width: 10,
    height: 10,
    zIndex: 100,
    opacity: 0.8,
  },
  swiperPaginationBulletActive: {
    backgroundColor: '#fff',
  },
  imageHolder: {
    position: 'relative',
  },
  imageDesc: {
    position: 'absolute',
  },
  imageHolderBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  imageTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: '700',
    color: '#F33F3F',
  },
  imageDescription: {
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 62,
    color: '#fff',
    marginTop: 30,
    fontWeight: '700',
  },
});

export default styles;
