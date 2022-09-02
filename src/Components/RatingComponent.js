import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import { Rating } from 'react-native-ratings';

const RatingComponent = () => {
/*const ratingCompleted = (rating) => {
  console.log('Rating is: ' + rating);
};

const ratingProps = {};*/
return (
  <View style={styles.container}>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      <AirbnbRating
        reviews
        type='custom'
        ratingColor='#ffff00'
        ratingBackgroundColor='#0E2433'
        imageSize={90}
        half={true}
        isDisabled={true}
        defaultRating={4}
      />

    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 0.2,
  backgroundColor: '#0E2433',
},
});

export default RatingComponent;