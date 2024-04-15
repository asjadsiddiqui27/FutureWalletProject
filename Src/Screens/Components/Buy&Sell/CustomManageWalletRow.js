import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../../Theme/Images'
import SeperateLine from '../../Common/SeperateLine'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
const CustomManageWalletRow = (
    {
        label_text,
        wallet_type,
        bin
    }
) => {
    return (
        <View>
            <View style={styles.row_View}>
                <View style={styles.row_content_style}>
                    <Image source={images.welcomelogo} style={styles.imgStyle} />
                    <View>
                        <Text style={styles.label_text}>{label_text}</Text>
                        <Text style={styles.wallet_type}>{wallet_type}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {bin && <Image style={styles.DangerCircle_style} source={bin} />}

                    <Image source={images.DangerCircle} style={styles.DangerCircle_style} />
                </View>

            </View>
            <SeperateLine top_line={styles.top_line} />
        </View>

    )
}

export default CustomManageWalletRow

const styles = StyleSheet.create({
    row_View: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: dimen(20)
    },
    row_content_style: {
        flexDirection: "row",
        gap: 10
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),
    },
    label_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black
    },
    wallet_type: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    imgStyle: {
        height: dimen(44),
        width: dimen(44),
    },
    top_line: {
        marginTop: dimen(16),
        borderWidth: 0.2,
        width: "100%",
        borderColor: colors.seperateLine,
    },
    DangerCircle_style: {
        height: dimen(30),
        width: dimen(30),
    },

})