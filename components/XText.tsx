import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function XText({
  children,
  large,
  medium,
  small,
  color,
  bold,
  margin,
}: {
  children: React.ReactNode;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  color?: string;
  bold?: boolean;
  margin?: boolean;
}) {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: large ? 40 : medium ? 24 : small ? 22 : 15,
          color: color ? color : "black",
          fontWeight: bold ? "bold" : "normal",
          marginBottom: margin ? 20 : 0,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});
