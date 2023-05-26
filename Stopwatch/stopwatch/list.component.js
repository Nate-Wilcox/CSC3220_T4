import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index} style={styles.item}>{`#${index+1}                                         `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: "black",
        borderColor: "grey",
        padding: 0,
    },

    item: {
        padding: 10,
        borderTopColor: "white",
        borderBottomColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        fontSize: 22,
        height: 50,
        color: "#fff",
        textAlign: "auto",
        backgroundColor: "black",
        marginBottom: 0,
    },
})


export default ListComponent;