import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: "Home Page"
    }
    render() {
        console.log(this.props)
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>This is the home view</Text>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text>go to Create Survey View</Text>   
                </TouchableOpacity>    
                <Button
                    title="go to Create Survey view"
                    onPress={() => navigate('Create')}
                />
                <Button
                    title="go to Take Survey view"
                    onPress={() => navigate('Take')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black',
    }
});