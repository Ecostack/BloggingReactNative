import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';

const styles = StyleSheet.create({
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
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
    </View>
);