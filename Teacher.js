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
import { RootNavigator } from './App'


export default class TeacherScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        var stars = [];
        var moneys = [];
        var teachers_subject = [];
        var subjects = [];
        //ALGORITMO MTO PROVAVELMENTE PROBLEMATICO
        for (let i = 0; i < data.subjects_teachers.length; i++) {
            if (data.subjects_teachers[i].teacher === params.infos.name) {
                teachers_subject.push(data.subjects_teachers[i]);
            }
        }
        for (let i = 0; i < teachers_subject.length; i++) {
            for (let j = 0; j < data.subjects.length; j++) {
                if (data.subjects[j].name === teachers_subject[i].subject) {
                    subjects.push(data.subjects[j]);
                }
            }
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
                {/*<View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:25, paddingHorizontal:10}}>*/}
                {/*{foods}*/}
                {/*</View>*/}

                <View style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    paddingVertical: 20
                }}/>

                <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Matérias</Text>
                    {subjects.map((item, index) => {
                        return (
                            <Text key={index}> {item.name} </Text>
                        )
                    })}
                </View>

                <View style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    paddingTop: 20
                }}/>

                {teachers_subject.map((item, index) => {
                    return <View key={index}>
                        {item.reviews.map((item_r, index_r) => {
                            return <View key={index_r + 300} style={{paddingHorizontal: 10, paddingTop: 25}}>
                                <Text key={index_r} style={{fontWeight: 'bold'}}> {item_r.namerev} </Text>
                                <Text key={index_r + 1000}>materia: {item.subject}</Text>
                                <Text key={index_r + 100}> {item_r.review} </Text>
                            </View>
                        })}
                    </View>
                })}

            </ScrollView>
        )
    }
}