import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text } from 'react-native';

let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

class ListComponent extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item, index}) => <Text key={index} style={styles.item}>{`#${index+1}            `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}</Text>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        maxHeight: "63%",
        backgroundColor: "#000",
    },

    item: {
        padding: 10,
        borderColor: "gray",
        borderWidth: 5,
        borderStyle: "solid",
        fontSize: 22,
        height: 44,
        color: "#fffff",
        textAlign: "center",
        backgroundColor: "lightgray",
        marginBottom: 5,
    },
})


export default ListComponent;