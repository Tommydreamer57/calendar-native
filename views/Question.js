import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Question extends Component {
    static navigationOptions = {
        title: "create"
    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>This is the Question view</Text>
                <Button
                    title="go to Create Question view"
                    onPress={() => navigate('CreateQuestion', )}
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
        justifyContent: 'center'
    }
})
