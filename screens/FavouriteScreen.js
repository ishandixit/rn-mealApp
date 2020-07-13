import React from "react";
import {View,Text,StyleSheet} from "react-native";

const FavouriteScreen=({})=><View style={styles.container}>
    <Text>The Favourite Screen</Text>
</View>;

const styles=StyleSheet.create({
    container: {flex:1,
        alignItems:"center",
        justifyContent:"center"}
});

export default FavouriteScreen;