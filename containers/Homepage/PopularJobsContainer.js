import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { JobFinderGeneralCard, JobFinderJobCard } from "../../components/Card";
import { TECHJOBSDATA } from "../../constants/Data/DummyData";

export default function PopularJobsContainer() {
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

  return <JobFinderGeneralCard>{renderJobFinderCards()}</JobFinderGeneralCard>;
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
