import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import React, {useState, useEffect} from "react";
import Collapsible from "react-native-collapsible";
import PieChart from "../../components/Charts";
import axios from 'axios';
export default function HomeScreen() {

  const [total, setTotal] = useState([]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  axios({
      method: "GET",
      url: `http://192.168.1.7:8000/api/transactions/total`,
    }).then((res) => {
      console.log(res.data.data);
      setTotal(res.data.data);
      });
      useEffect(() => {
      axios({
        method: "GET",
        url: `http://192.168.1.7:8000/api/transactions/total/incomes`,
      }).then((res) => {
        console.log(res.data);
        // setIncome(res.data.data);
        })}, []);

        useEffect(() => {
        axios({
          method: "GET",
          url: `http://192.168.1.7:8000/api/transactions/total/expenses`,
        }).then((res) => {
          // console.log(res.data.data);
          // setExpense(res.data.data);
        })}, []);

  return (
    <>
      <ScrollView>
        <View style={styles.Container}>
          <View>
            <View style={styles.view}>
              <Image
                source={require("../../assets/IncomeSVG.png")}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={styles.Text}>Total Income</Text>
                <Text style={styles.Text}></Text>
              </View>
            </View>
            <View style={styles.view}>
              <Image
                source={require("../../assets/ExpenseSVG.png")}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={styles.Text}>Total Expenses</Text>
                <Text style={styles.Text}>+100%</Text>
              </View>
            </View>
          </View>

          <View style={styles.view2}>
            <Text style={styles.Text2}>Current Balance</Text>
            <Text style={styles.Text3}>{total}</Text>
          </View>
        </View>
        <View style={styles.piecard}>
          <PieChart />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 170,
    marginBottom: 10,
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  view2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: 150,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 15,
    fontSize: 22,
    fontWeight: "bold",
    width: "45%",
    marginBottom: 10,
  },

  Text: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  Text2: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  Text3: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  piecard: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    // width: 360,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
