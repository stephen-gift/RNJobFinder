import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { JobFinderCard, JobFinderGeneralCard } from "../../components/Card";
import { JOBDATA } from "../../constants/Data/DummyData";

export default function JobByCategoryContainer() {
  const renderJobFinderCards = () => {
    const pairs = [];

    for (let i = 0; i < JOBDATA.length; i += 2) {
      // Create pairs of items (2 columns)
      const pair = JOBDATA.slice(i, i + 2);
      pairs.push(pair);
    }
    return pairs.map((pair, index) => (
      <View key={index} style={styles.columnWrapper}>
        {pair.map((item) => (
          <JobFinderCard
            key={item.id}
            icon={item.icon}
            jobCount={item.number}
            title={item.category}
          />
        ))}
      </View>
    ));
  };

  return <JobFinderGeneralCard>{renderJobFinderCards()}</JobFinderGeneralCard>;
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
