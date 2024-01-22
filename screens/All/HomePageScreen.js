import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomePageContainer } from "../../containers";
import { JobFinderGeneralCard } from "../../components/Card";

export default function HomePageScreen() {
  return (
    <JobFinderGeneralCard>
      <Text>HomePageScreen</Text>
      <HomePageContainer />
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({});
