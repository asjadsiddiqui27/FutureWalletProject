import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Testing extends Component {
  render() {
    const widthAndHeight = 250;

    // Separate values and colors
    const series = [430, 321, 185, 123];
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00'];

    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>


          <Text style={styles.title}>Testing</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45} // For a doughnut effect
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
