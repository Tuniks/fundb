import React, { Component } from 'react';
import {
    TouchableOpacity,
    Stylesheet,
    Text,
    Image,
    View, FlatList, ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class RestaurantScreen extends Component{

    render(){
        const { params } = this.props.navigation.state;
        var stars = [];
        var moneys = [];
        var foods = this.createFoodsView(params.infos.type);
        for(let i = 0; i<params.infos.rating[1]; i++){
            stars.push(
                <Icon key={i} name={'star'} type={'FontAwesome'}/>
            )
        }
        for(let i = 0; i<params.infos.rating[0]; i++){
            moneys.push(
                <Icon key={i} name={'bitcoin'} type={'foundation'}/>
            )
        }


        return(
            <ScrollView>
                <Image source={params.infos.img} style={{height: 225, alignSelf: 'center'}}/>

                <View style={{paddingVertical: 15, paddingHorizontal:5}}>
                    <Text style={{fontSize: 32, fontWeight:'bold'}}>
                        {params.infos.name}
                    </Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:5, paddingTop:60}}>
                        <Text style={{}}> 500m </Text>
                        <TouchableOpacity onPress={this.handlePress}>
                            <Text style={{}}> map </Text>
                        </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center', width:'75%', borderBottomColor: 'black', borderBottomWidth: 0.5, paddingTop:20}}/>

                <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:20, paddingHorizontal:10}}>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        {moneys}
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        {stars}
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:25, paddingHorizontal:10}}>
                    {foods}
                </View>

                <View style={{alignSelf:'center', width:'90%', borderBottomColor: 'black', borderBottomWidth: 0.5, paddingTop:20}}/>

                {params.infos.reviews.map((item, index) => {
                    return (
                        <View key={index+300} style={{paddingHorizontal:10, paddingTop:25}}>
                            <Text key={index} style={{fontWeight:'bold'}}> {item.namerev} </Text>
                            <Text key={index+100}> {item.review} </Text>
                        </View>
                )})}
            </ScrollView>
        )
    }

    handlePress(){
    }

    createFoodsView(type){
        food = [];
        if (type[0]){
            food.push(<Icon key={1} name={'food-croissant'} type={'material-community'}/>)
        }
        if (type[1]){
            food.push(<Icon key={2} name={'md-beer'} type={'ionicon'}/>)
        }
        if (type[2]){
            food.push(<Icon key={3} name={'ios-restaurant'} type={'ionicon'}/>)
        }
        if (type[3]){
            food.push(<Icon key={4} name={'balance-scale'} type={'font-awesome'}/>)
        }
        if (type[4]){
            food.push(<Icon key={5} name={'candycane'} type={'material-community'}/>)
        }
        return food;
    }
}