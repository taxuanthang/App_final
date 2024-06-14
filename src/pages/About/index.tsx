import React,{ useRef } from 'react';
import { View, Text, Image, ScrollView, FlatList,TouchableOpacity  } from 'react-native';
import HrLine from "../../Components/HorizontalLine";
import styles from "./style"
import ContactButton from '../../Components/ContactButton';
const backgroundUrl = 'https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/about-heading.jpg';

const teamMembers = [
  {
    id: '1',
    name: 'Tạ Xuân Thắng',
    position: 'Tù trưởng',
    description: 'A highly experienced professional who consistently strives for excellence in his work and continuously seeks to improve himself.',
    imageUrl: 'https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/team_01.jpg',
  },
  {
    id: '2',
    name: 'Trần Danh Kiệt',
    position: 'CEO',
    description: 'A dedicated and proactive team member, always ready to take on new challenges and contribute innovative ideas.',
    imageUrl: 'https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/team_05.jpg',
  },
  {
    id: '3',
    name: 'Hoàng Ngọc Thành',
    position: 'Tù Phó',
    description: 'A reliable and detail-oriented employee, known for her strong work ethic and commitment to delivering high-quality results.',
    imageUrl: 'https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/team_03.jpg',
  },
];


const About = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleScroll = (index) => {
    setCurrentIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index });
  };
  const handleNext = () => {
    if (currentIndex < teamMembers.length - 1) {
      handleScroll(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      handleScroll(currentIndex - 1);
    }
  };
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: backgroundUrl }} style={styles.headerImage} />
        <Text style={styles.headerTitle}>About us</Text>
        <Text style={styles.headerDescription}>our team</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Background</Text>
      </View>
      <HrLine />


      <View style={styles.section}>
        <View style={styles.contentImage}>
          <Image source={{ uri: 'https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/feature-image.jpg' }} style={styles.featureImage} />
        </View>
        <View style={styles.contentText}>
          <Text style={styles.contentTitle}>Who we are & What we do?</Text>
          <Text style={styles.contentDescription}>We are a dynamic and innovative company dedicated to providing top-tier solutions in the tech industry. Our team consists of highly skilled professionals who are passionate about leveraging technology to solve real-world problems.</Text>
          <Text style={styles.contentDescription}>At our company, we specialize in developing cutting-edge software and hardware solutions tailored to meet the unique needs of our clients. From custom software development to IT consulting, we offer a comprehensive range of services designed to enhance operational efficiency and drive business growth.</Text>
          <HrLine/>
          <View style={styles.socialIcons}>
          <ContactButton iconName='facebook' iconSize={40} iconColor='black'/>
          <ContactButton iconName='twitter' iconSize={40} iconColor='black'/>
          <ContactButton iconName='linkedin' iconSize={40} iconColor='black'/>
          <ContactButton iconName='instagram' iconSize={40} iconColor='black'/>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OUR TEAM MEMBER</Text>
      </View>

      
      <HrLine />
      <View style = {styles.table}>
      <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <FlatList
        ref={(ref) => { flatListRef.current = ref; }}
        data={teamMembers}
        renderItem={({ item }) => (
          <View style={styles.block}>
          <View style={styles.memberItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.memberImage} />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberPosition}>{item.position}</Text>
                <Text style={styles.memberDescription}>{item.description}</Text>
            </View>
          </View>
          </View>
        )}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

export default About;
