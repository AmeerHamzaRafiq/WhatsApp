import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Status() {
    return (
        <View style={styles.container}>
            <Text style={styles.statusText}>Here Status will come</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Status;
