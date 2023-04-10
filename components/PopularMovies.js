import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { getPopularMovieService } from "../src/Services/API";
import { IMAGE_URL, POSTER_URL } from "../src/config";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

const PopularMovies = (props) => {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getPopularMovieService("/movie/popular");
      setpopularMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <View className="px-8 mb-5">
      <Text className="text-[21px] text-[#ccc] mb-4">Popular Movies</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={popularMovies}
        horizontal
        renderItem={(item) => displayMovies(item, props)}
      ></FlatList>
    </View>
  );
};

const displayMovies = ({ item }, props) => {
  return (
    <SafeAreaView>
      <View className="relative items-center justify-center">
        <Image
          source={{ uri: `${POSTER_URL}${item.poster_path}` }}
          style={styles.posterImage}
        />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("MovieDetail", { movieId: item.id });
          }}
          className="absolute bottom-0  rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-42 h-140 items-center justify-center rounded-full bg-[#0000007c]"
          >
            <Text className="text-gray-50 text-[11px] font-semibold">
              {item.original_title}
            </Text>
            <Text className="text-gray-50 text-[11px] font-semibold">
              {item.vote_average}
            </Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    height: 132,
    width: 153,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default PopularMovies;
