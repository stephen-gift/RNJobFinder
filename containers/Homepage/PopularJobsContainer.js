import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { JobFinderGeneralCard, JobFinderJobCard } from "../../components/Card";
import { TECHJOBSDATA } from "../../constants/Data/DummyData";
import Colors from "../../constants/Colors/Colors";
import { JobFinderIcon } from "../../components/Icon";
import { JobFinderSearchBox } from "../../components/Filter";
import { Ionicons } from "@expo/vector-icons";

export default function PopularJobsContainer() {
  const [searchText, setSearchText] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    // Filter jobs based on the search text
    const filtered = TECHJOBSDATA.filter((job) =>
      job.jobTitle.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredJobs(filtered);
    // setSearchText("");
  };

  const renderJobFinderCards = () => {
    const dataToRender = searchText ? filteredJobs : TECHJOBSDATA;

    return (
      <View>
        {dataToRender.map((item) => (
          <JobFinderJobCard
            key={item.id}
            jobTitle={item.jobTitle}
            jobType={item.jobType}
            icon={item.icon}
            amount={item.amount}
            country={item.country}
          />
        ))}
      </View>
    );
  };

  return (
    <JobFinderGeneralCard>
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

      {renderJobFinderCards()}
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
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
    // fontWeight: 400,
  },
  filterIconBtn: {
    borderRadius: 15,
  },
});
