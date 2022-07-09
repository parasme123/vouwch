import React from "react";
import { View, Text } from "react-native";
import { Fontsize } from "@common";
const NoRecordFound = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: Fontsize.fontSixteen }}>No records found</Text>
        </View>
    )
}

export default NoRecordFound;