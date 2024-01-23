import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { JobFinderIcon } from "../Icon";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderMyJobsCard({ icon, title, noOfApplications }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconTitle}>
        <JobFinderIcon icon={icon} bgColor={Colors.Black[700]} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.subTitle}>{noOfApplications} Total Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.Black[200],
    height: 124,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
  },
  iconTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: Colors.White[100],
    fontWeight: 500,
    fontSize: 16,
  },
  subTitle: {
    color: Colors.White[100],
    fontWeight: 400,
    fontSize: 12,
  },
});
