

import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, FlatList, View } from 'react-native';
import fonts from './Fonts';
import Colors from './Colors';
import Imagepath from './imagepath';

export default class CustomDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props.isDropDownSec)
        return (
            <View style={{ marginVertical: this.props.marginVertical, }}>
                {/* <TouchableOpacity
                    onPress={this.props.onOpen}
                    style={[styles.viewOfDropdown, {}]}>
                    <Text style={[styles.dropDownText, {top:-1, color: this.props.colour, }]}>{this.props.placeholder}</Text>

                    <View style={styles.arrowPositionView}>
                        <Image
                            style={[styles.downarrowIcon, {tintColor:'grey',top:2, transform: [{ rotate: !this.props.isDropDownSec ? "0deg" : "180deg" }] }]}
                            source={this.props.ImagePath} />
                    </View>
                </TouchableOpacity> */}
                {/* {this.props.isDropDownSec ?
                    <FlatList
                        nestedScrollEnabled={true}
                        data={this.props.items}
                        showsVerticalScrollIndicator={false}
                        style={styles.dropDownFlatListCss}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.props.onChangeItem(item)}
                                    style={styles.dropDownFlatListItemCss}
                                    key={index}
                                    >
                                    <Image style={styles.redstar} source={Imagepath.redstar} resizeMode='contain' />
                                    <Text style={[styles.dropDownText, { color: this.props.placeholder == item.label ? Colors.bottonColors : '#000000', paddingHorizontal: 10, }]}>{item.value}</Text>

                                    <Text style={[styles.dropDownText1, { color: this.props.placeholder == item.label ? Colors.bottonColors : '#000000' }]}>{item.label}</Text>
                                </TouchableOpacity>
                            );
                        }} />
                    : null
                } */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewOfDropdown: { flexDirection: 'row', borderColor: Colors.grey, padding: 5, marginHorizontal: 5, },
    dropDownText: { top: 3, fontSize: 18, fontFamily: fonts.ProximaNovaMedium, },
    dropDownText1: { top: 3, fontSize: 18, fontFamily: fonts.ProximaNovaMedium, paddingLeft: 5, },
    arrowPositionView: { position: "absolute", top: 0, bottom: 0, right: 0, justifyContent: "center", alignItems: "center", },
    downarrowIcon: { height: 14, width: 14, resizeMode: "contain", },
    dropDownFlatListCss: { borderTopColor: Colors.grey, borderTopWidth: 0, maxHeight: 250 },
    dropDownFlatListItemCss: { alignItems: 'center', flexDirection: 'row', paddingVertical: 15, paddingLeft: 5, borderBottomWidth: 0.5, borderBottomColor: 'grey' },
    redstar: { height: 20, width: 20, },

})