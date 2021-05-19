import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Facebook extends React.Component {
  render() {
    return(
    <View>
    <Image style={styles.image}
     source={{
        uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Ffacebook-logo%2F&psig=AOvVaw2LquS-bCjPzPSrmWYHFLO_&ust=1621503495595000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND_obG51fACFQAAAAAdAAAAABAI',
     }}
     />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width:50,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200
  },
});