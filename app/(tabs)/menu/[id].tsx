import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { menuItems } from "../../../data/menuItems";

export default function MenuItemDetail() {

    const { id } = useLocalSearchParams();

    const selectedItem = menuItems.find(item => item.id == id);

    if (!selectedItem) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-5xl">Item not found!</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl text-center">{selectedItem?.description}</Text>
        </View>
    );
}
