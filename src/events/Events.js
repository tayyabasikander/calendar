// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Event from './Event';
import type { EventType } from '../../App';
import moment from 'moment'
export default class Events extends Component {

  props: {
    events: ?Array<EventType>,
  };

  render() {
    const { events } = this.props;
    return (
      <View style={styles.container}>
        <View style={{alignSelf:"center"}}>
          
          </View>
        <ScrollView>
          {events && events.map((event, index) =>
            <Event event={event} key={index} />)}
        </ScrollView>
      
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#243177',
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.75)',
    color:'#93A057',
    fontSize:18,
    marginTop:10
  },
});