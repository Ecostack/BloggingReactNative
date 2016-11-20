import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';
const ScrollableTabView = require('react-native-scrollable-tab-view');

// Components
import Users from './components/users/users';
import Posts from './components/posts/posts';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="users" component={Users} title="Users" initial/>
        <Scene key="posts" component={Posts} title="Posts"/>
    </Scene>
);

class App extends Component {
    render() {
        return (
            <ScrollableTabView scrollWithoutAnimation={false} tabBarPosition={"bottom"}>
                <Users tabLabel='Users'/>
                <Posts tabLabel='Posts'/>
            </ScrollableTabView>
        )
    }
}

/*var Root = React.createClass({
 render() {
 return (
 <View style={styles.container}>
 <View style={styles.header}></View>
 <View style={styles.quarterHeight}></View>
 <View style={[styles.quarterHeight, {backgroundColor: 'red'}]}></View>
 </View>
 );
 }
 });*/

/*const styles = StyleSheet.create({
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
 });*/

export default App;