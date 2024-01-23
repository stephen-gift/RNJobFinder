import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors/Colors";

export default function JobFinderMessageCard({ image, sender, message, date }) {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.senderMessage}>
        <Text style={styles.senderName}>{sender}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
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
  senderMessage: {
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
  senderName: { fontSize: 14, fontWeight: 400, color: Colors.White[100] },
  message: { fontSize: 12, fontWeight: 400, color: Colors.Black[500] },
  date: { fontSize: 14, fontWeight: 400, color: Colors.White[100] },
});
