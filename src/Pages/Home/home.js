import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { TaskCard } from '../../Components/TaskCard/index';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 94;


export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today`s tasks</Text>
            <TaskCard taskName="Like"/>
            <TaskCard taskName="Comprar pão"/>
            <TaskCard taskName="Deploy app"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        paddingHorizontal: 20,
    },
    title: {
        paddingTop: statusBarHeight,
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 30,
    },
    
})