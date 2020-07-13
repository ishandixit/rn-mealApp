import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummyData";
import Colors from "../constants/Colors";
import CategoryGrid from "../components/CategoryGrid";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        onSelect={() => {
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default CategoriesScreen;

// <Button
// title="Take me to meals screen"
// onPress={() => {
//  navigation.navigate({ routeName: "CategoryMeals" });
//An alternative is navigation.push("CategoryMeals")
//1. For example we come to the same page by navigation.push("Categories") it will add the same screen to the stack again
//2. Use Case is where common component is used with dynamic content for example drawer with in a menu there is menu. This is its use case
// }}
//  />
// {/*Use case of navigation.replace(), it will take to the screen but that screen wont be having back in-built button to return   */}
