// @flow

import React, { PureComponent } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type Moment from 'moment';

export default class Date extends PureComponent {

  props: {
    //  Date to render
    date: Moment,
    // Index for `onPress` and `onRender` callbacks
    index: number,
    // Whether it's the currently selected date or no
    isActive: boolean,
    // Called when user taps a date
    onPress: (index: number) => void,
    // Called after date is rendered to pass its width up to the parent component
    onRender: (index: number, width: number) => void,
  };

  // Style helper functions that merge active date styles with the default ones
  // when rendering a date that was selected by user or was set active by default

  getContainerStyle = () => ({
    ...styles.container,
    ...(this.props.isActive ? styles.containerActive : {})
  });

  getDayStyle = () => ({
    ...styles.text,
    ...styles.day,
    ...(this.props.isActive ? styles.textActive : {})
  });

  getDateStyle = () => ({
    ...styles.text,
    ...styles.date,
    ...(this.props.isActive ? styles.textActive : {})
  });

  // Call `onRender` and pass component's with when rendered
  onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
    const {
      index,
      onRender,
    } = this.props;
    const { nativeEvent: { layout: { width } } } = event;
    onRender(index, width);
  };

  // Call `onPress` passed from the parent component when date is pressed
  onPress = () => {
    const { index, onPress } = this.props;
    onPress(index);
  };

  render() {
    const { date } = this.props;
    return (
      <TouchableOpacity
        style={this.getContainerStyle()}
        onLayout={this.onLayout}
        onPress={this.onPress}
      >
        <View style={styles.box}>
        <Text style={this.getDayStyle()}>{date.format('ddd').toUpperCase()}</Text>
        <Text style={this.getDateStyle()}>{date.format('DD')}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = {
  container: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // width:'20%',
    // height:'20%'
    // width:50
    // width:75,
    // height:125
  },
  containerActive: {
    borderBottomColor: '#93A057',
  },
  day: {
    fontSize: 11,
    marginBottom:3
  },
  date: {
    fontSize: 18,
    backgroundColor:'#fff',
    color:'#93A057',
    borderRadius:30,
    //  paddingHorizontal:1,
    // paddingVertical:4,
    marginTop:2,
    // marginBottom:2
    // backgroundColor:'pink',
  },
  text: {
   
    // padding:5,
  // backgroundColor:'#fff',
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    paddingVertical:2
  },
  textActive: {
    // color: '#93A057',
  },
  box:{
    backgroundColor:'#93A057',
     paddingHorizontal:8,
    // marginVertical:10,
    paddingVertical:8,
     borderRadius:30,
    //  height:"100%",
     width:45,
    //  height:'50%',
    //  height:70
    //  width:"100%"
  }
};