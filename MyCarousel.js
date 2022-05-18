import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

import data from "./ExploreData";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
// const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.75);

export class MyCarousel extends Component {
  // data = [
  //   {
  //     title:
  //       "近日，教育部正式印发《义务教育课程方案》，将劳动从原来的综合实践活动课程中完全独立出来，并发布《义务教育劳动课程标准（2022年版）》。",
  //     url: require("./assets/explore/image01.jpg"),
  //   },
  //   { title: "test2", url: require("./assets/test2.png") },
  //   { title: "test3", url: require("./assets/test3.png") },
  //   { title: "test4", url: require("./assets/test4.jpg") },
  //   { title: "test5", url: require("./assets/test5.png") },
  // ];

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.url} style={styles.image} />
        <View style={styles.contentBox}>
          <Text style={styles.itemLabel}>{item.content}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={data}
        // containerCustomStyle={styles.carouselContainer}
        renderItem={this._renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        layout={"tinder"}
        // layoutCardOffset={`9`}
      />
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "dodgerblue",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  itemLabel: {
    color: "#000000",
    fontSize: 14,
  },
  image: {
    resizeMode: "cover",
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT * 0.8,
    borderRadius: 10,
    position: "relative",
    // top: 0,
  },
  contentBox: {
    padding: 20,
  },
});
