/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';


class MySceneComponent extends Component
{
    
   constructor() {
       super();
    this.state = { 
    value:"prinju"        
    
/* initial state */ };
  }
  
  navSecond()
  {
      this.state.value = "manoj"
  }

   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
{this.state.value}</Text>
<ToolbarAndroid style={styles.toolbar}   titleColor={'#FFFFFF'}/>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>

      </View>

       );
  }
   
}

class testapp extends Component {
  render() {
    return (
        <Navigator
    initialRoute={{name: 'My First Scene', index: 0}}
    renderScene={(route, navigator) =>
      <MySceneComponent
        name={route.name}
        onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    }
  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testapp', () => testapp);
