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
    constructor() {
        super();
        this.state = {
            reviews:[
                {key: 0, name: 'Antonio', review: 'Cara gnt esse cara é top demais namoral como assim. Eu sei q to chovendo no molhado, mas ele merece.'},
                {key: 1, name: 'Resto do Mundo', review: 'true dat review de cima.'},
                {key: 2, name: 'Resto da Galaxia', review: 'põe true nisso.'},
                {key: 3, name: 'Anthony Fandango', review: 'acho overrated, 6/10'},
            ]
        };
    }

    render(){
        var stars = [];
        var moneys = [];
        var foods = this.createFoodsView();
        for(let i = 0; i<4; i++){
            stars.push(
                <Icon key={i} name={'star'} type={'FontAwesome'}/>
            )
        }
        for(let i = 0; i<3; i++){
            moneys.push(
                <Icon key={i} name={'bitcoin'} type={'foundation'}/>
            )
        }


        return(
            <ScrollView>
                <Image source={require('./img/kanye.jpg')} style={{height: 225, alignSelf: 'center'}}/>

                <View style={{paddingVertical: 15, paddingHorizontal:5}}>
                    <Text style={{fontSize: 32, fontWeight:'bold'}}>
                        kanye west
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

                {this.state.reviews.map((item, index) => {
                    return (
                        <View key={index+300} style={{paddingHorizontal:10, paddingTop:25}}>
                            <Text key={index} style={{fontWeight:'bold'}}> {item.name} </Text>
                            <Text key={index+100}> {item.review} </Text>
                        </View>
                )})}
            </ScrollView>
        )
    }

    handlePress(){
    }

    createFoodsView(){
        food = [];
        if (true){
            food.push(<Icon key={1} name={'food-croissant'} type={'material-community'}/>)
        }
        if (true){
            food.push(<Icon key={2} name={'md-beer'} type={'ionicon'}/>)
        }
        if (true){
            food.push(<Icon key={3} name={'ios-restaurant'} type={'ionicon'}/>)
        }
        if (true){
            food.push(<Icon key={4} name={'balance-scale'} type={'font-awesome'}/>)
        }
        if (true){
            food.push(<Icon key={5} name={'candycane'} type={'material-community'}/>)
        }
        return food;
    }
}