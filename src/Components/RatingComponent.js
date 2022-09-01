import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating } from '@rneui/themed';

const RatingComponent = () => {
/*const ratingCompleted = (rating) => {
  console.log('Rating is: ' + rating);
};

const ratingProps = {};*/
return (
  <View style={styles.container}>
    <ScrollView style={styles.viewContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <AirbnbRating
          reviews
          isDisabled={true}
          defaultRating={4}
        />

      </View>
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 0.2,
},
viewContainer: {
  flex: 1,
},
});

export default RatingComponent;