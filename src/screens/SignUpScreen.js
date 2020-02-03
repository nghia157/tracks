import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false} />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry
                autoCorrect={false} />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </View>
    );
}

SignUpScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 220
    }
});

export default SignUpScreen;