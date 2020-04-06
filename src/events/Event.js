// @flow

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { EventType } from '../../App';
import moment from 'moment'

export default class Event extends Component {

  props: {
    event: EventType,
  };

  render() {
    const { event } = this.props;
    console.log("Event is: ",event)

    const {
      date,
      customer,
      no_of_orders,      
    } = event;
    // var check = moment(birthdayDate, 'YYYY/MM/DD');
    // var month = check.format('MMMM')
    return (
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        </View> */}
        <View style={styles.textContainer}>
          {/* <Text style={styles.text}>Today {moment().format('DD MMMM')}</Text> */}
    
          <View style={{flexDirection:"row",}}>
             <View style={{width:'40%'}}>
               <Text style={[styles.text, styles.title]}>Customer Name: </Text>
             </View>
             <View style={{width:"50%"}}>
                <Text t style={[styles.text, styles.title]}>{customer}</Text>
             </View>
          </View>
          <View style={{flexDirection:"row",}}>
             <View style={{width:'40%'}}>
               <Text style={[styles.text, styles.title]}>No of orders: </Text>
             </View>
             <View style={{width:"50%"}}>
                <Text t style={[styles.text, styles.title]}>{no_of_orders}</Text>
             </View>
          </View>
          {/* <Text style={styles.text}>No of Orders</Text> */}
        </View>
      </View>

 
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomColor:'#93A057',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
    alignSelf:"center",
    justifyContent:"center",
    // width:'80%'
    // margin:10
  },
  imageContainer: {
    // backgroundColor: 'rgba(255, 255, 255, 0.25)',
    // borderColor: 'rgba(255, 255, 255, 0.25)',
    backgroundColor:"#93A057",
    borderColor:'#93A057',
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 15,
    width: 90,
    height: 90,
  },
  textContainer: {
    flex: 1,
    alignSelf:"center",
    justifyContent:"center"
  },
  image: {
    width: 89,
    height: 89,
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.75)',
    color:'#93A057'
  },
  title: {
    // color: '#FFFFFF',
    color:'#93A057',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});