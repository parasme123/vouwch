import React, { useState, } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, ScrollView, Easing, TextInput } from 'react-native';
import { Fonts, Fontsize, Colors } from '@common';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Imagepath from '../common/imagepath';
import styles from './css';

const UserGrpMsg = (props) => {

    const [data, setData] = useState([
        { id: 1, name: "Nurse Heart", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", time: "10:21 PM", },
        { id: 2, name: "Dr. Anthony", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", time: "10:21 PM", },
        { id: 2, name: "Dr. Anthony", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "10:21 PM", img: Imagepath.read },
        { id: 1, name: "Nurse Heart", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "11:21 PM", img: Imagepath.threeDots },
        { id: 1, name: "Nurse Heart", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", time: "12:21 PM", },
        { id: 2, name: "Dr. Anthony", msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", time: "10:21 PM", },

    ]);

    const MsgList = (msgObj) => {
        return (
            <View style={{}}>
                {
                    msgObj.id == 1 ? (
                        <View style={styles.containerRight}>
                            <View style={styles.readView}>
                                <Image style={styles.readImg}
                                    source={Imagepath.read} />
                                <Text style={styles.sndTime}>{msgObj.time}</Text>
                            </View>
                            <View style={styles.talkBubbleRight}>
                                <View style={styles.talkBubbleSquareRight}>
                                    <Text style={styles.nurseTxt}>{msgObj.name}</Text>
                                    <Text style={styles.IpsumTxt}>{msgObj.msg}</Text>
                                </View>
                                <View style={styles.talkBubbleTriangleRight} />
                            </View>
                        </View>
                    ) :
                        (
                            <View style={styles.quoteView}>
                                <View style={styles.talkBubbleLeft}>

                                    <View style={styles.talkBubbleSquareLeft} >
                                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                                            <Text style={styles.DoctorTxt}>{msgObj.name}</Text>
                                            <Popover
                                                popoverStyle={styles.popoverCss}
                                                backgroundStyle={{ opacity: 0.001, }}
                                                arrowSize={{ width: 30, height: 20, }}
                                                arrowShift={-0.9}
                                                placement={PopoverPlacement.LEFT}
                                                animationConfig={{ duration: 200, easing: Easing.circle }}
                                                from={(
                                                    <TouchableOpacity>
                                                        <Image style={styles.dotsImg}
                                                            source={Imagepath.horizontalDots} />
                                                    </TouchableOpacity>
                                                )}>
                                                <View style={styles.buttonView}>
                                                    <TouchableOpacity style={styles.replayView}>
                                                        <Image source={Imagepath.curvedBack} style={styles.replayImg} />
                                                        <Text style={styles.replayTxt}>Replay</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={styles.replayView}>
                                                        <Image source={Imagepath.forworrdd} style={styles.replayImg} />
                                                        <Text style={styles.replayTxt}>Forward</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={styles.replayView}>
                                                        <Image source={Imagepath.coppyy} style={styles.replayImg} />
                                                        <Text style={styles.replayTxt}>Copy</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={styles.replayView}>
                                                        <Image source={Imagepath.bin} style={styles.replayImg} />
                                                        <Text style={styles.replayTxt}>Delete</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={styles.replayView}>
                                                        <Image source={Imagepath.info} style={styles.replayImg} />
                                                        <Text style={styles.replayTxt}>Info</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </Popover>
                                        </View>
                                        <Text style={styles.loreamTxt}>{msgObj.msg}</Text>
                                        <View style={styles.talkBubbleTriangleLeft}>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.time}>{msgObj.time}</Text>
                                </View>
                            </View>
                        )
                }
            </View >
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("UserGroup")}>
                    <Image style={styles.preImg}
                        source={Imagepath.previous} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.perView}>
                    <Image
                        style={styles.gmanStyle}
                        source={Imagepath.group} />
                    <View style={styles.info}>
                        <Text style={styles.alexTxt}>User Group</Text>
                        <View style={styles.onlineView}>
                            <Image style={styles.circleImg}
                                source={Imagepath.circle} />
                            <Text style={styles.onlineTxt}>Online Now</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.todayView}>
                <Text style={styles.todayTxt}>Today</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    data?.map((item, index) => {
                        return MsgList(item)
                    })
                }
            </ScrollView>

            <View style={{ height: 10 }}></View>

            <View style={styles.sectionStyle}>
                <TextInput
                    style={{ flex: 1, marginLeft: 10 }}
                    placeholder="Type..."
                    underlineColorAndroid="transparent"
                />
                <View style={styles.chainView}>
                    <TouchableOpacity>
                        <Image
                            source={Imagepath.chain}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={Imagepath.clickcamera}
                            style={styles.imageStyle}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}
export default UserGrpMsg;