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

import Tab4Page1 from '../Tab4Pages/Tab4Page1'
import Tab4Page2 from '../Tab4Pages/Tab4Page2'
import Tab4Page3 from '../Tab4Pages/Tab4Page3'
import Tab4Page4 from '../Tab4Pages/Tab4Page4'


var {height, width} = Dimensions.get('window');
class Tab4 extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.button}
        
        onPress={ () => navigate('Tab4Page1')}
        >
          <Text>
            Page1
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        
        onPress={ () => navigate('Tab4Page2')}
        >
          <Text>
            Page2
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        
        onPress={ () => navigate('Tab4Page3')}
        >
          <Text>
            Page3
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        
        onPress={ () => navigate('Tab4Page4')}
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
    alignItems:'center',
    justifyContent:'center',
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
const Tab4Pages = StackNavigator({
 
  Tab4:{screen:Tab4},
  Tab4Page1: { screen: Tab4Page1 },
  Tab4Page2: { screen: Tab4Page2 },
  Tab4Page3: { screen: Tab4Page3 },
  Tab4Page4: { screen: Tab4Page4 },



},
);
export default  Tab4Pages;