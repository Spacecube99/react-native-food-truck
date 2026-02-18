import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedIntro from '../../components/AnimatedScreen';
import { featuredItems } from '../../data/featuredItems';

export default function Index() {
const [showIntro, setShowIntro] = React.useState(true);

React.useEffect(() => {
  const timer = setTimeout(() => setShowIntro(false), 2000);
  return () => clearTimeout(timer);
}, []);

if (showIntro) {
  return <AnimatedIntro />
}

  return (
      <SafeAreaView 
        edges={['left', 'right', 'top']}
        className="flex-1">
        <View className="flex-1 justify-center">
          <Text className="text-5xl text-center text-primary">Welcome to 
            the Arizmendi Food Truck!
          </Text>

          <Text className="pt-10 text-secondary text-4xl text-center border-b-4">Tacos, burgers, fries 
          and more, made fresh and available within minutes.
          </Text>


          <Text className="pt-10 text-5xl text-center">
            Featured items:</Text>

        <View className="flex-1">
          <FlatList
            data={featuredItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Link href={`/featured`}>
                <View className='w-full items-center'>
                  <Text className='text-5xl text-link text-center'>{item.name}</Text>
                  <Image  source={item.image} 
                          className="w-52 h-52 border-4 border-primary"
                          resizeMode="cover"></Image>
                </View>
              </Link>
            )}
          ></FlatList>
          </View>

        </View>
      </SafeAreaView>
  );
}