
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../Theme/Colors';
import Button from '../Common/CustomButton';
import { Strings } from '../../Theme/Strings';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import fonts from '../../Theme/Fonts';
import CustomHeader from '../Common/CustomHeader';
import { useRoute, useTheme } from '@react-navigation/native';
import SmallButton from '../Common/CustomSmallButton';

const VerifySecretPhrase = (props) => {
    const route = useRoute();
    const originalArray = route.params?.name;
    const { colors: themeColor } = useTheme();
    const [shuffledArray, setShuffledArray] = useState([]);
    const [newArray, setNewArray] = useState([]);
    const [itemPositions, setItemPositions] = useState({});

    useEffect(() => {
        const shuffled = shuffle([...originalArray]);
        setShuffledArray(shuffled);
    }, []);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const setItem = (item, index) => {
        setNewArray((prevArray) => [...prevArray, item]);
        setItemPositions((prevPositions) => ({ ...prevPositions, [item]: index }));
        setShuffledArray((prevArray) => prevArray.map((el, i) => (i === index ? "" : el)));
    };

    const resetItem = (item, index) => {
        setNewArray((prevArray) => prevArray.filter((_, i) => i !== index));
        setShuffledArray((prevArray) => {
            const updatedArray = [...prevArray];
            const originalIndex = itemPositions[item];
            updatedArray[originalIndex] = item;
            return updatedArray;
        });
    };

    const matchArray = () => {
        // if (JSON.stringify(originalArray) !== JSON.stringify(newArray)) {
        //     Alert.alert("Wrong", "The sequence does not match the original");
        // } else {
        //     props.navigation.navigate("setpasscode");
        // }
        props.navigation.navigate("setpasscode");
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeColor.background }]}>
            <View style={styles.main_container}>
                <CustomHeader onPress={() => { props.navigation.navigate("secretphrase") }} headerimg={{ tintColor: themeColor.text }} header='Verify Secret Phrase' />
                <View style={styles.main_body_container}>
                    <View style={styles.text_heading_container}>
                        <Text style={[styles.text_main_heading, { color: themeColor.subText }]}>{Strings.English.verifyPhrase.taptheWord}</Text>
                    </View>

                    <View style={[styles.body_main_container, { backgroundColor: themeColor.cardBackground }]}>
                        {newArray.map((item, index) => (
                            <SmallButton
                                key={index}
                                textColor={[styles.btn_txt, { color: themeColor.text }]}
                                text2_style={[styles.btn_txt_2, { color: themeColor.text }]}
                                buttonStyle={[styles.btn_style_upper, { backgroundColor: themeColor.cardBackground }]}
                                name_2={index + 1 + "."}
                                name={item}
                                onPress={() => resetItem(item, index)}
                            />
                        ))}
                    </View>

                    <View style={styles.body_items_container}>
                        {shuffledArray.map((item, index) => (
                            item !== "" ?
                                <SmallButton
                                    key={index}
                                    btnView={[styles.btnView, { backgroundColor: themeColor.cardBackground, borderColor: themeColor.cardBackground }]}
                                    textColor={[styles.btn_txt, { color: themeColor.text }]}
                                    text2_style={[styles.btn_txt_2, { color: themeColor.text }]}
                                    name_2={index + 1 + "."}
                                    buttonStyle={styles.btn_style}
                                    name={item}
                                    onPress={() => setItem(item, index)}
                                />
                                : <View key={index} style={styles.empty_Word} />
                        ))}
                    </View>
                </View>

                <View style={styles.footer_container}>
                    <Button onPress={matchArray} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default VerifySecretPhrase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    main_container: {
        flex: 1,
        marginHorizontal: dimen(24),
    },
    main_body_container: {
        flex: 0.8,
    },
    text_heading_container: {},
    text_main_heading: {
        fontSize: dimen(16),
        textAlign: "center",
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        lineHeight: 24,
        marginHorizontal: dimen(10),
        marginTop: dimen(16),
    },
    body_main_container: {
        backgroundColor: colors.lightCardBg,
        borderRadius: 12,
        height: dimen(167.13),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        padding: 6,
        alignContent: "flex-start",
        marginTop: dimen(24.44),
    },
    btn_style_upper: {
        height: dimen(40),
        width: dimen(85),
        borderRadius: 12,
        marginVertical: dimen(6),
        borderWidth: 1,
        borderColor: colors.borderLineColor,
        backgroundColor: colors.White,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 4.8
    },
    body_items_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: dimen(24),
    },
    btnView: {
        height: dimen(40),
        width: dimen(88),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderLineColor,
        backgroundColor: colors.White,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: dimen(6),
    },
    btn_style: {
        flexDirection: "row",
    },
    btn_txt: {
        fontSize: 13,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
    },
    btn_txt_2: {
        fontSize: 13,
        fontFamily: fonts.PoppinsMedium,
    },
    empty_Word: {
        height: dimen(40),
        width: dimen(88),
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: colors.borderLineColor,
        marginVertical: dimen(6),
    },
    footer_container: {
        flex: 0.2,
        marginBottom: dimen(66.88),
        justifyContent: "flex-end",
    },
});
