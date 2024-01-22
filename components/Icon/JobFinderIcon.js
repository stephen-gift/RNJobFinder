import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function JobFinderIcon({
  onPress,
  icon,
  color,
  style,
  bgColor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: bgColor },
        styles.button,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
