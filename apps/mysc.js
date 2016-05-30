import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid
} from 'react-native';


class testeee extends Component
{
    
   constructor() {
       super();
    this.state = { 
    value:"prinju"        
    
/* initial state */ };
  }

   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
{this.state.value}</Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
                      <ToolbarAndroid
                        title={this.props.title}
                        titleColor={'#FFFFFF'}/>

        
      </View>

       );
  }
   
}