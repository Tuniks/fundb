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
import data from './data'


export default class SubjectScreen extends Component{

    render(){
        const { params } = this.props.navigation.state;
        var stars = [];
        var moneys = [];
        var teachers_subject = [];
        var teachers = [];
        //ALGORITMO MTO PROVAVELMENTE PROBLEMATICO
        for(let i = 0; i < data.subjects_teachers.length; i++){
            if(data.subjects_teachers[i].subject === params.infos.name){
                teachers_subject.push(data.subjects_teachers[i]);
            }
        }
        for(let i=0; i < teachers_subject.length; i++){
            for(let j=0; j < data.teachers.length; j++) {
                if (data.teachers[j].name === teachers_subject[i].teacher) {
                    teachers.push(data.teachers[j]);
                }
            }
        }

        return(
            <ScrollView>
                <Image source={params.infos.img} style={{height: 225, alignSelf: 'center'}}/>

                <View style={{paddingVertical: 15, paddingHorizontal:5}}>
                    <Text style={{fontSize: 32, fontWeight:'bold'}}>
                        {params.infos.name}
                    </Text>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:5}}>
                        <Text style={{}}> 500m </Text>
                        <TouchableOpacity onPress={this.handlePress}>
                            <Text style={{}}> map </Text>
                        </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center', width:'75%', borderBottomColor: 'black', borderBottomWidth: 0.5, paddingTop:20}}/>

                <View>
                    {teachers.map((item, index) => {
                        return (
                            <Text key={index}> {item.name} </Text>
                        )
                    })}
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:20, paddingHorizontal:10}}>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        {moneys}
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        {stars}
                    </View>
                </View>
                {/*<View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:25, paddingHorizontal:10}}>*/}
                    {/*{foods}*/}
                {/*</View>*/}

                <View style={{alignSelf:'center', width:'90%', borderBottomColor: 'black', borderBottomWidth: 0.5, paddingTop:20}}/>

                {/*{params.infos.reviews.map((item, index) => {*/}
                    {/*return (*/}
                        {/*<View key={index+300} style={{paddingHorizontal:10, paddingTop:25}}>*/}
                            {/*<Text key={index} style={{fontWeight:'bold'}}> {item.namerev} </Text>*/}
                            {/*<Text key={index+100}> {item.review} </Text>*/}
                        {/*</View>*/}
                {/*)})}*/}
            </ScrollView>
        )
    }

    // handlePress(){
    // }
    //
    // createFoodsView(type){
    //     food = [];
    //     if (type[0]){
    //         food.push(
    //             <View>
    //                 <Icon key={1} name={'food-croissant'} type={'material-community'}/>
    //                 <Text style={{fontSize: 10}}>Salgados</Text>
    //             </View>
    //         )
    //     }
    //     if (type[1]){
    //         food.push(
    //             <View>
    //                 <Icon key={2} name={'ios-beer'} type={'ionicon'}/>
    //                 <Text style={{fontSize: 10}}>Bebidas</Text>
    //             </View>
    //         )
    //     }
    //     if (type[2]){
    //         food.push(
    //             <View>
    //                     <Icon key={3} name={'ios-restaurant'} type={'ionicon'}/>
    //                     <Text style={{fontSize: 10}}>Prato Feito</Text>
    //             </View>
    //         )
    //     }
    //     if (type[3]){
    //         food.push(
    //             <View>
    //                 <Icon key={1} name={'scale'} type={'material-community'}/>
    //                 <Text style={{fontSize: 10}}>A Quilo</Text>
    //             </View>
    //         )
    //     }
    //     if (type[4]){
    //         food.push(
    //             <View>
    //                 <Icon key={1} name={'candycane'} type={'material-community'}/>
    //                 <Text style={{fontSize: 10}}>Sobremesas</Text>
    //             </View>
    //         )
    //     }
    //     return food;
    // }
}