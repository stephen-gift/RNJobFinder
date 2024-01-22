import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderJobCard({
  icon,
  jobTitle,
  jobType,
  amount,
  country,
}) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardInnerContainer}>
        <View style={styles.workSet}>
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={24} color={Colors.White[100]} />
          </View>
          <View style={styles.jobDesc}>
            <Text style={styles.JobName}>{truncateText(jobTitle, 10)}</Text>
            <Text style={styles.jobType}>{jobType}</Text>
          </View>
        </View>

        <View style={styles.textLocation}>
          <Text style={styles.price}>{`$${amount}/Month`}</Text>
          <View style={styles.location}>
            <Ionicons name="location" size={24} color={Colors.Red[200]} />
            <Text style={styles.country}>{country}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 90,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 4,
    backgroundColor: Colors.Black[200],
  },
  cardInnerContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  workSet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Primary[100],
  },
  jobDesc: {
    flex: 1,
    justifyContent: "space-between",
  },
  textLocation: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  JobName: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.White[100],
  },
  jobType: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.Black[500],
  },
  price: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.White[100],
  },
  country: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.Black[500],
  },
});
