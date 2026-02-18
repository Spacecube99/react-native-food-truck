import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { featuredItems } from "../../../data/featuredItems";

export default function FeaturedItemDetail() {

    const { id } = useLocalSearchParams();

    const selectedItem = featuredItems.find(item => item.id == id);

    if (!selectedItem) {
        return (
            <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
            <View className="flex-1 justify-center items-center">
                <Text className="text-5xl">Item not found!</Text>
            </View>
             <View className="w-full h-16 bg-black"></View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className='flex-1' edges={['top', 'left', 'right']}>
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl text-center">{selectedItem?.description}</Text>
        </View>
        </SafeAreaView>
    );
}
