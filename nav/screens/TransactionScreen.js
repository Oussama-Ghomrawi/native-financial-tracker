import { View, Text, ScrollView } from 'react-native';
import * as React from 'react';
import TransactionCard from "../../components/TransactionCard";
import axios from 'axios' ;

export default function TransactionScreen() {


  // axios({
  //   method: "GET",
  //   url: `http://192.168.1.7:8000/api/`,
  // }).then((res) => {
  //   console.log("........");
  //   })
  return (
    <>
    <ScrollView>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/>
    <TransactionCard/><TransactionCard/>
    </ScrollView>
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <Text
    //             onPress={() => alert('This is the "Home" screen.')}
    //             style={{ fontSize: 26, fontWeight: 'bold' }}>batata</Text>
    //     </View>
  )
}