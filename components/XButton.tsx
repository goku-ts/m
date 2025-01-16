import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import XText from "./XText";
import { SCREEN } from "@/constants/Colors";
import { Link, router } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function XButton({
  children,
  icon,
  color,
  link,
}: {
  children: React.ReactNode;
  icon?: any;
  color?: any;
  link?: any;
}) {
  return (
    <TouchableOpacity
      onPress={() => router.push(link)}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: 20,
          height: SCREEN.height * 0.08,
          width: SCREEN.width * 0.8,
          backgroundColor: color ? color : "#FFC764",
        },
      ]}
    >
      <View style={{ marginRight: 20, marginLeft: 70 }}>
        <MaterialIcons name={icon} size={30} color="white" />
      </View>
      <XText medium bold color="white">
        {children}
      </XText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
