/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

var {height, width} = Dimensions.get('window');
import Tab1Page1 from '../Tab1Pages/Tab1Page1'
import Tab1Page2 from '../Tab1Pages/Tab1Page2'
import Tab1Page3 from '../Tab1Pages/Tab1Page3'
import Tab1Page4 from '../Tab1Pages/Tab1Page4'
class Tab1 extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab1Page1')}
        >
          <Text>
            Page1
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab1Page2')}
         >
          <Text>
            Page2
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }} 
        onPress={ () => navigate('Tab1Page3')}
        >
          <Text>
            Page3
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={{
          width: width-20,
          alignItems:'center',
          margin:10,
          borderWidth:1,
          height: 50
        }}
        onPress={ () => navigate('Tab1Page4')}
        >
          <Text>
            Page4
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const Tab1Pages = StackNavigator({
  Tab1:{screen:Tab1},
  Tab1Page1: { screen: Tab1Page1 },
  Tab1Page2: { screen: Tab1Page2 },
  Tab1Page3: { screen: Tab1Page3 },
  Tab1Page4: { screen: Tab1Page4 },
  });

  export default  Tab1Pages;