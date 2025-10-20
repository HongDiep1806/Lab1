import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
function Sum2DigitOfNumber(props) {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const handleSum = () => {
    const nums = number.toString();
    if(nums.length < 2){
      setResult('Please enter at least 2 digits');
      return;
    }
    const sum = parseInt(nums[0]) + parseInt(nums[nums.length - 1]);
    setResult(sum);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>The sum of 2 digits</Text>

      <Text>Enter a number:</Text>
      <TextInput style={styles.input} value={number} onChangeText={setNumber} />

      <View style={styles.button}>
        <Button title="Calculate Sum" onPress={handleSum} />
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
    width: 120,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
  result: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
});

export default Sum2DigitOfNumber;
