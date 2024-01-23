import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  JobFinderGeneralCard,
  JobFinderMyProfileCard,
  JobFinderSettingsCard,
} from "../../components/Card";
import Colors from "../../constants/Colors/Colors";
import { MESSAGESDATA, SETTINGSDATA } from "../../constants/Data/DummyData";

export default function ProfileContainer() {
  return (
    <JobFinderGeneralCard>
      <JobFinderMyProfileCard
        image={"https://randomuser.me/api/portraits/women/4.jpg"}
        user={"Hanan"}
        jobDetail={"Ui Designer"}
      />
      <View style={styles.settingsDisplay}>
        {SETTINGSDATA.map((setting) => (
          <JobFinderSettingsCard
            key={setting.id}
            title={setting.name}
            subTitle={setting.options}
          />
        ))}
      </View>
    </JobFinderGeneralCard>
  );
}

const styles = StyleSheet.create({
  settingsDisplay: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.Black[200],
  },
});
