import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { JobFinderGeneralCard, JobFinderJobCard } from "../../components/Card";
import { TECHJOBSDATA } from "../../constants/Data/DummyData";
import Colors from "../../constants/Colors/Colors";
import { JobFinderIcon } from "../../components/Icon";
import { JobFinderSearchBox } from "../../components/Filter";

export default function PopularJobsContainer() {
  const [searchText, setSearchText] = useState("");
  const renderJobFinderCards = () => {
    return (
      <View>
        {TECHJOBSDATA.map((item) => (
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

  const handleSearch = (text) => {
    setSearchText(text);
    // Add your search logic here
    // You might want to filter your data based on the search text
    // and update the state with the filtered data
  };

  return (
    <JobFinderGeneralCard>
      <JobFinderSearchBox />
      {renderJobFinderCards()}
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
 
});
