import React from "react";
import {View,Text,StyleSheet} from "react-native";

const FilterScreen=({})=><View style={styles.container}>
    <Text>The Filter Screen</Text>
</View>;

const styles=StyleSheet.create({
    container: {flex:1,
        alignItems:"center",
        justifyContent:"center"}
});

export default FilterScreen;