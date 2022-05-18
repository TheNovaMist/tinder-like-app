import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Header } from "@react-navigation/elements";
import { HeaderLeftImage, HeaderTitle } from "./MyHeader";

import { useNavigation } from "@react-navigation/native";

import data from "./MessageData";

function MessageItem({ item }) {
  // 跳转的变量
  const navigation = useNavigation();

  return (
    // 点击标签跳转到统一的chat页面
    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={require("./assets/test.png")}
            style={styles.userImage}
          />
        </View>
        <View style={styles.rightContainer}>
          {/* <Text style={styles.messageTitle}>{item.title}</Text>
      <Text style={styles.messageContent}>{item.content}</Text> */}
          <Text style={styles.messageTitle}>坂井泉水</Text>
          <Text style={styles.messageContent}>你好</Text>
        </View>
      </View>
      <View style={styles.dividerLine} />
    </TouchableOpacity>
  );
}

export default function Message() {
  // 跳转的变量
  const navigation = useNavigation();
  // 渲染的模板
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image source={item.url} style={styles.userImage} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.messageTitle}>{item.name}</Text>
          <Text style={styles.messageContent}>{item.content}</Text>
          {/* <Text style={styles.messageTitle}>坂井泉水</Text>
          <Text style={styles.messageContent}>你好</Text> */}
        </View>
      </View>
      <View style={styles.dividerLine} />
    </TouchableOpacity>
  );

  return (
    <>
      <Header headerTitle={HeaderTitle} headerLeft={HeaderLeftImage} />
      <View style={styles.container}>
        <View style={styles.titleTextBox}>
          <Text style={styles.titleText}>新的消息</Text>
        </View>
        <View style={styles.messageBox}>
          {data && <FlatList data={data} renderItem={renderItem} />}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#a2a2ff",
  },
  messageBox: {
    flex: 1,
    // backgroundColor: "grey",
  },
  itemContainer: {
    width: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
  },

  leftContainer: { padding: 10 },
  userImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 180,
  },
  rightContainer: { flexDirection: "column", paddingLeft: 10 },
  messageTitle: { fontWeight: "bold", color: "#424242", fontSize: 18 },
  messageContent: { color: "#807f84", fontSize: 16 },
  dividerLine: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
  titleTextBox: {
    paddingLeft: 20,
  },
  titleText: {
    fontSize: 18,
  },
});
