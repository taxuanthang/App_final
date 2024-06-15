import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import HrLine from "../../Components/HorizontalLine";
import Header from "../../Components/Header";
import styles from "./style";

const Products = () => {
  const limit = 6;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [quantityPage, setQuantityPage] = useState(0);
  const [url, setUrl] = useState("http://localhost:5000/products");
  const [categoryActive, setCategoryActive] = useState("");

  useEffect(() => {
    fetchData(url)
    .then((res) => {
      res.json()
    })
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, [url, pageActive]);

  const fetchData = async (url) => {
    try {
      let response1, response2;
      if (url === "http://localhost:5000/products") {
        response1 = await fetch(`${url}`);
        response2 = await fetch(`${url}?_start=${limit * pageActive}&_limit=${limit}`);
      } else {
        response1 = await fetch(`${url}`);
        response2 = await fetch(`${url}&_start=${limit * pageActive}&_limit=${limit}`);
      }

      if (!response1.ok) {
        throw new Error("Network response was not ok");
      }
      const result1 = await response1.json();
      const result2 = await response2.json();
      setData(result2);
      setQuantityPage(Math.ceil(result1.length / limit));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchProduct = (category) => {
    setPageActive(0);
    setCategoryActive(category);
    setUrl(category === "" ? "http://localhost:5000/products" : `http://localhost:5000/products?category=${category}`);
  };

  const handleClickPagi = (pageIndex) => {
    setPageActive(pageIndex);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.productDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="NEW ARRIVALS" description="CELLPHONE PRODUCTS" url="https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/products-heading.jpg" />
      <View style={styles.categoryList}>
        <TouchableOpacity onPress={() => handleFetchProduct("")} style={[styles.categoryItem, categoryActive === "" && styles.activeCategory]}>
          <Text>All Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFetchProduct("smartphones")} style={[styles.categoryItem, categoryActive === "smartphones" && styles.activeCategory]}>
          <Text>Iphone</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFetchProduct("samsung")} style={[styles.categoryItem, categoryActive === "samsung" && styles.activeCategory]}>
          <Text>Samsung</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFetchProduct("oppo")} style={[styles.categoryItem, categoryActive === "oppo" && styles.activeCategory]}>
          <Text>Oppo</Text>
        </TouchableOpacity>
      </View>
      <HrLine />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
      <View style={styles.pagination}>
        {[...Array(quantityPage)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleClickPagi(index)} style={[styles.pageItem, pageActive === index && styles.activePage]}>
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Products;
