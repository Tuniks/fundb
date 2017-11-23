import React from 'react';
import {StyleSheet, StatusBar, View, FlatList, Text, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Lucas'},
            {key: 'Jim'},
            {key: 'Otávio'},
            {key: 'Grazinha'},
          ]}
          renderItem={({item}) =><Button
            onPress={() => navigate('Details', {theme: item.key})}
            title={item.key}
          />}
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
    headerStyle: {
      borderTopWidth: 24,
      borderTopColor: 'black', // StatusBar color
      height: 80,
    }
  },
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
