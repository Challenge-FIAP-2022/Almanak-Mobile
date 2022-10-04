import React from "react";
import { StyleSheet, View } from "react-native";
import { AirbnbRating } from "@rneui/themed";

const RatingComponent = ({ score, color, disabled = true }) => {
  return (
    <View style={styles.container}>
      <AirbnbRating
        selectedColor={color ? color : "#FFFF00"}
        ratingBackgroundColor="#0E2433"
        count={score}
        size={20}
        half={true}
        defaultRating={4}
        reviews
        isDisabled={disabled}
        unSelectedColor={"#BDC3C7"}
        ratingContainerStyle={{
          height: 35,
          alignItems: "flex-start",
          paddingBottom: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
});

export default RatingComponent;
