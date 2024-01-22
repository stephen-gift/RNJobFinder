import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { JOBDATA, TECHJOBSDATA } from "../../constants/Data/DummyData";
import JobFinderCard from "../../components/Card/JobFinderCard";
import { JobFinderSeeAll } from "../../components/Button";
import JobFinderJobCard from "../../components/Card/JobFinderJobCard";
import { JobFinderGeneralCard } from "../../components/Card";

export default function HomePageContainer({ navigation }) {
  const renderJobFinderCards = () => {
    const pairs = [];
    const first4Items = JOBDATA.slice(0, 4); // Limit to the first 6 items

    for (let i = 0; i < first4Items.length; i += 2) {
      // Create pairs of items (2 columns)
      const pair = first4Items.slice(i, i + 2);
      pairs.push(pair);
    }
    return pairs.map((pair, index) => (
      <View key={index} style={styles.columnWrapper}>
        {pair.map((item) => (
          <JobFinderCard
            key={item.id}
            icon={item.icon}
            jobCount={item.number}
            title={item.category}
          />
        ))}
      </View>
    ));
  };

  const handleJobsByCategorySeeAll = () => {
    navigation.navigate("Jobs By Category");
  };
  const handlePopularJobsSeeAll = () => {
    navigation.navigate("Popular Jobs");
  };

  return (
    <JobFinderGeneralCard>
      <View>
        <JobFinderSeeAll
          title="Job By Category"
          onPress={handleJobsByCategorySeeAll}
        />
      </View>

      {renderJobFinderCards()}

      <View>
        <JobFinderSeeAll
          title="Popular Jobs"
          onPress={handlePopularJobsSeeAll}
        />
      </View>
      {TECHJOBSDATA.slice(0, 5).map((item) => (
        <JobFinderJobCard
          key={item.id}
          icon={item.icon}
          jobTitle={item.jobTitle}
          jobType={item.jobType}
          amount={item.amount}
          country={item.country}
        />
      ))}
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
