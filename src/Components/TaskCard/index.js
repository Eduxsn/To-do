import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TaskCard(props) {
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View style={styles.checkName}>
                    <View style={styles.checkCard}></View>
                    <Text style={styles.itemName}>{props.taskName}</Text>
                </View>
                <View>
                    <View style={styles.circle}></View>
                </View>

                

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#0000001A',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    checkName: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        flex: 'wrap',
        maxWidth: '80%'
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
    },
    circle: {
        height: 12,
        width: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        marginRight: 15,
        borderRadius: 3
    }
})