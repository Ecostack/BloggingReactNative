import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Navigator,
    TouchableHighlight
} from 'react-native';


// Styles
import variables from '../../styles/variables';
import postStyle from '../../styles/posts';

const Row = (props) => (
    <View style={postStyle.container}>
        <Text style={postStyle.title}>{props.title}</Text>
        <Text style={postStyle.content}>{props.content}</Text>
    </View>
);

class Posts extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    title: 'Stars are spinning around your head?',
                    content: 'Maybe the earth started to rotate in a much faster way, keep calm. It does not take long till every the earth as we know it wil change to something very cruel.'
                },
                {
                    title: 'React native, the new hotness',
                    content: 'Some one needs to explain what is hot about this stuff'
                }
            ]),
        };
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Row {...data} />}
                />
            </View>
        );
    }
}

export default class PostNavigator extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: 'My Initial Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <Posts
                        title={route.title}

                        // Function to call when a new scene should be displayed
                        onForward={ () => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}

                        // Function to call to go back to the previous scene
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}

// export default Posts;