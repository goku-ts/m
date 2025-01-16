import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { XButton, XText } from "@/components";
import { SCREEN } from "@/constants/Colors";
import { Image } from "react-native";

export default function home() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: SCREEN.width * 1, height: 100 }}
        source={require("../assets/images/1.png")}
      />
      <View
        style={{
          marginTop: -50,
        }}
      >
        <XText color="#FFC764" large>
          M&W
        </XText>
      </View>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <XButton icon={"church"} link={"/church"}>
          Church Program
        </XButton>
        <XButton icon={"restaurant"} link={"/reception"}>
          Reception
        </XButton>
        <XButton icon={"more"} link={"/more"}>
          More
        </XButton>
      </View>
      <Image
        style={{ width: SCREEN.width * 1, height: 100 }}
        source={require("../assets/images/2.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
