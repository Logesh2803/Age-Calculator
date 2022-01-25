import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Results from './Results';
import DateField from 'react-native-datefield';

function Calculator() {

    const [data, setData] = useState({
        date: '',
        birthday: '',
        showResults: false,
    });
    const CalculateAge = () => {
        setData({ birthday: data.date, showResults: true });
    };
    const changeHandler = (value) => {
        setData({ date: value });
    };

    return (

        <View >
            <Text style={styles.header}>Age Calculator</Text>
            <View>
                <Text style={styles.field}>Select Your Birthday</Text>
                <View>
                    <DateField
                        onSubmit={changeHandler}
                        defaultValue={new Date()}
                        styleInput={{ fontSize: 20 }}
                        containerStyle={{ marginVertical: 20, marginHorizontal: 70, borderWidth: 3, borderRadius: 10 }}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}


                        onPress={CalculateAge}>
                        <Text style={styles.buttonText}>Calculate</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    {data.showResults ? <Results date={data.birthday} /> : <View />}
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontSize: 32,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        textAlign: "center",
        color: '#fff'
    },
    field: {
        fontSize: 22,
        textAlign: "center",
        marginTop: 30,
        color: "#202020"


    },
    button: {
        backgroundColor: '#0080FF',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        textAlign: "center",
        color: '#fff'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }



})
export default Calculator;