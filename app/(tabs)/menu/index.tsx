import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { menuItems } from "../../../data/menuItems";

export default function ItemsIndex() {
  return (
    <SafeAreaView 
      className="flex-1 bg-white">

      <View className="px-4 pt-6">
        <Text className="text-5xl text-center">
        Menu Items
        </Text>

          <FlatList
              data={menuItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Link href={`/menu/${item.id}`}>
                  <View className="w-full items-center">
                    <Text className='text-5xl text-blue-500 text-center'>
                      {item.name}
                    </Text>
                    <Image 
                      source={item.image} 
                      className="w-52 h-52 border-4 border-secondary"
                      resizeMode="cover">
                    </Image>
                  </View>
                </Link>
              )}
            />
      </View>
    </SafeAreaView>
  );
}
    