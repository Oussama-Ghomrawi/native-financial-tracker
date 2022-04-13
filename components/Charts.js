import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import randomColor from "randomcolor";
import { AntDesign } from "@expo/vector-icons";
import TimeType from "../components/TimeType";
import NextBackButtons from "../components/NextBackButtons";

export default function Charts() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("yearly");
  const [range, setRange] = useState(0);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    var color = randomColor({
      count: 10,
      hue: "red",
    });

    axios({
      method: "GET",
      url: `http://192.168.1.7:8000/api/categories/${value}?range=${range}`,
    }).then((res) => {
      console.log("........");
      console.log(res.data.incomes);
      const dd = res.data.incomes.map(({ sum: stroke, ...rest }) => ({
        sum: parseFloat(stroke),
        ...rest,
      }));
      console.log(dd);
      const d = dd.map((v) => ({
        ...v,
        color: randomColor({
          count: data.incomes?.length,
          hue: "blue",
          luminosity: "light",
        }),
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
        
      }));
      console.log(d);
      setData(d);
      setShow(true);
    });
  }, [value, range]);

  return (
    <View>
      {show ? (
        <>
          <View style={styles.space}>
            <TimeType setValue={setValue} setRange={setRange} />
            
          </View>

          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"sum"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
          />
          <NextBackButtons
              setRange={setRange}
              range={range}
            />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  BtnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  space: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
