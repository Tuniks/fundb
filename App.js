import React from 'react';
import {View, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Card, Icon} from 'react-native-elements';

import Style from './Style.js';
import Tabs from './Tab';
import RestaurantScreen from './Restaurant';
import data from './data'

class HomeScreen extends React.Component {
  button({item}){
    const { navigate } = this.props.navigation;

    return(
      <TouchableOpacity
        onPress={()=>navigate('Restaurant', {infos: item})}>

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
          <View title={'fire'} style={Style.container}>
              <Text style={Style.homeCategoryTitle}>Onde comer</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data.restaurantes}
                renderItem={this.button.bind(this)}
                showsHorizontalScrollIndicator={false}
                horizontal
              />

              <Text style={Style.homeCategoryTitle}>Minhas matérias</Text>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data.restaurantes}
                  renderItem={this.button.bind(this)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
              />

              <Text style={Style.homeCategoryTitle}>Cool places</Text>
              <FlatList
                  showsVerticalScrollIndicator={false}
                  data={data.restaurantes}
                  renderItem={this.button.bind(this)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
              />
          </View>

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
    },
    {
        navigationOptions: {
            // headerStyle: Style.header
        },
    }
  );

export default RootNavigator;