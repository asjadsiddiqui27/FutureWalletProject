import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils'
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';
import { useTheme } from '@react-navigation/native';
import colors from '../../../Theme/Colors';

const CommonViewSndBtc = ({ name, value }) => {
    const [clicked, setClicked] = useState(false);
    const { colors: themeColor, image } = useTheme()

    const handlePress = () => {
        setClicked(!clicked);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.mainView, {backgroundColor:clicked?"transparent":themeColor.cardBackground,borderColor:themeColor.blueBorder}]}>
                <View>
                    <Text style={[styles.nameText, {color:clicked?themeColor.text:themeColor.subText}]}>{name}</Text>
                    <Text style={[styles.valueText,{color:clicked?colors.lightBlue:themeColor.subText}]}>{value}</Text>
                </View>
                <Image source={clicked ? images.btcFilled : images.btcOpen} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
};

export default CommonViewSndBtc;

const styles = StyleSheet.create({
    mainView: {
        height: dimen(83),
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: dimen(24),
        borderRadius: dimen(12)
    },
    nameText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: dimen(22)
    },
    valueText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsBold,
        lineHeight: dimen(22)
    },
    image: {
        width: 24,
        height: 24,
    }
});
