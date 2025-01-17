import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React, { useState } from 'react'
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import Button from '../../Common/CustomButton';
import colors from '../../../Theme/Colors';
import { Strings } from '../../../Theme/Strings';
import CustomSearchBar from '../../Common/CustomSearchBar';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';

const Watchlist = (props) => {
    const { colors: themeColor, image } = useTheme()

    const data = [

        { id: '1', imageSource: images.notification2, name: "BNB", key: "21329.00 USD", amount: "+2.46% ", imageSource2: images.dustbin, },
        { id: '2', imageSource: images.notification1, name: "Bitcoin", key: "21329.00 USD", amount: "+2.46% ", imageSource2: images.dustbin, },
        { id: '3', imageSource: image.ethImage, name: "Ethereum", key: "1462.42 ETH", amount: "+2.46% ", imageSource2: images.dustbin, },
        { id: '4', imageSource: images.usdImage, name: "USD Coin", key: "76565 USD", amount: "-2.46% ", imageSource2: images.dustbin, },
        { id: '5', imageSource: images.tron, name: "Tron", key: "24565 USD", amount: "-2.46% ", imageSource2: images.dustbin, },


    ]

    const [search, setSearch] = useState("")
    const [list, setList] = useState(data);


    const getAmountColor = (amount) => {
        if (parseFloat(amount) > 0) {
            return styles.amountGreen;
        } else if (parseFloat(amount) < 0) {
            return styles.amountRed;
        } else {
            return styles.amountWhite;
        }
    };

    const filterData = (text) => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };
    const handleSearch = (text) => {
        setSearch(text);
        if (text === "") {
            setList(data)
        }
        else {
            filterData(text)
        }
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => { props.navigation.navigate("TransferBnb") }}>


            <View style={styles.row}>
                <View style={{ flexDirection: "row" }} >
                    <Image source={item.imageSource} style={styles.image} />
                    <View style={{ marginLeft: dimen(8) }}>
                        <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                        <Text style={[styles.key, { color: themeColor.subText }]}>{item.key}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Text style={[styles.amount_text, getAmountColor(item.amount)]}>{item.amount}</Text>
                    <Image source={item.imageSource2} style={styles.image2} />
                </View>

            </View>


        </TouchableOpacity>


    );
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={Strings.Portfolio.Protfolio} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Swap") }} />
            <SeperateLine />
            <View style={styles.topMain_view}>


                <View style={styles.top_twoBtn_view}>
                    <Button customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} name={Strings.Portfolio.WalletStats} buttonStyle={[styles.buttonStyle]} onPress={() => { props.navigation.navigate("Portfolio") }} />
                    <Button name={Strings.Portfolio.onWatchlist} buttonStyle={styles.buttonStyle} />
                </View>
                <View style={styles.searchbar_view}>
                    <CustomSearchBar onChangeText={handleSearch} value={search} />

                </View>
                <View style={{ marginTop: dimen(24) }}>
                    <FlatList
                        data={list}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginHorizontal: dimen(24), marginVertical: dimen(16) }}>
                                <SeperateLine />
                            </View>
                        )}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <View style={styles.btn_view}>
                <Button name={Strings.Portfolio.btnText} onPress={() => { props.navigation.navigate("AddToWatchlist") }}/>
            </View>


        </SafeAreaView>
    )
}

export default Watchlist

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    topMain_view: {
        flex: 0.9
    },
    top_twoBtn_view: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: dimen(27)
    },
    buttonStyle: {
        height: dimen(49),
        width: dimen(188),
        borderRadius: 12,
justifyContent:"center"
    },
    searchbar_view: {
        marginTop: dimen(24)
    },
    image: {
        height: dimen(44),
        width: dimen(44),
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: dimen(24)
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },
    key: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    amount: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.parrotGreenText
    },
    date: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText,
        textAlign: "right"
    },
    amountRed: {
        color: colors.lossColor
    },
    amountGreen: {
        color: colors.parrotGreenText
    },
    amountWhite: {
        color: 'white',
    },
    btn_view: {
        flex: 0.15,
        marginHorizontal: dimen(24)
    }
})