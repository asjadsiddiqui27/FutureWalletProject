import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React from 'react'
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import Button from '../../Common/CustomButton';
import colors from '../../../Theme/Colors';
import PieChart from 'react-native-pie-chart';
import fonts from '../../../Theme/Fonts';
import data from './AssetsData';
const widthAndHeight = 190
const Portfolio = (props) => {
    const { colors: themeColor, image } = useTheme()
    const totalInvestedAmount = data.reduce((total, item) => total + item.fiatBal, 0);
    const series = data.map(item => item.fiatBal);
    const sliceColor = data.map(item => item.svg.fill);
    const renderItem = ({ item }) => {
        const percentage = (item.fiatBal / totalInvestedAmount) * 100;
        return (
            <View >
                <View style={styles.dataView}>

                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <View style={[styles.color_view, { backgroundColor: item.svg.fill }]}></View>
                        <Image
                            source={{ uri: item.coin.coin_image }}
                            style={styles.img}
                        />
                        <Text style={[styles.coin_symbol, { color: themeColor.text }]}>{item.coin_symbol}</Text>
                    </View>

                    <View style={{ flex: 0.6 }}>
                        <Text style={[styles.amount_text, { color: themeColor.subText }]}>Amount</Text>
                        <Text style={[styles.amount_value, { color: themeColor.text }]}>${item.fiatBal.toFixed(2)}</Text>
                    </View>

                    <View style={{ flex: 0.6 }}>
                        <Text style={[styles.amount_text, { color: themeColor.subText }]}>Percentage</Text>
                        <Text style={[styles.amount_value, { color: themeColor.text }]}>{percentage.toFixed(2)}%</Text>
                    </View>
                </View>
            </View>
        );
    };
    const ItemSeparatorComponent = () => {
        return <View
            style={styles.separator}
        />
    }
    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Protfolio" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Swap") }} />
            <SeperateLine />

            <View style={styles.top_twoBtn_view}>
                <Button name='Wallet Stats' buttonStyle={[styles.buttonStyle]} />
                <Button customColor={[themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground]} name='On-Watchlist' buttonStyle={styles.buttonStyle} onPress={() => { props.navigation.navigate("Watchlist") }} />
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>

                <View
                    style={[styles.outer_view, { backgroundColor: themeColor.background2 }]}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.8}
                        coverFill={'#434447'}

                    />
                </View>
                <View style={{ position: "absolute", bottom: 100 }}>

                    <Text style={[styles.amount_text, { color: themeColor.subText }]}>Assets</Text>
                    <Text style={styles.pai_symbol}>Allocation</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.totalText, { color: themeColor.subText }]}>Total Invested Amount: ${totalInvestedAmount.toFixed(2)}</Text>
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    ItemSeparatorComponent={<ItemSeparatorComponent />}
                    keyExtractor={item => item.id}
                />
            </View>

        </SafeAreaView>
    )
}

export default Portfolio

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
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

    },
    chart: {
        flex: 1,
        height: 300
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 40
    },
    dataView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginHorizontal: 20,
        marginVertical: 20
    },
    pai_symbol: {
        color: "white",
        fontSize: 22,
        marginLeft: 10,
        fontFamily: fonts.PoppinsBold,
    },
    coin_symbol: {
        color: "white",
        fontSize: 18,
        marginLeft: 10,
        fontWeight: "bold",
        textTransform: "uppercase"

    },
    totalText: {
        color: "grey",
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        textAlign: "center",
        marginTop: dimen(20)
    },
    amount_text: {
        color: "grey",
        fontSize: 16,
        fontWeight: '500',
        textAlign: "center"
    },
    outer_view: {
        backgroundColor: '#424244',
        marginTop: 30,
        shadowColor: "white",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 8,
        elevation: 15,

        height: dimen(244),
        width: dimen(244),
        borderRadius: dimen(244),
        justifyContent: "center",
        alignItems: "center",
    },
    color_view: {
        height: 0,
        width: 0,
        borderLeftWidth: 12,
        borderTopWidth: 12,
        borderBottomWidth: 12,
        borderLeftColor: "transparent",
        marginRight: 10



    },

    amount_value: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"

    },
})