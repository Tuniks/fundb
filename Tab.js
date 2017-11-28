import React, { Component } from 'react';
import {
    Stylesheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from "./Style";


export default class Tabs extends Component {
    state = {
        activeTab: 0
    }

    render({ children } = this.props){
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {children[this.state.activeTab]}
                </View>

                <View style={styles.tabsContainer}>
                    {children.map(( {props: { title }}, index) =>
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => this.setState({ activeTab: index})}
                            key={index}>

                            <Icon name={title} type={'material-community'} color={index === this.state.activeTab ? 'white' : 'black'}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    }
}