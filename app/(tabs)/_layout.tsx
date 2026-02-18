import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from "react-native";
import { icons } from "../../constants/icons";
import "../global.css";

const TabIcon = ({ focused, icon, title }: any) => {
  return (

    <View className="items-center justify-center">

      <View
        className={`
          w-14 h-14 rounded-full items-center justify-center 
          ${focused ? "mb-10 bg-purple-500" : "bg-transparent"} 
        `}
      >
         <Image
            source={icon}
            className="w-10 h-10"
            resizeMode="contain"
          ></Image>
      </View>

      {/* Label */}

      {focused && (
      <Text 
        className="text-secondary text-xl
        font-semibold text-center -translate-y-8 w-28"
        numberOfLines={1}
        >
          {title}
      </Text>
      )}
    </View>
  )
}

const _layout = () => {
  return (
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'purple',
          }
        }}
      >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
            ></TabIcon>
          )
        }}
      ></Tabs.Screen>


      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.menu}
              title="Menu"
            ></TabIcon>
          )
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="featured"
        options={{
          title: "Featured",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.featured}
              title="Featured"
            />
          )
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.info}
              title="Menu"
            ></TabIcon>
          )
        }}
      ></Tabs.Screen>

      </Tabs>
    )
  }


export default _layout
