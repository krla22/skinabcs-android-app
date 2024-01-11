import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen name="index" options={{
            headerTitle: "Home",
            title: "Home",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={24} color="black" />
              ),
        }} />
        <Tabs.Screen name="checkout" options={{
            headerTitle: "Checkout",
            title: "Checkout",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cart" size={24} color="black" />
              ),
        }} />
        <Tabs.Screen name="products" options={{
            headerTitle: "Products",
            title: "Products",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bottle-tonic" size={24} color="black" />
              ),
        }} />
        <Tabs.Screen name="track_order" options={{
            headerTitle: "Track Order",
            title: "Track Order",
            tabBarIcon: ({ color, size }) => (
                <Entypo name="location-pin" size={24} color="black" />
              ),
        }} />
    </Tabs>
};

export default TabsLayout;