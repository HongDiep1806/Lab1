import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

function EmployeeForm (props){
    const [fullName, setFullName] = useState(props.fullName || '');
    const [age, setAge] = useState(props.age ||'');
    const [occupation, setOccupation] = useState(props.occupation ||'');
    
    const handleUpdateAction = ()=> {
        if (fullName!== '' && age!== '' && occupation !== '') {            
            Alert.alert('Success', `Employee ${fullName} updated successfully!`);
        } else {
            Alert.alert('Error', 'Please fill all the fields.');
        }
    };
    
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={age}
                    onChangeText={setAge}
                    keyboardType='numeric'
                />
            </View>
            
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Occupation:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Occupation"
                    value={occupation}
                    onChangeText={setOccupation}
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <Button title="Update" onPress={handleUpdateAction} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15, 
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20, 
        textAlign: 'center'
    },
    inputGroup: {
        marginBottom: 15, 
    },
    label: {
        fontSize: 16,
        marginBottom: 5, 
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1, 
        paddingHorizontal: 10, 
        borderRadius: 5, 
    },
    buttonContainer: {
        marginTop: 20, 
    }
});

export default EmployeeForm;