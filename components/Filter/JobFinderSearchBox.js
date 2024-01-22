import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors/Colors";
import { JobFinderIcon } from "../Icon";
import { TECHJOBSDATA } from "../../constants/Data/DummyData";

export default function JobFinderSearchBox() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const createPairs = (data) => {
    const pairs = [];
    for (let i = 0; i < data.length; i += 2) {
      const pair = data.slice(i, i + 2);
      pairs.push(pair);
    }
    return pairs;
  };

  const handleSearch = (text) => {
    setSearchText(text);

    // Assuming you have an initial data source that you want to filter
    // const filteredData = TECHJOBSDATA.filter((item) =>
    //   item.category.toLowerCase().includes(text.toLowerCase())
    // );

    const filteredData = TECHJOBSDATA.filter((jobs) =>
      jobs.jobTitle.toLowerCase().includes(text)
    );

    // You can update your state with the filtered data
    setFilteredData(filteredData);
    // Alternatively, you can use the filteredData directly in your render function

    // If you are using pairs and rendering cards, you can do something like this:
    // setFilteredPairs(createPairs(filteredData));
  };
  return (
    <View style={styles.searchIconFilterBtn}>
      <View style={styles.searchIcon}>
        <Ionicons name="search" size={24} color={Colors.White[100]} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Job..."
          placeholderTextColor={Colors.White[100]}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <JobFinderIcon
        icon={"options"}
        color={Colors.White[100]}
        bgColor={Colors.Primary[100]}
        style={styles.filterIconBtn}
        onPress={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchIconFilterBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  searchIcon: {
    flexDirection: "row",
    gap: 10,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: Colors.Black[700],
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
  },
  searchInput: {
    color: Colors.White[100],
    fontSize: 20,
    fontWeight: 400,
  },
  filterIconBtn: {
    borderRadius: 15,
  },
});
