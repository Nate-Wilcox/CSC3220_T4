import React, { Component } from 'react';
import {Button, View, Text} from 'react-native';


class headerComponent extends Component {
    state = {isOpen: false};

    render () {
        return (
            <View style= {styles.header_container}>
                <Text style= {styles.title} >Menu</Text>
                <Button
                    onPress={() => {
                        this.setState({isOpen: true});
                    }}
                    disabled={!this.state.isOpen}
                    title={
                        this.state.isOpen ? 'Menu' : 'Return'
                    }
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    header_container: {
        width: Dimensions.get('window').width,
        backgroundColor: "black",
        borderColor: "grey",
        padding: 0,
    },

    title: {
        fontSize: 30,
        color: "white",
        marginTop: "25%",
        marginBottom: "8%",
    },
})

export default headerComponent;