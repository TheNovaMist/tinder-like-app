import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export function HeaderLeftImage() {
  const navigation = useNavigation();
  return (
    <View style={styles.imageBox}>
      <TouchableOpacity
        onPress={() => {
          console.log("navigate to profile page.");
          navigation.navigate("Profile");
        }}
      >
        <Image
          source={require("./assets/siye2.png")}
          style={styles.headerLeftImage}
        />
      </TouchableOpacity>
    </View>
  );
}

export function HeaderTitle() {
  return (
    <View style={styles.headerTitle}>
      <Text style={styles.title}>探索发现</Text>
    </View>
  );
}

export default function MyHeader() {
  return (
    <View>
      <Text>MyHeader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    padding: 20,
  },
  headerLeftImage: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 180,
  },
  headerTitle: {
    paddingLeft: 70,
  },
  title: { fontWeight: "bold", fontSize: 20, color: "#fe5862" },
});
