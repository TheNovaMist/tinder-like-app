import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "@react-navigation/elements";
import { HeaderLeftImage, HeaderTitle } from "./MyHeader";
import MyWaterFall from "./MyWaterFall";

export default function Explore() {
  return (
    <>
      <Header headerTitle={HeaderTitle} headerLeft={HeaderLeftImage} />
      <MyWaterFall />
    </>
  );
}

const styles = StyleSheet.create({});
