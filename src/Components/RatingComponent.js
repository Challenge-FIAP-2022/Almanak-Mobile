import React from "react";
import { StyleSheet, View } from "react-native";
import { AirbnbRating } from "@rneui/themed";
import { RFValue } from "react-native-responsive-fontsize";

const RatingComponent = ({ score, color, disabled = true }) => {
  function ratingCompleted(rating) {
    return rating
  }

  return (
    <View style={styles.container}>
      <AirbnbRating
        selectedColor={color ? color : "#FFFF00"}
        ratingBackgroundColor="#0E2433"
        count={score}
        size={RFValue(20)}
        half={true}
        defaultRating={5}
        reviews
        isDisabled={disabled}
        unSelectedColor={"#BDC3C7"}
        onFinishRating={ratingCompleted(score)}
        ratingContainerStyle={{
          height: RFValue(35),
          alignItems: "flex-start",
          paddingBottom: RFValue(10),
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
