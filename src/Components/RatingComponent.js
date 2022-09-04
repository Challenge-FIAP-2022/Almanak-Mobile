import React from "react";
import { StyleSheet, View } from "react-native";
import { AirbnbRating } from "@rneui/themed";

const RatingComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <AirbnbRating
          // reviews
          ratingColor="#ffff00"
          ratingBackgroundColor="#0E2433"
          count={5}
          size={20}
          reviewSize={20}
          half={true}
          // isDisabled
          defaultRating={4}
          // starContainerStyle={{borderWidth: 2}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginRight: 30,
    //justifyContent: "space-between",
    backgroundColor: "transparent",
  },
});

export default RatingComponent;
