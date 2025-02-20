import { CustomCards } from "@/components/custom/CustomCards";
import React from "react";
import { View,Text } from "react-native";

export const ProductScreen = () => {
    return (
        <View>
            <Text>Product Screen</Text>
            <CustomCards name="Product 1" image="https://via.placeholder.com/150" description="Description of product 1" />
        </View>
    );
};