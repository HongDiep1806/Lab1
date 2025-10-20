import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function HailstoneSequence(props) {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const handleGenerate = () => {
    let n = parseInt(number);
    if (isNaN(n) || n <= 0) {
      setSequence(['Please enter a positive number']);
      return;
    }

    const seq = [n];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      seq.push(n);
    }
    setSequence(seq);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>Hailstone Sequence</Text>

      <Text>Enter a positive number:</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />

      <Button title="Generate Sequence" onPress={handleGenerate} />

      <ScrollView style={styles.resultBox}>
        {sequence.length > 0 && (
          <Text style={styles.result}>
            {sequence.join(' → ')}
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

export default HailstoneSequence;

const styles = StyleSheet.create({
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
    width: 150,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  resultBox: {
    marginTop: 15,
    maxHeight: 200,
    width: '90%',
  },
  result: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
});
