import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';

const SwiperComp = () => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/advertise');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAdvertisements(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Swiper
      style={styles.swiper}
      showsPagination={true}
    >
      {advertisements.map((item) => (
        <View key={item.id} style={styles.imageTitle}>
          <View style={styles.imageHolder}>
            <Image source={{ uri: item.thumbnail }} />
          </View>
          <View style={styles.imageDesc}>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text style={styles.imageDescription}>{item.description}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
