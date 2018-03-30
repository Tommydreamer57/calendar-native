import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class CreateQuestion extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }
    static navigationOptions = {
        title: "Create Question"
    }
    render() {
        console.log(this.props)
        const { navigation } = this.props
        const { navigate, state } = navigation
        const { params } = state
        return (
            <View style={styles.container}>
                <Text>This is the CreateQuestion view</Text>
                <TextInput
                    style={styles.input}
                    placeholder="type your question here"
                    onChangeText={input => this.setState({ input })}
                />
                <Button
                    title="Submit Question"
                    onPress={() => { params.submit(this.state.inputText); navigation.goBack() }}
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
    },
    input: {
        height: 50,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1
    }
})
