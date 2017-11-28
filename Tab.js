import React, { Component } from 'react';
import {
    Stylesheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "./Style";

export default class Tabs extends Component {
    state = {
        activeTab: 0
    }

    render({ children } = this.props){
        return(
            <View style={styles.container}>
                <View style={styles.tabsContainer}>
                    {children.map(( {props: { title }}, index) =>
                        <TouchableOpacity
                            style={[styles.tab, index === this.state.activeTab ? styles.activeTab : []]}
                            onPress={() => this.setState({ activeTab: index})}
                            key={index}>

                            <Text style={styles.tabText}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.contencContainer}>
                    {children[this.state.activeTab]}
                </View>
            </View>
        );
    }
}