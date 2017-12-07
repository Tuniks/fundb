import React, { Component } from 'react';
import {
    TouchableOpacity,
    Stylesheet,
    Text,
    Image,
    View,
    ScrollView,
    TextInput,
    Modal,
    Button
} from 'react-native';
import { Icon } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { RootNavigator } from './App';
import geolib from 'geolib';

export default class RestaurantScreen extends Component{
    constructor() {
        super();
        this.state = {displayModal: false,
                      distance: 500,
                      review: "",
                      rating: 0};

        navigator.geolocation.getCurrentPosition((position) => {
            const { params } = this.props.navigation.state;
            console.log(params.info.coordinate);
            let coords = {latitude: position.coords.latitude,
                          longitude: position.coords.longitude};
            console.log(coords);
            let distance = geolib.getDistance(coords,
                                              params.infos.coordinate);
            console.log(distance);
            this.setState({distance: distance});
        });
    }
    render(){
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        let stars = [];
        let moneys = [];
        let foods = this.createFoodsView(params.infos.type);
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
                <Modal
                    onRequestClosed={_ => {}}
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.displayModal} >

                    <TextInput
                        style={{marginTop: 200}}
                        onChangeText={(text) => this.setState({review: text})} />

                    <Button
                        title={'Avaliar'}
                        onPress={this.setReview.bind(this)} />
                </Modal>

                <Image source={params.infos.img} style={{height: 225, alignSelf: 'center'}}/>

                <View style={{paddingVertical: 15, paddingHorizontal:5}}>
                    <Text style={{fontSize: 32, fontWeight:'bold'}}>
                        {params.infos.name}
                    </Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:5}}>
                        <Text style={{}}> {this.state.distance}m </Text>
                        <TouchableOpacity onPress={() => navigate('Map', {infos: params.infos})}>
                            <Text style={{}}>map</Text>
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

                <View style={{backgroundColor: '#DDD', paddingVertical: 15, marginVertical:15, alignItems:'center', width:'100%'}}>
                    <Text>Já foi neste lugar? Avalie!</Text>
                    <StarRating
                        starSize={30}
                        disabled={false}
                        maxStars={5}
                        rating={5}
                        selectedStar={(rating) => this.setState({displayModal: true, rating: rating})}/>
                </View>
            </ScrollView>
        )
    }

    setReview() {
        let { params } = this.props.navigation.state;
        if (this.state.review !== "")
            params.infos.reviews.push({key: params.infos.reviews.length,
                                       namerev: "Usuário",
                                       review: this.state.review});
        this.setState({displayModal: false,
                       review: "",
                       rating: 0});
    }

    createFoodsView(type){
        food = [];
        if (type[0]){
            food.push(
                <View key={1}>
                    <Icon name={'food-croissant'} type={'material-community'}/>
                    <Text style={{fontSize: 10}}>Salgados</Text>
                </View>
            )
        }
        if (type[1]){
            food.push(
                <View key={2}>
                    <Icon name={'ios-beer'} type={'ionicon'}/>
                    <Text style={{fontSize: 10}}>Bebidas</Text>
                </View>
            )
        }
        if (type[2]){
            food.push(
                <View key={3}>
                        <Icon name={'ios-restaurant'} type={'ionicon'}/>
                        <Text style={{fontSize: 10}}>Prato Feito</Text>
                </View>
            )
        }
        if (type[3]){
            food.push(
                <View key={4}>
                    <Icon name={'scale'} type={'material-community'}/>
                    <Text style={{fontSize: 10}}>A Quilo</Text>
                </View>
            )
        }
        if (type[4]){
            food.push(
                <View key={5}>
                    <Icon name={'cookie'} type={'material-community'}/>
                    <Text style={{fontSize: 10}}>Sobremesas</Text>
                </View>
            )
        }
        return food;
    }
}
