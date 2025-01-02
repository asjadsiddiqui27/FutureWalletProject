import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import fonts from '../../../Theme/Fonts';
import colors from '../../../Theme/Colors';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';

const CommonSettingRow = ({
    text1,
    text2,
    image1Source,
    onPress,
    image2Source
}) => {
    const { colors: themeColor, image } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={image1Source} style={styles.image1} />
                    <Text style={[styles.text, { color: themeColor.text }]}>{text1}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text, { color: themeColor.text }]}>{text2}</Text>
                    {text1 === Strings.Settings.preferences ? (
                        <Image source={image2Source} />
                    ) : (
                        <Image source={image2Source} style={[styles.image, { tintColor: themeColor.subText }]} />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CommonSettingRow;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: dimen(20),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        marginLeft: 10,
        fontSize: dimen(16),
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
    },
    image: {
        width: dimen(13),
        height: dimen(15),
    },
    image1: {
        width: dimen(14),
        height: dimen(14),
    },
});
