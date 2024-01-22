import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JobFinderGeneralCard({ children }) {
  return <ScrollView style={styles.generalCard}>{children}</ScrollView>;
}

const styles = StyleSheet.create({ generalCard: { paddingHorizontal: 15 } });
