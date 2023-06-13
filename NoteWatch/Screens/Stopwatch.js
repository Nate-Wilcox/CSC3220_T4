import React from "react"
import {useNavigation} from "@react-navigation/native";
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native"
import StopwatchContainer from "../Stopwatch.container";

const Stopwatch = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={style.Main}>
            <View style={style.box}>
                <StopwatchContainer/>
            </View>

            <View style={style.box1}>
                <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
                    <View style={style.button}>
                        <Text style={style.button1}> Notes </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Main:{
        flex: 6,
        backgroundColor: "#F5990A",
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
    button:{
        flex: 0,

    },
    box:{
        flex: 3,
        marginBottom: 100,
    },
    box1:{
        marginTop: 350,
        //flex: 2,
    },
});
export default Stopwatch
    