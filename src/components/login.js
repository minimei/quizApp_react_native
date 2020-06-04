import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render(){
        return (
            <KeyboardAvoidingView behaviour= "padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require('../../images/Octocat.png')}/>

                    <Text style={styles.title}>Brain Buzz</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3498db'

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow:1,
        justifyContent: 'center'
    },
    logo: {
        width: 128,
        height:56,

    
    title:{
        color: '#f7c744',
        fontSize:18,
        textAlign: 'center',
        marginTop:5,
        opacity:0.9
    }
}

});