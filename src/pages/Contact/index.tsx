import React from 'react';
import { View,Image, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Make sure to replace with appropriate icons for React Native
import styles from "./style"
import Header from "../../Components/Header";
import Button from "../../Components/Button"
import HrLine from '../../Components/HorizontalLine';
import ContactButton from '../../Components/ContactButton';
// Import your custom components here if needed

const App = () => {
  const backgroundUrl = "https://templatemo.com/templates/templatemo_546_sixteen_clothing/assets/images/contact-heading.jpg";
    // còn thiếu MAPPPPPPPPPPPPPPPPPPP
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header
          title="CONTACT US"
          description="LET’S GET IN TOUCH"
          url={backgroundUrl}
        />
        {/* Contact Block */}
        <View style={styles.contactBlock}>
          {/* Map Section */}
          <View>
            <Text style={styles.contactHeading}>Our Location On Maps</Text>
            <HrLine/>
          </View>
          {/* About Office Section */}
          <View>
            <Text style={styles.contactTitle}>About our office</Text>
            <Text style={styles.contactDescription1}>
              Our office is designed to foster creativity and collaboration among team members. Located in the heart of the city, the space features an open-plan layout with modern furnishings and plenty of natural light.
            </Text>
            <Text style={styles.contactDescription2}>
              The office culture is centered around inclusivity and mutual respect, creating a welcoming environment for everyone. Regular team-building activities and social events help strengthen relationships and build a sense of community among staff.
            </Text>
            {/* Social Icons */}
              <HrLine/>
              <View style ={ styles.ul}>
              <ContactButton iconName='facebook' iconSize={40} iconColor='black'/>
              <ContactButton iconName='twitter' iconSize={40} iconColor='black'/>
              <ContactButton iconName='linkedin' iconSize={40} iconColor='black'/>
              <ContactButton iconName='instagram' iconSize={40} iconColor='black'/>
              </View>
              <HrLine/>
          </View>
        </View>
        {/* Contact Form */}
        <View style={styles.contactBlock}>
          <Text style={styles.contactFormHeading}>Send Us A Message</Text>
          {/* Form */}
          <View >
            <TextInput style={styles.contactFormBlock} placeholder="Full Name" />
            <TextInput style={styles.contactFormBlock} placeholder="E-mail Address" />
            <TextInput style={styles.contactFormBlock} placeholder="Your Message" multiline />
            {/* Button */}
            <Button value = "Send Message">
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
