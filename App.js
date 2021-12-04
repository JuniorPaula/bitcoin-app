import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationsItems from './src/components/QuotationList/QuotationsItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar 
        backgroundColor="#c3ac18"
        barStyle="light-content" />

        <CurrentPrice />
        <HistoryGraphic />
        <QuotationList />
        <QuotationsItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
