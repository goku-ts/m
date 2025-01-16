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
          A&M 281
        </XText>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          padding: 15,
        }}
      >
        <XText small margin>
          Lead us, heavenly father, lead us O'er the world's tempestuous sea;
          Guard us, guide us, keep us, feed us, For we have no help but thee;
          Yet possessing every blessing, If our God our Father be.
        </XText>
        <XText small margin>
          Savior breathe forgiveness o'er us All our weakness thou dost know;
          Thou dist tread this earth before us, Thou didst feel its keenest woe;
          Lone and dreary, faint and weary, Through the desert thou didst go.
        </XText>
        <XText small margin>
          Spirit o our God, descending, Fill our hearts with heavenly joy, Love
          with every passion blending, Pleasure that can never cloy; Thus
          provided, pardon'd, guided, Nothing can our peace destroy.
        </XText>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <XText color="#FFC764" large>
            A&M 350
          </XText>
        </View>
        <XText small margin>
          The voice that breathed o'er Eden, That earliest wedding day, The
          primal marriage blessing, It hath not pass'd away:
        </XText>
        <XText small margin>
          Still in the pure espousal Of Christian man and maid The Holy Three
          are with us, The threefold grace is said.
        </XText>
        <XText small margin>
          For dower of blessed children, For love and faith's sweet sake. For
          high mysterious union Which nought on earth may break.
        </XText>
        <XText small margin>
          Be present, awful Father, To give away this bride, As Eve thou gav'st
          to Adam Out of his own pierced side;
        </XText>
        <XText small margin>
          Be present, Holiest Spirit, To bless them as they kneel, As thou for
          Christ, the Bridegroom, The heavenly spouse dost seal. O spread thy
          pure wing o'er them, Let no ill power find place, When onward to thine
          Altar The hallow'd path they trace,
        </XText>
        <XText small margin>
          To cast their crowns before thee In perfect sacrifice. Till to the
          home of gladness With Christ's own Bride they rise.
        </XText>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <XText color="#FFC764" large>
            A&M 520
          </XText>
        </View>
        <XText small margin>
          Love Divine, all loves excelling, Joy of heav'n, to earth come down,
          Fix in us thy humble dwelling, All thy faithful mercies crown.
        </XText>
        <XText small margin>
          Jesu, thou art all compassion, Pure unbounded love thou art; Visit us
          with thy salvation, Enter every trembling heart,
        </XText>
        <XText small margin>
          Come, Almighty to deliver, Let us all thy grace receive; Suddenly
          return, and never, Never more thy temples leave.
        </XText>
        <XText small margin>
          Thee we would be always blessing, Serve thee as thy Hosts above; Pray,
          and praise thee, without ceasing. Glory in thy perfect love
        </XText>
        <XText small margin>
          Finish then thy new creation, Pure and spotless let us be; Let us see
          thy great salvation, Perfectly restored in thee.
        </XText>
        <XText small margin>
          Changed from glory into glory. Till in Heav'n we take our place, Till
          we cast our crowns before thee, Lost in wonder, love, and praise.
        </XText>
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <XText color="#FFC764" large>
            A&M 202
          </XText>
        </View>
        <XText small margin>
          Rejoice, the Lord is King, Your Lord and King adore; Mortals, give
          thanks and sing, And triumph evermore: Lift up your heart, lift up you
          voice; Rejoice, again I say, rejoice
        </XText>
        <XText small margin>
          Jesus, the saviour, reigns, The God of truth and love: When He had
          purged our stains, He took His seat above: Lift up your heart, lift up
          your voices; Rejoice, again I say, rejoice.
        </XText>
        <XText small margin>
          His Kingdom cannot fall; He rules o'er earth and Heav'n; The keys of
          death and hell Are to our Jesus given: Lift up your heart, lift up
          your voice; Rejoice, again I say, rejoice
        </XText>
        <XText small margin>
          He sits at God's right hand Till all His foe submit, And bow to His
          command, And fall beneath His feet: Lift up your heart, lift up your
          voice; Rejoice, again I say, rejoice.
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
