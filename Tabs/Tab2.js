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

import Tab2Page1 from '../Tab2Pages/Tab2Page1'
import Tab2Page2 from '../Tab2Pages/Tab2Page2'
import Tab2Page3 from '../Tab2Pages/Tab2Page3'
import Tab2Page4 from '../Tab2Pages/Tab2Page4'
var {height, width} = Dimensions.get('window');
class Tab2 extends Component {
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
        onPress={ () => navigate('Tab2Page1')}
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
        onPress={ () => navigate('Tab2Page2')}
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
        onPress={ () => navigate('Tab2Page3')}
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
        onPress={ () => navigate('Tab2Page4')}
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
const Tab2Pages = StackNavigator({
  Tab2:{screen:Tab2},
  Tab2Page1: { screen: Tab2Page1 },
  Tab2Page2: { screen: Tab2Page2 },
  Tab2Page3: { screen: Tab2Page3 },
  Tab2Page4: { screen: Tab2Page4 },
  })

  export default  Tab2Pages;