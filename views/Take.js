import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Take extends Component {
    static navigationOptions = {
        title: "Survey"
    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>This is the Take Survey view</Text>
                <Button
                    title="go to Question view"
                    onPress={() => navigate('Question')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
