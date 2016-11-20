import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

// Styles
import mainStyle from '../styles/main';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    render() {
        return (
            <View style={mainStyle.container}>
            <ActivityIndicator
            animating={this.state.animating}
            style={[{height: 80}]}
            color="red" size="large"
            />
            </View>
        );
    }
}

export default Loading;