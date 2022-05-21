import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { React, useState, useEffect } from "react";
// import Card from "../Components/Stadium/CardComponent";
import { getBStadium } from "../db/Stadium/Basketball";
import Baskball_Item from "../Components/Stadium/Baskball_Item";

export default function Basketball({ navigation }) {
  const [stadium, setStadium] = useState([]);
  const [searchText, onChangeSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getBStadium().then((data) => {
      setStadium(data);
      setFilteredData(data);
    });
  }, []);

  useEffect(() => {
    const newData = stadium.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") {
      return setFilteredData(stadium);
    } else {
      return setFilteredData(newData);
    }
  }, [searchText]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <TextInput
          style={{
            height: 50,
            backgroundColor: "#FFF",
            borderWidth: 1,
            margin: 10,
            paddingLeft: 15,
            borderRadius: 10,
            color: "#22223b",
          }}
          onChangeText={(newText) => onChangeSearch(newText)}
          placeholder="Search..."
          placeholderTextColor={"#22223b"}
        />
      </View>

      <View>
        {filteredData.map((item, index) => {
          return <Baskball_tItem e={item} key={index} navigation={navigation} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22223b",
  },
  titlealign: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFF",
  },
});
