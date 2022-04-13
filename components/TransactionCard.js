import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function TransactionCard() {

    const [transaction, setTransaction] = useState([]);
    useEffect(() => {
        axios.get(`http://192.168.1.7:8000/api/transactions/`).then((res) => {
          console.log(res.data.data[0].category);
          setTransaction(res.data.data);
        });
      }, []); 

  return (
      <>
      
    <View style={styles.Container}>
        <View>
        <View style={styles.view}>
        <View style={styles.inline}><Text>Title:</Text><Text>batata</Text></View>
        <View style={styles.inline}><Text>Amount:</Text><Text>15$</Text></View>
        <View style={styles.inline}><Text>Date:</Text><Text>7/20/2022</Text></View>
        <View style={styles.inline}><Text>Type:</Text><Text>Income</Text></View>
      </View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30,
      },
      view: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        height: 100,
        width: "100%",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 300,
      },
      inline:{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          
      }
})
