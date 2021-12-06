import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';

function addZero(number) {
  if(number <= 9) return `0${number}`;
  return number;
}

function url(qdtDays) {
  const date = new Date();
  const listLastDays = qdtDays;
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays)
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi;
  const queryCoinList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key]
    }
  });
  let data = queryCoinList.reverse();
  return data;
}

async function getPriceCoinGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinList = Object.keys(selectListQuotationsG).map((key) => {    
   return selectListQuotationsG[key]   
  });
  let dataG = queryCoinList;
  return dataG;
}

export default function App() {
  const [coinList, setCoinList] = useState([]);
  const [coinGraphiccList, setCoinGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) =>{ 
      setCoinList(data)
    });
    getPriceCoinGraphic(url(days)).then((dataG) =>{ 
      setCoinGraphicList(dataG)
    });

    if(updateData){
      setUpdateData(false);

    } 
  },[updateData]);


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar 
        backgroundColor="#c3ac18"
        barStyle="light-content" />

        <CurrentPrice />
        <HistoryGraphic />
        <QuotationList filterDay={updateDay} listTransition={coinList} />
        
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
