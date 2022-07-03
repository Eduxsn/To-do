import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TaskCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.checkName}>
                <View style={styles.checkCard}></View>
                <Text style={styles.itemName}>{props.taskName}</Text>
            </View>

            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
    },
    checkName: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    checkCard:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF666',
        borderRadius: 5,
    },
    itemName: {
        fontSize: 14,
        paddingLeft: 15,
        // paddingVertical: 18
    }
})