import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

function MyButton({ title }) {
  return (
    <TouchableOpacity>
      <View style={styles.myButton}>
        <Text style={styles.PostButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/siye2.png")}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.profileName}>ysama</Text>
      </View>
      <View style={styles.buttonBox}>
        <MyButton title={"编辑资料"} />
        <MyButton title={"收藏"} />
        <MyButton title={"设置"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  profileImage: {
    height: 180,
    width: 180,
    resizeMode: "cover",
    borderRadius: 150,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 24,
  },
  buttonBox: {
    flex: 0.5,
    // backgroundColor: "grey",
    justifyContent: "space-around",
  },
  myButton: {
    // 圆角
    borderRadius: 35,
    backgroundColor: "#FFE411",
    // backgroundColor: "#d7d7d7",
    // backgroundColor: "#e5e5e5",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
  },
});
