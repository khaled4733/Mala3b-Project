import React, { useState, useEffect, Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { getFStadium } from "../../db/Stadium/Football";
import filter from "lodash.filter";

const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
};

const renderItem = ({ item }) => <Item name={item.name} />;
class Search extends Component {
  constructor(props) {
    const [stadium, setStadium] = useState([]);
    useEffect(() => {
      getFStadium().then((data) => {
        setStadium(data);
      });
    }, []);
    super(props);
    this.state = {
      loading: false,
      data: stadium,
      error: null,
      searchValue: "",
    };
    this.arrayholder = stadium;
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: "#f5f520",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
