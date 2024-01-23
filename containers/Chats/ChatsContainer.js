import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MESSAGESDATA, TECHJOBSDATA } from "../../constants/Data/DummyData";
import {
  JobFinderGeneralCard,
  JobFinderJobCard,
  JobFinderMessageCard,
} from "../../components/Card";

export default function ChatsContainer() {
  return (
    <JobFinderGeneralCard>
      <View>
        {MESSAGESDATA.map((item) => (
          <JobFinderMessageCard
            key={item.id}
            image={item.image}
            date={item.date}
            message={item.message}
            sender={item.sender}
          />
        ))}
      </View>
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({});
