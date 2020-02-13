import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthContext);
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
            {
                state.errorMessage ? <Spacer><Text style={styles.errorMessage} >{state.errorMessage}</Text></Spacer> : null
            }
            <Spacer>
                <Button title="Sign Up" onPress={() => signUp({ email, password })} />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.btnBackText}>Already have an account? Sign in instead</Text>
            </TouchableOpacity>
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
    },
    errorMessage: {
        color: 'red',
        fontSize: 16
    },
    btnBackText: {
        textAlign: 'center',
        color: 'blue'
    }
});

export default SignUpScreen;