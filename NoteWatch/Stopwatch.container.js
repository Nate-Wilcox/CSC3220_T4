import  React, {Component} from 'react';
import {useNavigation} from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import moment from "mement";
import ListComponent from "./list.component";

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class StopwatchContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            msec: 0
        }

        this.newRun = 0;
        this.runID = 0;

        this.lapArr = [];

        this.interval = null;
    }

    handleToggle = () => {

        /* if (this.newRun == 0) {
            this.newRun = 1;
            db.transaction(tx => {tx.executeSql('CREATE TABLE IF NOT EXISTS Day')})
            runID = db.transaction(tx => {tx.executeSql('CREATE TABLE IF NOT EXISTS Run')})
        } */

        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr,
            {min, sec, msec}
        ]

    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);
        this.newRun = 0;
        this.lapArr = [];
    };


    render(){
        return(
            <View style={styles.container}>

                <View style={styles.parent}>
                    <Text style={styles.child}>{'  '+ padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.msec)}</Text>
                </View>



                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.button} onPress={this.handleReset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleToggle}>
                        <Text style={styles.buttonText}>{!this.state.start? 'Start': 'Stop'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}>
                        <Text style={styles.buttonText}>Lap</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.list}>
                <ListComponent lap={this.lapArr} />
            </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    list:{
        flex:0,
        marginBottom: 80,
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
        backgroundColor: 'red',
        borderColor: 'red',
    },
    button2:{
        flex: 0,
    },
    parent: {
        marginTop: 50,
        marginLeft: 20,
        //marginRight: 40,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F5990A",
        paddingTop: "1%",
        paddingBottom: "1%",
    },

    child: {
      fontSize: 56,
      fontWeight: "bold",
      color: '#0A66F5',
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "20%",
        marginBottom: "10%"
    },

    button: {

        paddingTop: "4%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 100,
        borderWidth: 1,
        height: 60,
        backgroundColor: "#0A66F5",
        borderColor: '#0A66F5',
    },

    buttonText: {
        color: "#fff",
        fontSize: 20,
        alignSelf: "center"
    },
});

export default StopwatchContainer;