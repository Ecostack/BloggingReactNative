import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

var Root = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.quarterHeight}></View>
        <View style={[styles.quarterHeight, {backgroundColor: 'red'}]}></View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: 'yellow'
    }
});

export default Root;