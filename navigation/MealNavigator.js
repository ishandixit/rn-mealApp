import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform} from "react-native"
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";


const MealsNavigator = createStackNavigator(
  {
    Categories: {screen:CategoriesScreen,navigationOption:{headerTitle:"Meal Categories"}},
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: {screen:MealDetailScreen}
  },
  {
    //   mode:'modal',
    // initialRouteName:'Categories', //it will be starting page who so ever we mention here
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS==='android'?Colors.primary:"white"
      },
      headerTintColor: Platform.OS==='android'?"white":Colors.primary
    }
  }
);

export default createAppContainer(MealsNavigator);
