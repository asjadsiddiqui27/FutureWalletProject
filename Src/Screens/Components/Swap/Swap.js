import { StatusBar, StyleSheet, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { images } from '../../../Theme/Images';
import { Strings } from '../../../Theme/Strings';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
const Swap = () => {
    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CustomHeader header="Swap" header_style={styles.header} />
            <SeperateLine/>

        </SafeAreaView>
    )
}

export default Swap

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    }
})