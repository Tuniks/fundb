import React from 'react';
import {View, FlatList, Text, Button, TouchableNativeFeedback} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Card, Icon} from 'react-native-elements'


import Style from './Style.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  data = [
    {key:0, name: 'Burguesão', evals:{price:0.9, wait:'0.3'}},
    {key:1, name: 'Comunistinha'},
    {key:2, name: 'Grêmio'},
    {key:3, name: 'Novo'},
    {key:4, name: 'Caro'},
    {key:5, name: 'Dilminha'},
    {key:6, name: 'Loira'},
    {key:7, name: 'Yaki'},
    {key:8, name: 'Spobreto'},
  ];

  button({item}){
    const { navigate } = this.props.navigation;

    return(
      <TouchableNativeFeedback
        onPress={()=>navigate('Details', {theme: item.name})}
        // background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
      >

        <Card title={item.name} containerStyle={Style.card}>
          <View style={Style.buttonIconRow}>
            <Icon name='access-time' iconStyle={Style.buttonIcon}/>
            <Icon name='payment' iconStyle={Style.buttonIcon}/>
            <Icon name='airplanemode-active' iconStyle={Style.buttonIcon}/>
          </View>
        </Card>

      </TouchableNativeFeedback>
    )
  };

  render(){
    const { navigate } = this.props.navigation;

    return(
      <View style={Style.container}>
        <FlatList
          data={this.data}
          renderItem={this.button.bind(this)}
        />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.state.params.theme,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.theme}</Text>
      </View>
    );
  }
}

const RootNavigator = StackNavigator({
    Home: {screen: HomeScreen,},
    Details: {screen: DetailsScreen,},
  },{
    navigationOptions: {
      headerStyle: Style.header
    },
  });

export default RootNavigator;
