import React from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get("window");

export default function Homefolloww({ navigation }) {
    const Data = [
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },
        {
            txt: "Dazo Live"
        },

    ]
    const Card = ({ item }) => {
        return (
            <View style={styles.cardView}>
                <View style={styles.cardImageView}>
                    <ImageBackground 
                    source={require("../assect/images/bg7.png")} 
                    style={styles.cardImagebackground} 
                    resizeMode="cover"
                    >
                        <View style={styles.ImageBackgroundView}>
                            <Text style={styles.imageViewText}>9.9K followres</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.cardTextImageView}>
                    <Text style={styles.cardText1}>{item.txt}</Text>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate("video")}}
                    >
                    <View style={styles.cardTextButton}>
                        <Text style={styles.cardText}>Follow</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainView} >
            <View style={styles.container}>
                {/* Follow HOt Games Button */}
                <View style={styles.rowChose}>
                    <TouchableOpacity>
                        <Text style={styles.rowChoseButton}>Follow</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate("home") }}
                    >
                        <Text style={styles.rowChoseButton1}>Hot</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.rowChoseButton1}>Games</Text>
                    </TouchableOpacity>

                </View>

                {/* Cateboury View  */}
                <View style={styles.categouryView} >
                    <TouchableOpacity
                        style={styles.buttonCategoury}
                    >
                        <Text style={styles.categouryCohhseSlect}>ALL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCategoury1}
                    >
                        <Text style={styles.categouryCohhseUnSlect}>Super</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCategoury2}
                    >
                        <Text style={styles.categouryCohhseUnSlect}>New Star</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCategoury3}
                    >
                        <Text style={styles.categouryCohhseUnSlect}>Bangladesh</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ marginBottom: 70 }}>
                <ScrollView  >

                    {/* slider Type  Imagee */}
                    <View style={styles.secondMainView}>
                         <TouchableOpacity >
                            <View >
                                <ImageBackground source={require("../assect/images/slider.png")} style={styles.imageBackground}  imageStyle={{ borderRadius: 10}} >
                                <ImageBackground source={require("../assect/images/red.png")} style={styles.imageBackground2} imageStyle={{ borderRadius: 10}}>
                                    <View style={{flexDirection:"column",alignSelf:"center",alignItems:"center", }}>
                                    <Text style={styles.imageBackgroundText}>Follow the people of your </Text>
                                    <Text style={styles.imageBackgroundText}>interests</Text>
                                    </View>
                                    </ImageBackground>
                               </ImageBackground>
                            </View>
                        </TouchableOpacity> 
                      
                    </View>

                    {/* card */}
                    <FlatList
                        style={{ alignSelf: "center", }}
                        numColumns={2}
                        data={Data}
                        renderItem={Card}
                        keyExtractor={item => item}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#000000",
        flex: 1
    },
    // Follow HOt Game css
    container: {
        justifyContent: "center",
        width: "96%",
        alignSelf: "center",
        justifyContent: "space-between",
    },
    rowChose: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        alignSelf: "center",
        
        // backgroundColor:"green",#ffffff
    },
    rowChoseButton: {
        color: "#ffffff",
        borderBottomWidth: 3,
        borderColor: "#FFC100",
        fontSize: 20,
        marginRight: 20,

    },
    rowChoseButton1: {
        color: "#ffffff",
        fontSize: 20,
        marginRight: 20,
    },
    //  {/* Cateboury View  */}
    categouryView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        // 
        width: "100%",
        alignSelf: "center",
    },
    categouryCohhseSlect: {
        color: "#ffffff",
        backgroundColor: "#FFC100",
        borderRadius: 10,
        alignSelf: "center",
    },
    categouryCohhseUnSlect: {
        color: "#ffffff",
        textAlign: "center",
        paddingVertical: 3

    },
    //  {/* slider Type Image */}
    secondMainView: {
        width: "96%",
        alignSelf: "center",
        alignSelf: "center"
    },
    swiperImageView: {
        height: "100%",
        width: "100%"
    },
    buttonCategoury: {
        backgroundColor: "#FFC100",
        borderRadius: 10,
        width: "15%",
        height: 30,
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonCategoury1: {
        backgroundColor: "#737373",
        borderRadius: 10,
        width: "20%",
        height: 30,
        borderColor: "#FFC100",
        borderWidth: 2,
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonCategoury2: {
        backgroundColor: "#737373",
        borderRadius: 10,
        width: "20%",
        height: 30,
        borderColor: "#FFC100",
        borderWidth: 2,
        marginRight: 10,
        alignSelf: "center",
        justifyContent: "center"

    },
    buttonCategoury3: {
        backgroundColor: "#737373",
        borderRadius: 10,
        width: "25%",
        height: 30,
        borderColor: "#FFC100",
        borderWidth: 2,
        alignSelf: "center",
        justifyContent: "center",
    },
    imageBackground2:{
        height:200,
        width:"100%",
        justifyContent:"center"
    },
   imageBackground:{
       height:200,
       width:"100%"
    },
    imageBackgroundText:{
        
        fontStyle:"normal",
        fontWeight:"500",
        fontSize:28,
        color:"#ffffff"
    },
    //   {/* card */}
    cardView: {
        width: width/2-30,
        height: 233,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        margin: 10,
        
    },
    cardImageView: {
        width: width/2-30,
        height: 177,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    cardImagebackground: {
        height: "100%",
        width: width/2-30,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    imageView: {
        height: 11,
        width: 9
    },
    imageViewText: {
        fontStyle: "normal",

        fontWeight: "700",
        fontSize: 9,
        color: "#ffffff",
        paddingLeft: 5,
        alignSelf:"center"
    },
    ImageBackgroundView: {
        backgroundColor: "#FE0000",
        flexDirection: "row",
        borderRadius: 2,
        width: 77,
        height: 16,
        margin: 5,
        justifyContent:"center",
    },
    cardTextImageView: {
        width: 180,
        height: 56,
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf:"center"
    },
    cardText: {
        color: "#ffffff",
        fontSize: 13,
        textAlign:"center",
       
        fontStyle:"normal",
        fontWeight:"400",
        paddingHorizontal:60

    },
    cardText1: {
        color: "#FE0000",
        fontSize: 13,
        textAlign:"center",
       
        fontStyle:"normal",
        fontWeight:"400",
        margin:5

    },
    cardTextButton:{
        height:31,
        justifyContent:"center",
        backgroundColor:"#FFC100",
        borderRadius:3,
        margin:10

    }
   


})