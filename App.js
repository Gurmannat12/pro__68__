import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';

export default class App extends React.Component {
  render() {
    return(
    <View>
     <AppContainer/>
    </View>
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  Facebook:Facebook,
  Instagram:Instagram
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
