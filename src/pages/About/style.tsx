import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerDescription: {
    fontSize: 18,
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  hrLine: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  contentImage: {
    alignItems: 'center',
    marginBottom: 20,
  },
  featureImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  contentText: {
    paddingHorizontal: 20,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a6692',
    marginBottom: 10,
  },
  contentDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  block: {
    flex:1,
  },
  memberItem: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width:'34%',
    height: 400,
  },
  memberImage: {
    alignItems: 'center',
    width: '70%',
    height: 200,
    borderRadius: 10,
  },
  memberInfo: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  memberName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a6692',
  },
  memberPosition: {
    fontSize: 18,
    color: '#F33F3F',
  },
  memberDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
  },
});

export default styles;
