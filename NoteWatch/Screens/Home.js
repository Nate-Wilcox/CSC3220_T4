import React from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity} from "react-native";

const Home = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={style.Main}>
            <Text style={style.Title}>STOPWATCH & NOTES</Text>
                <View style={style. buttoncontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Stopwatch")}>
                        <View>
                            <Text style={style.button1}>Stopwatch</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
                         <View>
                            <Text style={style.button2}> Notes </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            <Text style={style.footnote}>    Made by Ezana Girmay and Galib Singh</Text>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    Title:{
        marginTop: 50,
        textAlign: 'center',
        fontSize: 60,
        fontWeight: "bold",
        flex: 2,
        color: "#0A66F5",
    },
    Main:{
        fontSize: 40,
        flex: 6,
        backgroundColor: "#F5990A",
        //backgroundColor: "#F5990A",
    },
    buttoncontainer:{
        fontSize: 40,
        flex: 6,
        borderRadius: 30,
    },
    button1:{
        marginTop: 80,
        marginBottom: 0,
        marginLeft: 90,
        marginRight: 90,
        borderWidth: 10,
        textAlign: 'center',
        fontSize: 40,
        backgroundColor: "#0A66F5",
        borderColor: '#0A66F5',
        color: "white",
    },
    button2:{
        marginTop: 50,
        marginBottom: 60,
        marginLeft: 90,
        marginRight: 90,
        borderWidth: 10,
        textAlign: 'center',
        fontSize: 40,
        backgroundColor: '#0A66F5',
        borderColor: '#0A66F5',
        color: "white",
    },
    footnote:{
        flex: 0,
        paddingLeft: 10,
        color: '#0A66F5',
    },
});

export default Home
    