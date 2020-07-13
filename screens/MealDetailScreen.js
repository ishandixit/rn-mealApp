import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";

const MealDetailScreen=({navigation})=><View style={styles.container}>
    <Text>The Meal Detail Screen</Text>
    {/*This navigation.popToTop() will take back to very first screen or first screen call in stack */}
    <Button
    title="go back to categories" onPress={()=>{navigation.popToTop()}}/>
</View>;

const styles=StyleSheet.create({
    container: {flex:1,
        alignItems:"center",
        justifyContent:"center"}
});

export default MealDetailScreen;