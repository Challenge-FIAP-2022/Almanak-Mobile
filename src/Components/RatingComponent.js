import React from "react";
import { StyleSheet, View } from "react-native";
import { AirbnbRating } from "@rneui/themed";

const RatingComponent = () => {
  return (
    <View style={styles.container}>
      <AirbnbRating
        ratingColor="#ffff00"
        ratingBackgroundColor="#0E2433"
        count={5}
        size={20}
        reviewSize={20}
        half={true}
        defaultRating={4}
        // reviews
        // isDisabled
        // starContainerStyle={{borderWidth: 2}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "transparent",
    // marginBottom: 30,
    // alignSelf: "center"
  },
});

export default RatingComponent;
