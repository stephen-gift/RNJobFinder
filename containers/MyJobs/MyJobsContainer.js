import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  JobFinderGeneralCard,
  JobFinderJobCard,
  JobFinderMyJobsCard,
} from "../../components/Card";
import Colors from "../../constants/Colors/Colors";
import { TECHJOBSDATA } from "../../constants/Data/DummyData";

export default function MyJobsContainer() {
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

  return (
    <JobFinderGeneralCard style={styles.mainContainer}>
      <View style={styles.applicationStatsCardContainer}>
        <JobFinderMyJobsCard
          title={"Proposal"}
          icon={"document"}
          noOfApplications={2}
        />
        <JobFinderMyJobsCard
          title={"Proposal"}
          icon={"document"}
          noOfApplications={2}
        />
      </View>
      <Text style={styles.text}>MyJobsContainer</Text>
      {renderJobFinderCards()}
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 20,
  },
  applicationStatsCardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  text: {
    color: Colors.White[100],
    fontWeight: 400,
    fontSize: 14,
  },
});
