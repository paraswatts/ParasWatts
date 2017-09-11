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

import Tab3Page1 from '../Tab3Pages/Tab3Page1'
import Tab3Page2 from '../Tab3Pages/Tab3Page2'
import Tab3Page3 from '../Tab3Pages/Tab3Page3'
import Tab3Page4 from '../Tab3Pages/Tab3Page4'
class Tab3 extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigate('Tab3Page1')}
        >
          <Text>
            Page1
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigate('Tab3Page2')}
        >
          <Text>
            Page2
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigate('Tab3Page3')}
        >
          <Text>
            Page3
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigate('Tab3Page4')}
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
  },
  button:{
    width: width-20,
    alignItems:'center',
    margin:10,
    borderWidth:1,
    justifyContent:'center',
    height: 50
  }
});


const Tab2Pages = StackNavigator({
  Tab3:{screen:Tab3},
  Tab3Page1: { screen: Tab3Page1 },
  Tab3Page2: { screen: Tab3Page2 },
  Tab3Page3: { screen: Tab3Page3 },
  Tab3Page4: { screen: Tab3Page4 },




},
);
export default  Tab2Pages;