import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "@react-navigation/elements";

import { HeaderLeftImage, HeaderTitle } from "./MyHeader";
import { MyCarousel } from "./MyCarousel";

export default function Home() {
  return (
    <>
      <Header headerTitle={HeaderTitle} headerLeft={HeaderLeftImage} />
      <View style={styles.container}>
        <Text></Text>
        <MyCarousel />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edecf1",
  },
});
