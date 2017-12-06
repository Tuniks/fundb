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
import MapView from 'react-native-maps'
import { Icon } from 'react-native-elements'

export default class MapScreen extends Component{
    render(){
        const { navigate } = this.props.navigation;
        const {params} = this.props.navigation.state;

        return(
            <MapView
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                initialRegion={{
                    latitude: params.infos.coordinate.latitude,
                    longitude: params.infos.coordinate.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={true}
                followUserLocation={true}>


                <MapView.Marker
                    key={"location"}
                    title={params.infos.name}
                    coordinate={params.infos.coordinate} />
            </MapView>
        );
    }

}
