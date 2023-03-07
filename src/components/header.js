import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PixelRatio} from 'react-native';

const heightInPx = 480;
const heightInDp = PixelRatio.roundToNearestPixel(
  heightInPx / PixelRatio.get(),
);

const Header = () => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9DD5C8', '#F8FBFE']}>
        <View style={styles.mainContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.textStyle}>
              Find and Book a{'\n'}Mentor for your 1:1 {'\n'}help today!
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img/mentor4.png')}
            />
            <Image
              style={styles.img2ndStyle}
              source={require('../assets/img/mentor6.png')}
            />
            {/* <Image
              // style={styles.imgStyle}
              source={require('../assets/img/mentor3.png')}
            />
            <Image
              // style={styles.imgStyle}
              source={require('../assets/img/mentor4.png')}
            />
            <Image
              // style={styles.imgStyle}
              source={require('../assets/img/mentor5.png')}
            />
            <Image
              // style={styles.imgStyle}
              source={require('../assets/img/mentor7.png')}
            /> */}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    height: heightInDp,
  },
  leftContainer: {
    width: '50%',
    marginTop: 63,
    marginLeft: 10,
  },

  textStyle: {
    color: '#1C2D56',
    fontSize: 20,
  },

  rightContainer: {
    width: '50%',
  },
  imgStyle: {
    width: 60,
    height: 60,
    marginTop: 28,
    marginLeft: 100,
  },
  img2ndStyle: {
    width: 60,
    height: 60,
  },
});
