import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';

// Styles
import variables from './styles/variables';
import mainStyle from './styles/main';

// Components
import Loading from './components/loading';
import Users from './components/users/users';
import Posts from './components/posts/posts';

const scenes =  Actions.create(
    <Scene key="root">
        <Scene key="loading" component={Loading}/>
        <Scene key="users" component={Users} title="Users"/>
        <Scene key="posts" component={Posts} title="Posts" initial/>
    </Scene>
);

class App extends Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default App;