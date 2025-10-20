import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import EmployeeForm from './Assignment1';
import Sum2DigitOfNumber from './Assignment2';
import FindMinimumOf3Numbers from './Assignment3';
import HailstoneSequence from './Assignment4';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[styles.container, { paddingTop: safeAreaInsets.top }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.section}>
        <EmployeeForm
          fullName="Diep Tu Thi Hong"
          age="20"
          occupation="Student"
          title="Employee Form"
        />
      </View>

      <View style={styles.section}>
        <Sum2DigitOfNumber />
      </View>

      <View style={styles.section}>
        <FindMinimumOf3Numbers />
      </View>

      <View style={styles.section}>
        <HailstoneSequence />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30, 
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, 
  },
});

export default App;
