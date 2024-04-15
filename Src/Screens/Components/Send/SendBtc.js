import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../../../Theme/Colors'
import CustomHeader from '../../Common/CustomHeader'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import Button from '../../Common/CustomButton';
import SeperateLine from '../../Common/SeperateLine';

const SendBtc = (props) => {
    return (
        <SafeAreaView style={styles.main_conatiner}>
            <CustomHeader header="Send BTC" header_style={styles.header} onPress={() => { props.navigation.navigate("Bitcoin") }} />

          <SeperateLine/>
            <View style={{flex:0.9}}>

            </View>

            <View style={{marginHorizontal:dimen(24)}}>
                <Button onPress={() => { props.navigation.navigate("Transfer") }} name='Next'/>
            </View>
        </SafeAreaView>
    )
}

export default SendBtc

const styles = StyleSheet.create({

    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },


})