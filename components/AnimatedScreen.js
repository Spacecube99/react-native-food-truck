import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

export default function AnimatedScreen() {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(20);
    const shineX= useSharedValue(-300);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 600 });
        translateY.value = withTiming(0, { duration: 600 });

        shineX.value = withTiming(400, { duration: 1500 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    const shineStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: shineX.value }],
    }));

    return (
        <LinearGradient
            colors={["#fdba74", "#fed7aa"]}
            style={{ flex: 1 }}
        >
                <Animated.View
                    pointerEvents="none"
                    style={[
                        {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: 200,
                            zIndex: 10,
                        },
                            shineStyle
                    ]}
                >
        <LinearGradient
            colors={["transparent", "rgba(255,255,255,0.9)", "transparent"]}
            start={{ x:0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ flex: 1 }}
        />
        </Animated.View>

        <View className="flex-1 justify-center items-center" style={{ zIndex: 20 }}>
            <Animated.View style={animatedStyle} className="items-center">
                <Text className="text-6xl text-center font-bold text-black">
                        Arizmendi Food Truck
                </Text>
            </Animated.View>
        </View>
        </LinearGradient>
    )
}