import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JobFinderGeneralCard({ children }) {
  return <View style={styles.generalCard}>{children}</View>;
}

const styles = StyleSheet.create({ generalCard: { paddingHorizontal: 15 } });
