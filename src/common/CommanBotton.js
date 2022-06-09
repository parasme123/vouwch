import  React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Fonts from './Fonts';

export default class CoustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { marginHorizontal: this.props.MargH, backgroundColor: this.props.backgroundColor, borderColor: this.props.borderColor, borderWidth: this.props.borderWidth, paddingHorizontal: this.props.paddingH, marginTop: this.props.marginT }]} >
                <Text style={[{fontFamily:Fonts.ProximaNovaMedium, fontSize:this.props.fontSize, color: this.props.color, marginHorizontal: this.props.textmarginh, marginVertical: this.props.margv }]}>{this.props.title}</Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: { height: 55, marginVertical: 10, borderRadius: 7, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
})