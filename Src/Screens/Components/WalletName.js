import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../Theme/Colors'
import { Strings } from '../../Theme/Strings'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import InputText from '../Common/Input'
import Button from '../Common/CustomButton'
import fonts from '../../Theme/Fonts'


const WalletName = () => {
    const [name, setName] = useState('')


    return (
        <View style={styles.main_container}>

            <View style={styles.heading_container}>
                <Text style={styles.heading_text_style}>{Strings.English.walletName.youCanlable}</Text>
            </View>


            <View style={styles.Input_main_container}>
                <Text style={styles.name_label_name}>{Strings.English.walletName.enterName}</Text>
                <InputText maximumLength={25} value={name} onChngFunction={setName} />
                <Text style={styles.max_limit_txt_style}>{Strings.English.walletName.maxLimit + name.length + "/25"}</Text>
            </View>


            <View style={styles.footer_container}>
                <Button name={"Continue"} buttonStyle={styles.btn} />
            </View>

        </View>
    )
}

export default WalletName

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: colors.White,
        flex: 1,
    },
    heading_container: {
        marginHorizontal: dimen(24),
        marginTop:dimen(16)
    },
    heading_text_style: {
        fontSize: 15,
        lineHeight: dimen(24),
        textAlign: "center",
        fontFamily:fonts.PoppinsMedium

    },
    Input_main_container: {
        flex: 0.8,
        marginTop: dimen(32.98),
        marginHorizontal: dimen(24),
    },
    name_label_name: {
        marginBottom: dimen(12.33),
        fontFamily:fonts.PoppinsMedium
    },
    max_limit_txt_style: {
        fontSize: 14,
        marginTop: dimen(12.86),
        textAlign: "right",
        color: colors.background,
        fontFamily:fonts.PoppinsMedium
    },
    footer_container: {
        flex: 0.2,
        marginHorizontal: dimen(24),
        justifyContent: "flex-end",
    },
    btn: {
        height: 50,
        width: "auto",
        backgroundColor: colors.background,
        borderRadius: 12,
        marginBottom: dimen(66.88),
    },

})