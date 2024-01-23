import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderSettingsCard({ title, subTitle }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleSubTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={Colors.White[100]} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    gap: 5,
    borderRadius: 15,
  },
  titleSubTitle: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.White[100],
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 400,
    color: Colors.White[100],
  },
});
