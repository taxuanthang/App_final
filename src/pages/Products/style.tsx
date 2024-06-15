import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    categoryList: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 16,
    },
    categoryItem: {
      padding: 8,
    },
    activeCategory: {
      borderBottomWidth: 2,
      borderBottomColor: "#F33F3F",
    },
    productItem: {
      flex: 1,
      padding: 8,
      marginBottom: 16,
    },
    thumbnail: {
      width: "100%",
      height: 150,
      resizeMode: "cover",
    },
    productDetails: {
      marginTop: 8,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    price: {
      fontSize: 14,
      color: "#888",
    },
    description: {
      fontSize: 12,
      color: "#666",
    },
    columnWrapper: {
      justifyContent: "space-between",
    },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 16,
    },
    pageItem: {
      padding: 8,
      marginHorizontal: 4,
    },
    activePage: {
      backgroundColor: "#ddd",
    },
  });

export default styles;
