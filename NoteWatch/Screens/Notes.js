import React, {useState, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, Text, SafeAreaView, Button, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, 
    KeyboardAvoidingView, Keyboard} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"

const Notes = () => {
    const navigation = useNavigation();

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [tableDate, settableDate] = useState (date.toLocaleDateString(('en-GB')));
    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    }
    const onChange = ({type}, selectedDate) => {
        if (type == "set"){
            const currentDate = selectedDate;
            setDate(currentDate);
            //get info from Database
            //toggleDatepicker();
        }else{
            toggleDatepicker();
        }
    } 

    const confirmDate = () => {
        settableDate(date.toLocaleDateString(('en-GB')));
        toggleDatepicker();
    }

    return (
        <KeyboardAvoidingView style={style.container} behavior="height">
        <View style={style.main}>
            <View style={style.Top}>
                 <TouchableOpacity onPress={() => navigation.navigate("Stopwatch")}>
                    <View style={style.buttonContainer1}>
                        <Text style={style.button1}>Stopwatch</Text>
                    </View>
                </TouchableOpacity> 

                <View>
                    {showPicker &&(
                        <DateTimePicker dateFormat="dd/mm/yyyy" mode="date" display="spinner" value={date} onChange={onChange} style ={style.buttonDate}/>
                    )}
                    {showPicker &&(
                        <View style={{flexDirection:"row", justifyContent: "space-around"}}>
                            <TouchableOpacity onPress={toggleDatepicker}>
                                <Text style={style.button2}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={confirmDate}>
                                <Text style={style.button2}>Confirm</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                    {!showPicker &&(
                        <TouchableOpacity onPress={toggleDatepicker}>
                            <TextInput style={style.calender1} placeholder="date" onChangeText={settableDate} value={tableDate} editable={false}  onPressIn={toggleDatepicker}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>


            <View style={style.runBox}>
                <FlatList
                    renderItem={({ }) => (
                        <TouchableOpacity style={style.list}>
                            <Text></Text>
                        </TouchableOpacity>
                    )}
                /> 
            </View>

            <View style={style.noteContainer}>
                <ScrollView style={style.noteBox1} keyboardShouldPersistTaps="handled">
                <ScrollView style={style.noteBox} keyboardShouldPersistTaps="handled">
                    <TextInput multiline={true} onSubmitEditing={Keyboard.dismiss}> Type here </TextInput>
                    <TouchableOpacity onPress={Keyboard.dismiss} style={style.ContainerButton}>
                        <Text style={style.Button3}> Done </Text>
                    </TouchableOpacity>
                </ScrollView>
                </ScrollView>
            </View> 
        </View>
        </KeyboardAvoidingView>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
      },
    main:{
        flex:10,
        fontSize: 40,
        borderRadius: 30,
        backgroundColor: "#F5990A",
    },
    
    Top:{
        flex:1,
        flexDirection: "row",
        padding: 20,
        alignItem: 'center',
        justifyContent: 'space-around',
    },
    buttonContainer1:{
        height:90,
    },
    button1:{
        fontSize: 25,
        flex:1,
        marginTop: 40,
        paddingTop: 10,
        paddingRight: 5,
        paddingLeft:5,
        backgroundColor: '#0A66F5',
        color: "white",
    },
    button2:{
        fontSize: 12,
        borderColor: "black",
        borderWidth: 3,
        backgroundColor: "blue",
        color: "white",
    },
    calender1:{
        marginTop: 40,
        fontSize: 40,
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 60,
        fontWeight: "bold",
        color:'#0A66F5',
    },
    buttonDate:{
        height: 120,
        marginTop: 10,
        backgroundColor: "white",
        color: "white",
        
    },
    date:{
        flex:3,
        borderWidth: 1,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        
    },
    calender:{
        textAlign: 'right',  
        flex:1,
        marginTop: 50,
        padding: 20,
    },

    runBox:{
        flex: 2,
        padding: 10,
        backgroundColor: '#0A66F5',
    },
    list:{
        backgroundColor: '#0A66F5',
    },
    noteContainer:
    {
        flex:3,
    },
    noteBox:{
        flex:3,
        paddingTop: 10,
        borderWidth: 5,
        borderColor: "#F5990A",
        //backgroundColor: '#0A66F5',
    },
    noteBox1:{
        flexGrow: 1,
    },
    ContainerButton: {
        alignItems: 'center',
        marginLeft:35,
        marginRight:35,
        marginTop: 10,
        marginBottom: 15,
        paddingVertical: 5,
        backgroundColor: '#0A66F5',
        borderRadius: 5,
      },
      Button3: {
        color: 'white',
        fontWeight: 'bold',
      }
})

export default Notes