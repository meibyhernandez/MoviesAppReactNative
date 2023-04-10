import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getPopularMovieService } from "../src/Services/API";
import { POSTER_URL } from "../src/config";

const MovieDetail = (props) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await getPopularMovieService(
        `/movie/${this.props.route.params.movieId}`
      );
      console.log(data);
      setDetails(data);
    };
    getDetails();
  }, []);

  return (
    <View className="mt-13">
      <Text>{details.original_title}</Text>
      {/* <Image
        source={{ uri: `${POSTER_URL}${details.backdrop_path}` }}
        style={styles.posterImage}
      /> */}
    </View>
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

export default MovieDetail;
