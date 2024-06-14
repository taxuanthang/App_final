
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwiperComp from "../../Components/Swiper";
import HrLine from "../../Components/HorizontalLine";
import styles from "./style";

const Home = ({}) => {
  const [latestProduct, setLatestProduct] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/products?_start=10&_end=19");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLatestProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      <SwiperComp />
      <View style={styles.latestProduct}>
        <View style={styles.latestProductHeader}>
          <View>
            <Text style={styles.latestProductHeaderTitle}>Latest Products</Text>
          </View>
          <View style={styles.latestProductHeaderButton}>
            {/* <FontAwesome name="chevron-right" size={20} /> */}
            <TouchableOpacity onPress={() => {navigation.navigate('About')}}>
              <Text style={styles.latestProductHeaderButtonText}>VIEW ALL PRODUCTS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <HrLine />
        <View style={styles.latestProductList}>
          {latestProduct.map((item, index) => (
            <View key={index}>
              <Image source={{ uri: item.thumbnail }} />
              <View style={styles.latestProductListItem}>
                <View style ={styles.productOverall}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productPrice}>${item.price}</Text>
                </View>
                <Text style={styles.productDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.shortAbout}>
        <View >
          <Text style={styles.shortAboutTitle}>About Sixteen Clothing</Text>
        </View>
        <HrLine />
        <View style={styles.shortAboutContent}>
          <View>
            <Text style={styles.shortAboutContentTitle}>Discover the Best Mobile Devices</Text>
            <Text style={styles.shortAboutContentDescription}>
              Welcome to our store, your ultimate destination for the latest and greatest mobile devices. Our template is free to use for your business websites. However, please note that you do not have permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more information.
            </Text>
            <View style={styles.shortAboutContentDescription}>
              <Text>• Cutting-edge smartphones</Text>
              <Text>• High-performance tablets</Text>
              <Text>• Accessories for every device</Text>
              <Text>• Expert customer service</Text>
              <Text>• Competitive prices and special offers</Text>
            </View>
            <Button title="Read More" onPress={() => {}} />
          </View>
          <View >
            <Image
              source={{ uri: "https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/feature-image.jpg" }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default Home;
