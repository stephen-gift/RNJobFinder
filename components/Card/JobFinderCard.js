import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderCard({ icon, title, jobCount }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardInnerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={24}
            color={Colors.Primary[100] || Colors.Yellow[200]}
          />
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{`${jobCount}+ Job Open`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.Primary[200],
    borderRadius: 25,
    height: 180,
    width: 160,
    maxWidth: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardInnerContainer: {
    justifyContent: "space-between",
    gap: 8,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: Colors.White[100],
    padding: "auto",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.White[100],
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.White[100],
    fontWeight: "400",
  },
});
