import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
});

class Users extends Component {
    render () {
        return (
            <View>
                <Text onPress=>Users</Text>
            </View>
        );
    }
}

export default Users;