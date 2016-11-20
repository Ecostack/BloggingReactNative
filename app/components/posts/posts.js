import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

// Styles
import variables from '../../styles/variables';
import postStyle from '../../styles/posts';

class Posts extends Component  {
    render () {
        return (
            <View>
                <Text>Posts</Text>
            </View>
        );
    }
}

export default Posts;