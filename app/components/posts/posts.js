import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});


const stylesRow = StyleSheet.create({
        container: {
            flex: 1,
            padding: 12,
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderBottomColor: 'black',
            borderBottomWidth: 1
        },
        title: { marginLeft: 12, fontSize: 50},
        content: {marginTop: 20, marginLeft: 12, fontSize: 16},
    })
    ;

const Row = (props) => (
    <View style={stylesRow.container}>
        <Text style={stylesRow.title}>{props.title}</Text>
        <Text style={stylesRow.content}>{props.content}</Text>
    </View>
);

class Posts extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {title: 'Stars are spinning around your head?', content: 'Maybe the earth started to rotate in a much faster way, keep calm. It does not take long till every the earth as we know it wil change to something very cruel.'},
                {title: 'React native, the new hotness', content: 'Some one needs to explain what is hot about this stuff'}
            ]),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
            />
        );
    }
}

export default Posts;