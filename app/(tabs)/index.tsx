import React from "react";
import { Link, router } from "expo-router";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import images from "../../assets/images";
import styles from "../../assets/styles/home.style";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image 
          source={images.banner1}
          style={styles.banner}
        />
      </View>

      <View style={styles.textViewWrapper}>
        <Image 
          source={images.aboutourbrand}
          style={styles.aboutBanner}
        />
        <Text style={styles.textWrapper}>
          Quality has always meant expensive in the skin care industry. {"\n"}{"\n"}

          Customers buy products over ignorance-driven deceptive marketing strategies rather than having an informed decision. {"\n"}{"\n"}

          The traditional skin care business has grown into a wide scam many have found themselves spending more money on than they should. {"\n"}{"\n"}

          WE HATE THAT. {"\n"}{"\n"}

          So our revolution sparked.
        </Text>
      </View>
    </ScrollView>
  )
}

export default HomePage;