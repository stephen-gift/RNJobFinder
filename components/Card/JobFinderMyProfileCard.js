import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { JobFinderIcon } from "../Icon";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderMyProfileCard({  image, user, jobDetail,}) {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.userDetail}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.jobDetail}>{jobDetail}</Text>
      </View>
      <JobFinderIcon icon={"pencil"} bgColor={Colors.Primary[100]} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    height: 88,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 17,
    backgroundColor: Colors.Black[200],
    alignSelf: "stretch",
    borderRadius: 20,
    margin: 4,
  },
  userDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: Colors.Black[500],
  },
  user: { fontSize: 14, fontWeight: 400, color: Colors.White[100] },
  jobDetail: { fontSize: 12, fontWeight: 400, color: Colors.Black[500] },
});
