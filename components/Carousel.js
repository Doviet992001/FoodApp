import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Swiper from 'react-native-swiper'
import { images } from "../assets/contants";


const Carousel = () => {

  return (
    <View>
      <View style={styles.OfferSlider}>
        <Swiper autoplay={true} autoplayTimeout={5}>
          <View style={styles.slider}>
            <Image
            style={styles.image}
            source={images.sliderImg1}/>
          </View>
          <View style={styles.slider}>
            <Image
            style={styles.image}
            source={images.sliderImg2}/>
          </View>
          <View style={styles.slider}>
            <Image
            style={styles.image}
            source={images.sliderImg3}/>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
    OfferSlider: {
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      borderRadius: 20
    }
  })
