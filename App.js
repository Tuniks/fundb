import React from 'react';
import {View, FlatList, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Card, Icon} from 'react-native-elements';

import Style from './Style.js';
import Tabs from './Tab';
import RestaurantScreen from './Restaurant.js';
import SubjectScreen from './Subject.js';
import TeacherScreen from './Teacher.js';
import data from './data';


class HomeScreen extends React.Component {
  restaurantCard({item}){
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
        onPress={()=>navigate('Restaurant', {infos: item})}>

        <Card featuredTitle={item.name} containerStyle={Style.card} image={item.img} imageStyle={{height: 100}}>
          <View style={Style.buttonIconRow}>
            <Icon name='access-time' iconStyle={Style.buttonIcon}/>
            <Icon name='payment' iconStyle={Style.buttonIcon}/>
            <Icon name='airplanemode-active' iconStyle={Style.buttonIcon}/>
          </View>
        </Card>

      </TouchableOpacity>
    )
  };

  subjectCard({item}){
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
        onPress={()=>navigate('Subject', {infos: item})}>

        <Card title={item.name} containerStyle={Style.card}>
          <View style={Style.buttonIconRow}>
            <Icon name='access-time' iconStyle={Style.buttonIcon}/>
            <Icon name='payment' iconStyle={Style.buttonIcon}/>
            <Icon name='airplanemode-active' iconStyle={Style.buttonIcon}/>
          </View>
        </Card>

      </TouchableOpacity>
    )
  };

  placesCard({item}){
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
        onPress={()=>navigate('Place', {infos: item})}>

        <Card title={item.name} containerStyle={Style.card}>
          <View style={Style.buttonIconRow}>
            <Icon name='access-time' iconStyle={Style.buttonIcon}/>
            <Icon name='payment' iconStyle={Style.buttonIcon}/>
            <Icon name='airplanemode-active' iconStyle={Style.buttonIcon}/>
          </View>
        </Card>

      </TouchableOpacity>
    )
  };

  teachersCard({item}){
    const { navigate } = this.props.navigation;

    return(
        <TouchableOpacity
            onPress={()=>navigate('Teacher', {infos: item})}>

            <Card title={item.name} containerStyle={Style.card}>
                <View style={Style.buttonIconRow}>
                    <Icon name='access-time' iconStyle={Style.buttonIcon}/>
                    <Icon name='payment' iconStyle={Style.buttonIcon}/>
                    <Icon name='airplanemode-active' iconStyle={Style.buttonIcon}/>
                </View>
            </Card>

        </TouchableOpacity>
    )
  };

  render(){
    const { navigate } = this.props.navigation;

    return(
        <Tabs>
          <ScrollView title={'fire'} style={Style.container}>
              <Text style={Style.homeCategoryTitle}>Onde comer</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data.restaurants}
                renderItem={this.restaurantCard.bind(this)}
                showsHorizontalScrollIndicator={false}
                horizontal
              />

              <Text style={Style.homeCategoryTitle}>Minhas matérias</Text>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data.subjects}
                  renderItem={this.subjectCard.bind(this)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
              />

              <Text style={Style.homeCategoryTitle}>Cool places</Text>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data.places}
                  renderItem={this.placesCard.bind(this)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
              />

              <Text style={Style.homeCategoryTitle}>Professores</Text>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data.teachers}
                  renderItem={this.teachersCard.bind(this)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
              />
          </ScrollView>

          <View title={'cannabis'} style={Style.container}>
              <Text> afffeee </Text>
          </View>

          <View title={'panda'} style={Style.container}>
              <Text> cuidado minha genteeee </Text>
          </View>
        </Tabs>
    )
  }
}

const RootNavigator = StackNavigator(
    {
        Home: {screen: HomeScreen,},
        Restaurant: {screen: RestaurantScreen,},
        Subject: {screen: SubjectScreen, },
        Teacher: {screen: TeacherScreen, },
    },
    {
        navigationOptions: {
            // headerStyle: Style.header
        },
    }
  );

export default RootNavigator;