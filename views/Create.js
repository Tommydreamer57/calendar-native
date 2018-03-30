import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

export default class Create extends Component {
    static navigationOptions = {
        title: "Create"
    }
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }
    submitQuestion = q => {
        let questions = Object.assign([], this.state.questions)
        questions.push(q)
        this.setState({
            questions
        })
    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>This is the Create Survey view</Text>
                    <Button
                        color="blue"
                        title="create question"
                        onPress={() => this.setState({ questions: Object.assign([], [...this.state.questions, "what?"]) })}
                    />
                    {
                        this.state.questions.map(q => <Text>{q}</Text>)
                    }
                    {/* <Button
                        title="go to Create Question view"
                        onPress={() => navigate('CreateQuestion', { submit: this.submitQuestion })}
                    /> */}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50
    },
    button: {
        padding: 5,
        borderColor: 'blue',
        borderWidth: 1
    }
})
