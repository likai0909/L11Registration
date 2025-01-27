import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Success = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Successful!</Text>
            <Text style={styles.message}>Thank you for registering for the contest.</Text>
            <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Success;
