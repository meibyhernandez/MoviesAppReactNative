import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import PopularMovies from "../components/PopularMovies";
import MenuContainer from "../components/MenuContainer";

const HomeScreen = (props) => {
  const navigation = useNavigation();

  //when theres any changes in the ui the uselayot will be triggered
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#1F1C2C] flex-1 relative">
      {/* first section */}
      <View className="px-6 mt-12 space-y-3">
        <Text className="text-[#FFFF] text-[24px]">Hi, Hoang</Text>
      </View>

      <ScrollView>
        <View className="flex-row items-start  mt-8">
          <MenuContainer title={"All"}></MenuContainer>
          <MenuContainer title={"Action"}></MenuContainer>
          <MenuContainer title={"Comedy"}></MenuContainer>
          <MenuContainer title={"Horror"}></MenuContainer>
        </View>
      </ScrollView>

      <View>
        <PopularMovies navigation={props.navigation}></PopularMovies>
      </View>

      {/* image container */}
      {/* <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
