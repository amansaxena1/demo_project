import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
var wid = Dimensions.get('window').width;

export default function SingleItem() {

    var items = ['Milk   🥛', 'Coffee ☕', 'Oranges  🍊', 'Bread  🍞', 'Burger  🍔', 'Noodles  🍜', 'Banana  🍌'];
    const [initialElements, changeEl] = useState([
        { id: "0", text: "Milk   🥛" },
        { id: "1", text: "Oranges  🍊" },
    ]);

    const [exampleState, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);
    const [check, setcheck] = useState(1);

    const addElement = () => {
        var item = items[Math.floor(Math.random() * items.length)];
        var newArray = [...initialElements, { id: idx, text: item }];
        incr(idx + 1);
        setExampleState(newArray);
        changeEl(newArray);
    }

    const searchhere = (value) => {
        const filtereddata = initialElements.filter(list => { return list.text.match(value); })
        // console.log(filtereddata)
        setExampleState(filtereddata)
        setcheck(check + 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TextInput onChangeText={(value) => searchhere(value)} placeholder="Search Item Here" style={styles.input} />
                <Ionicons name="add-circle" size={38} color="#064273" onPress={addElement} style={styles.icon} />
            </View>
            <Text style={{ fontSize: 30, marginTop: 15, alignSelf: 'center'}}>My Food 😋</Text>
            <View style={styles.fview}>
                <FlatList extraData={check} contentContainerStyle={{ flexGrow: 1 }} keyExtractor={item => item.id} data={exampleState} renderItem={item => (<Text style={styles.element}>{item.item.text}</Text>)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        // backgroundColor: '#00ddd4'
    },
    head: {
        display: 'flex',
        backgroundColor: '#6aa7d9',
        flexDirection: 'row',
        width: wid - 10,
        justifyContent: 'space-between',
        paddingRight: 5,
        paddingLeft: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
    },
    input: {
        fontSize: 16,
    },
    element: {
        fontSize: 18,
        marginLeft: 40,
        marginBottom: 2,

    },
    fview: {
        marginTop: 20,
        marginBottom: 200,
        borderRightColor: 'blue'
    }
});