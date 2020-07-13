import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

const CategoryGrid = ({ title, color, onSelect }) => {
  const TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItemStyle}>
      <TouchableCmp
        style={{ flex: 1 }}
        onPress={() => {
          onSelect();
        }}>
        <View
          style={{
            ...{
              flex: 1,
              backgroundColor: color,
              borderRadius: 10,
              shadowColor: "black",
              shadowOpacity: 0.26,
              shadowOffset: { width: 0, height: 2 }
            },
            shadowRadius: 10,
            elevation: 3,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 10
          }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gridItemStyle: {
    flex: 1,
    margin: 15,
    height: 100,
    borderRadius:10,
    overflow:"hidden"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right"
  }
});

export default CategoryGrid;
