import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <Text>SignUpScreen</Text>
            <Button title="go to signin" onPress={() => navigation.navigate('SignIn')}></Button>
        </>
    );
}

const styles = StyleSheet.create({

});

export default SignUpScreen;