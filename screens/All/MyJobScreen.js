import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MyJobsContainer } from "../../containers";

export default function MyJobScreen() {
  return (
    <View>
      <Text>MyJobScreen</Text>
      <MyJobsContainer />
    </View>
  );
}

const styles = StyleSheet.create({});
