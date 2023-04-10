import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { Avatar } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ScrollView } from "react-native";
import MenuContainer from "../components/MenuContainer";

const Discover = () => {
  const navigation = useNavigation();

  //when theres any changes in the ui the uselayot will be triggered
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8  mt-12">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">The beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover shadow-lg"
          />
        </View>
      </View>

      {/* search bar */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete placeholder="Search"></GooglePlacesAutocomplete>
      </View>

      {/* menu container */}
      <ScrollView>
        <View className="flex-row items-center justify-center px-8- mt-8">
          <MenuContainer></MenuContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
