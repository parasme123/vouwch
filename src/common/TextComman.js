import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class TextComman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View   >
                <Text style={[{ fontSize: this.props.fontSize, color: this.props.color, }]}>{this.props.title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
})