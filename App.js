

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';
import faker from 'faker';
import moment from 'moment';
import Calendar from './src/calendar/Calendar';
import Events from './src/events/Events';
import type Moment from 'moment';
import { customerData } from './src/data/CustomerData'




  
const filterEvents = (date: Moment): ?Array<EventType> => {
const filtered=[];
  customerData.map((event)=>{

    
    if (moment(date).format('MM/DD/YYYY') == moment(event.date).format('MM/DD/YYYY'))
    filtered.push(event)


  })


console.log("Filtered Data is: ",filtered)
return filtered;  

}



export default class App extends React.Component {

  state = {
    // events: customerData
    events: filterEvents(moment()),
    currentDate: moment()

  };

  onSelectDate = (date: Moment) => {

    
    
    
    this.setState({ events: filterEvents(date),currentDate:date });
  };

  render() {
    const { events,currentDate } = this.state;
  
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Calendar onSelectDate={this.onSelectDate} />
        <View style={{alignSelf:"center"}}>
        <Text style={styles.text}>Today, {moment(currentDate).format('DD MMMM')}</Text>
        </View>
        <Events events={events} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#3F53B1',
    paddingTop: 20,
  },
  text: {
    // color: 'rgba(255, 255, 255, 0.75)',
    color:'#93A057',
    fontSize:18,
    marginTop:10
  },
});




