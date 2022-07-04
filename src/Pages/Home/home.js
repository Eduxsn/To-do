import React, { useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, TextInput, ScrollView, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TaskCard } from '../../Components/TaskCard/index';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 94;


export function Home() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let storedItens = [...taskItems];
        storedItens.splice(index, 1);
        setTaskItems(storedItens);
    }

    return (
        
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <Text style={styles.title}>Today`s tasks</Text>
                {
                    taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <TaskCard taskName={item} />

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 50 : 50}
            >
                <View style={styles.bottomArea}>
                    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

                    <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={() => handleAddTask()}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    bottomArea: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',

    },
    input: {
        backgroundColor: '#FFF',
        width: 260,
        paddingVertical: 15,
        paddingHorizontal: 85,
        borderRadius: 60
    },
    button: {
        backgroundColor: '#FFF',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
    },
    buttonText: {
        fontSize: 40,
        color: '#C0C0C0'
    },
    contentContainer: {
        marginBottom: 140,
    }
})