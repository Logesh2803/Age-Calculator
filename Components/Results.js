import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Results({ date }) {
    let today = new Date().getTime();
    let birthdate = new Date(date).getTime();
    let d = Math.abs(today - birthdate);
    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let AllDays = Math.floor(d / (1000 * 60 * 60 * 24));
    let AllMonths = Math.floor(days / 31);
    let AllWeeks = Math.floor(days / 7);
    let hours = Math.abs(days * 24);
    let minutes = Math.floor(days * 24 * 60);
    let seconds = Math.floor(days * 60 * 60 * 24);
    let years = Math.floor(days / 365);
    days -= years * 365;

    let months = Math.floor(days / 31);
    days -= months * 31;
    if (today < birthdate) {
        alert('You selected future Date as your birthday');
    }
    return (
        <View style={styles.design}>
            <Text style={styles.years}>
                Age in Years:
            </Text>
            <Text style={{ color: '#0080FF', fontSize: 30, fontWeight: 'bold' }}>
                {years}  {'\n'}
            </Text>


            <Text style={styles.months}>
                Age in Months:
            </Text>
            <Text style={{ color: '#0080FF', fontSize: 30, fontWeight: 'bold' }}>
                {AllMonths}
            </Text>
        </View>


    );
}
const styles = StyleSheet.create({
    design: {
        marginTop: 30,
        borderRadius: 20,
        borderWidth: 2,
        marginHorizontal: 30,
        height: 240,
        alignItems: "center",
        paddingVertical: 17,
        backgroundColor: '#D3D3D3'


    },
    years: {
        fontSize: 30,

        fontWeight: 'bold'
    },

    months: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default Results;
