import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from "../components/mealItem";
import { CATEGORIES, MEALS } from "../data/dummyData";

const CategoryMealScreen = ({ navigation }) => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {}}
      />
    );
  };
  const catId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
CategoryMealScreen.navigationOptions = navigationData => {
  console.log(navigationData);
  //we get same navigation object here as well
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default CategoryMealScreen;

{
  /*An Alternative to 'Go BACK' is :- */
}
{
  /* For use case where we need button for 'Go Back' action*/
}
{
  /* <Button title="go back" onPress={()=>{navigation.goBack()}}/> */
}
{
  /* Use of pop but it will work with only react-navigation-stack */
}
{
  /* <Button title="go back" onPress={()=>{navigation.pop()}}/> */
}
