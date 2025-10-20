import React, {useState} from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
function FindMinimumOf3Numbers(props) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [result, setResult] = useState(null);
    const handleFindMinimum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      setResult('Please enter valid numbers in all fields');
      return;
    }
    if (n1 == null || n2 == null || n3 == null) {
      setResult('Please enter all three numbers');
      return;
    }  
    const min = Math.min(n1, n2, n3);
    setResult(min);
  };
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>Find the Minimum of 3 Numbers</Text>
      <Text>Enter number 1:</Text>
      <TextInput style={styles.input} value={num1} onChangeText={setNum1} keyboardType='numeric' />
      <Text>Enter number 2:</Text>
      <TextInput style={styles.input} value={num2} onChangeText={setNum2} keyboardType='numeric' />
      <Text>Enter number 3:</Text>
      <TextInput style={styles.input} value={num3} onChangeText={setNum3} keyboardType='numeric' />
      <Button title="Find Minimum" onPress={handleFindMinimum} />
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

export default FindMinimumOf3Numbers;
