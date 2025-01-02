import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { useTheme } from '@react-navigation/native'
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import Button from '../../Common/CustomButton';
import TextOrInput from '../../Common/TextOrInput';
import { Strings } from '../../../Theme/Strings';

const AddNewContact = (props) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={Strings.AddressBook.AddNewContact} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} />
            <SeperateLine />
            <View style={{ flex: 0.9 }}>
                <View style={styles.inputView}>
                <TextOrInput label={Strings.AddressBook.enterContactName} placeholder={Strings.AddressBook.jordan}/>
                <TextOrInput label={Strings.AddressBook.Network} placeholder={Strings.AddressBook.Ethereum}/>
                <TextOrInput label={Strings.AddressBook.WalletAddress} placeholder={Strings.AddressBook.ox}/>
                <TextOrInput label={Strings.AddressBook.WalletName} placeholder={Strings.AddressBook.ETH}/>
                </View>
            </View>
            <View style={{ flex: 0.15, marginHorizontal: dimen(24) }}>
                <Button name={Strings.AddressBook.Save} onPress={()=>{props.navigation.navigate("AddressBook")}}/>
            </View>
        </SafeAreaView>
    )
}

export default AddNewContact

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },
    inputView:{
        marginTop:dimen(38),
        marginHorizontal:dimen(24),
        gap:dimen(24)
    }
})