import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { featuredItems } from '../../../data/featuredItems';

export default function featuredIndex() {
    return (
<SafeAreaView 
edges={['top', 'left', 'right']}
className="flex-1 bg-white">


    <View className="flex-1">
        <Text className="pt-10 text-5xl text-center">
            Featured items:</Text>


        <FlatList
        data={featuredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Link href={`/featured/${item.id}`}>
                <View className='w-full items-center mb-6'>
                    <Text className='text-5xl text-blue-500'>{item.name}</Text>
                    <Image source={item.image} className="w-52 h-52 border-4 border-primary"></Image>
                </View>
            </Link>
        )}
        ></FlatList>
    </View>
</SafeAreaView>
        );
}