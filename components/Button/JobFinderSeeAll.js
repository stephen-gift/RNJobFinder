import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors/Colors";


export default function JobFinderSeeAll({
  title,
  onPress,
  containerStyle,
  titleStyle,
  buttonStyle,
  buttonTextStyle,
}) {
  return (
    <View style={[styles.seeAll, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={[styles.seeAllButton, buttonStyle]}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            buttonStyle,
          ]}
          onPress={onPress}
        >
          <Text style={[styles.buttonText, buttonTextStyle]}>See All</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 20,
  },
  seeAllButton: {},
  title: { color: "white" },
  button: {
    backgroundColor: Colors.Black[700],
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.8,
  },
});
