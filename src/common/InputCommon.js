import * as React from 'react';
import { View,Text, TextInput, StyleSheet, Platform } from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

export default class InputCommon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: '',
        }

    }
    render() {
        return (
            <View style={{marginHorizontal:20, backgroundColor: '#fff', }}>
                <View  style={styles.TextView} >
                <Text style={styles.TextStyles}>{this.props.title}</Text>
                </View>
                <View style={styles.inputViewStyles}>
                <TextInput
                    editable={this.props.editable}
                    style={[styles.textValue,{height: Platform.OS === 'ios' ? 55 :this.props.isMassage?100: 50,}]}
                    placeholder={this.props.placeHolder}
                    value={this.props.value}
                    placeholderTextColor={this.props.placeholderTextColor}
                    returnKeyType={this.props.returnKeyType}
                    onChangeText={this.props.onChangeText}
                    onSubmitEditing={this.props.getfocus}
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.secureTextEntry}
                    ref={this.props.setfocus}
                    fontWeight={this.props.fontWeight}
                    blurOnSubmit={this.props.blurOnSubmit}
                    maxLength={this.props.maxLength}
                />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    textValue: { color: Colors.darkgreydark, top: Platform.OS == 'ios' ? 0 : 0, paddingLeft: 10, fontSize: 16   ,fontFamily:Fonts.ProximaNovaLight   },
    inputViewStyles:{ borderRadius: 10, borderColor: '#e2e6ea',borderWidth: 1,},
    TextStyles:{fontSize:16, color: "#000",fontFamily:Fonts.ProximaNovaBold},
    TextView:{paddingVertical:15}
});