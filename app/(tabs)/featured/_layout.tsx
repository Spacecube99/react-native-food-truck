import { Stack } from "expo-router";

export default function FeaturedLayout() {
    return (
            <Stack 
                screenOptions={{ 
                    animation: "fade_from_bottom",
                    headerShown: false,
                    presentation: "modal",
                }}
            />
        );
    }