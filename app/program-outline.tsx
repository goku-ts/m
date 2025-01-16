import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { XButton, XText } from "@/components";
import { SCREEN } from "@/constants/Colors";

export default function programOutline() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          Order of Service
        </XText>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <XText small margin>
          Bridal March/Processional - A&M 281
        </XText>
        <XText small margin>
          Exhortation and Charge (All Stand)
        </XText>
        <XText small margin>
          1st Reading - Gen 2:18-24
        </XText>
        <XText small margin>
          Hymn - A&M 350
        </XText>
        <XText small margin>
          2nd Reading - 1 Cor 13:1-12
        </XText>
        <XText small margin>
          Hymn - A&M 520
        </XText>
        <XText small margin>
          Pledge and Fidelity
        </XText>
        <XText small margin>
          Hymn 578 (All Kneeling)
        </XText>
        <XText small margin>
          Exchange of Vows (Congregation Sitting)
        </XText>
        <XText small margin>
          Blessing and Exchange of Rings
        </XText>
        <XText small margin>
          Psalm 128
        </XText>
        <XText small margin>
          Prayer for Couple (Couple Kneeling)
        </XText>
        <XText small margin>
          Hymn for Sermon - Supp 3
        </XText>
        <XText small margin>
          Offertory - Song by Choir
        </XText>
        <XText small margin>
          Final Blessing
        </XText>
        <XText small margin>
          Signing of Register - Hymn A&M 202
        </XText>
        <XText small margin>
          Wedding March
        </XText>
      </View>
      <Image
        style={{ width: SCREEN.width * 1, height: 100 }}
        source={require("../assets/images/2.png")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
