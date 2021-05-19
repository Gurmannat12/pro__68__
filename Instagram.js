import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Instagram extends React.Component {
  render() {
    return(
    <View>
    <Image style={styles.image}
     source={{
        uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F743868063433238746%2F&psig=AOvVaw35j6TAhaCoKrlAX51wp7GT&ust=1621503707267000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj89ZW61fACFQAAAAAdAAAAABAD',
     }}
     />
     <Text>Facebook</Text>
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