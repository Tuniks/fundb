import React, { Component } from 'react';
import {
    TouchableOpacity,
    Stylesheet,
    Text,
    Image,
    View,
    FlatList,
    ScrollView,
    Button
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class PlaceScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        var stars = [];
        var moneys = [];
        for (let i = 0; i < params.infos.rating[1]; i++) {
            stars.push(
                <Icon key={i} name={'star'} type={'FontAwesome'}/>
            )
        }
        for (let i = 0; i < params.infos.rating[0]; i++) {
            moneys.push(
                <Icon key={i} name={'ios-snow'} type={'ionicon'}/>
            )
        }

        return (
            <ScrollView>
                <Image source={params.infos.img} style={{height: 225, alignSelf: 'center'}}/>

                <View style={{paddingVertical: 15, paddingHorizontal: 5}}>
                    <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                        {params.infos.name}
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5}}>
                    <Text style={{}}> 500m </Text>
                    <TouchableOpacity onPress={this.handlePress}>
                        <Text style={{}}> map </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignSelf: 'center',
                    width: '75%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    paddingTop: 20
                }}/>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingTop: 20,
                    paddingHorizontal: 10
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        {moneys}
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        {stars}
                    </View>
                </View>

                <View style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    paddingTop: 20
                }}/>

                {params.infos.reviews.map((item, index) => {
                    return (
                        <View key={index + 300} style={{paddingHorizontal: 10, paddingTop: 25}}>
                            <Text key={index} style={{fontWeight: 'bold'}}> {item.namerev} </Text>
                            <Text key={index + 100}> {item.review} </Text>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}