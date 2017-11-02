/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            width: 208,
            height: 29,
            top: 0,
            alignSelf: 'center',
            backgroundColor: '#900',
            borderBottomLeftRadius: 21,
            borderBottomRightRadius: 21,
            overflow: 'hidden',
            alignItems: 'stretch',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}
          >
            LOVE DAT NOTCH 😍
          </Text>
        </View>
        <Text style={styles.welcome}>
          Have you ever thought
        </Text>
        <Text style={styles.welcome}>
          what's behind the notch?
        </Text>
      </View>
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
