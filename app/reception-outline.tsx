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
          Reception
        </XText>
      </View>
      <View
        style={{
          marginTop: 30,
          //alignItems: "center",
          padding: 15,
          marginLeft: 10,
        }}
      >
        <XText small color="#FFC764" bold>
          MC
        </XText>
        <XText small margin>
          Jerry Baidoo
        </XText>
        <XText small color="#FFC764" bold>
          CHAIRPERSON
        </XText>
        <XText small margin>
          Wisdom Doe
        </XText>
        <XText small color="#FFC764" bold>
          ORDER OF PROGRAM
        </XText>
        <XText small margin>
          Arrival Of Guests
        </XText>
        <XText small margin>
          Opening Prayer - Rev Desmond Doe
        </XText>
        <XText small margin>
          Serving Of Starter
        </XText>
        <XText small margin>
          Arrival of Best Man and Maid of Honor
        </XText>
        <XText small margin>
          Arrival of Couple
        </XText>
        <XText small margin>
          Introduction of Chairperson
        </XText>
        <XText small margin>
          Chairperson's Speech
        </XText>
        <XText small margin>
          Cutting of Cake - Cecilia Addo and Cynthia Amekor
        </XText>
        <XText small margin>
          Couple's First Dance
        </XText>
        <XText small margin>
          Dinner
        </XText>
        <XText small margin>
          Popping of Champagne
        </XText>
        <XText small margin>
          Photography with Family and Friends
        </XText>
        <XText small margin>
          Vote of Thanks - Couple
        </XText>
        <XText small margin>
          Closing Prayer
        </XText>
        <XText small color="#FFC764" bold>
          PROTOCOL TEAM
        </XText>
        <XText small margin>
          Louise Okyere - Clergy
        </XText>
        <XText small margin>
          Enyonam - Groom's Family
        </XText>
        <XText small margin>
          Winnifred Baidoo - Bride's Family
        </XText>
        <XText small margin>
          Emmanuela Efua Phlange - Ascension Anglican Church
        </XText>
        <XText small margin>
          Rita Kodji & Mavis Nutsa - Christ Followers Church
        </XText>
        <XText small margin>
          Doris Naa Adei Akuetth - Friends of Bride and Groom
        </XText>
        <XText small margin>
          Ester Owusu - Staff of GAMRO
        </XText>
        <XText small color="#FFC764" bold>
          GIFT TABLE
        </XText>
        <XText small margin>
          Phina Baidoo
        </XText>
        <XText small margin>
          Augustina Adorkor-Goku
        </XText>
        <XText small color="#FFC764" bold>
          CHAMPAGNE POPPERS
        </XText>
        <XText small margin>
          Nance Nkarko
        </XText>
        <XText small margin>
          Akoto Okyere
        </XText>
        <XText small margin>
          Augustine Adorkor-Goku
        </XText>
        <XText small margin>
          Clement Aryee
        </XText>
        <XText small margin>
          Adjoa Okyere-Odjao
        </XText>
        <XText small margin>
          Celestine Agor
        </XText>
        <XText small margin>
          Rita Kodji
        </XText>
        <XText small margin>
          Samuel Akapko
        </XText>
        <XText small margin>
          George Simpson
        </XText>
        <XText small margin>
          Kwasi Crankson
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
