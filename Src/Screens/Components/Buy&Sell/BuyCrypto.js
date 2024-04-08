import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import Button from '../../Common/CustomButton';
const BuyCrypto = (props) => {
    const data = [
        { id: '1', value: '1' },
        { id: '2', value: '2' },
        { id: '3', value: '3' },
        { id: '4', value: '4' },
        { id: '5', value: '5' },
        { id: '6', value: '6' },
        { id: '7', value: '7' },
        { id: '8', value: '8' },
        { id: '9', value: '9' },
        { id: 'clear', value: '' },
        { id: '0', value: '0' },
        { id: 'delete', value: 'X' },
    ];


    const renderItem = ({ item }) => (
        <View>
        <View style={{}}>
            <TouchableOpacity
                style={styles.item}

            >
                <Text style={styles.text}>{item.value}</Text>
            </TouchableOpacity>
        </View>
        </View>

    );
    return (
        <View style={styles.main_container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />


            {/* ............................header..................................... */}


            <View style={styles.header_view}>
                <CustomHeader header="Buy Crypto" onPress={() => { props.navigation.navigate("TabNavigation") }} />
            </View>
            <View style={styles.top_data_view}>

                <View>
                    <Text style={styles.labelText}>Payment</Text>

                    <View style={styles.first_row_view}>
                        <View>
                            <Text style={styles.dollarValue}>$1800.00</Text>
                        </View>
                        <View style={styles.multidata_view}>
                            <Image source={images.usd} style={styles.imgStyle} />
                            <Text style={styles.middleText}>USD</Text>
                            <Image source={images.DownArrow} style={styles.downArrowImg} />
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: dimen(24) }}>
                    <Text style={styles.labelText}>Receive</Text>

                    <View style={styles.first_row_view}>
                        <View>
                            <Text style={styles.dollarValue}>0.9070 (ETH)</Text>
                        </View>
                        <View style={styles.multidata_view}>
                            <Image source={images.whiteTriangle} style={styles.imgStyle} />
                            <Text style={styles.middleText}>ETH</Text>
                            <Image source={images.DownArrow} style={styles.downArrowImg} />
                        </View>
                    </View>

                </View>
                <View style={styles.balance_view}>
                    <Text style={{ color: colors.greenText, fontFamily: fonts.PoppinsMedium }}>Balance:</Text>
                    <Text style={{ color: colors.Black, fontFamily: fonts.PoppinsMedium }}>0.00469743 ETH</Text>

                </View>

                <View style={styles.buy_Button_view}>
                    <Button name='Buy' />
                </View>

            </View>
            <View style={{marginBottom:dimen(91),alignItems:"center"}}>
            <FlatList
                data={data}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
      </View>
        </View>
    )
}

export default BuyCrypto

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header_view: {
        marginHorizontal: dimen(21)
    },
    top_data_view: {
        marginHorizontal: dimen(24)
    },
    first_row_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: dimen(70),
        backgroundColor: colors.lightCardBg,
        borderRadius: 12,
        marginTop: dimen(12)
    },
    labelText: {
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        color: colors.greenText
    },
    dollarValue: {
        fontSize: 22,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
        marginLeft: dimen(20)
    },
    multidata_view: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginRight: dimen(30)
    },
    middleText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black
    },
    imgStyle: {
        height: dimen(27),
        width: dimen(27)
    },
    downArrowImg: {
        height: dimen(9),
        width: dimen(16)
    },
    balance_view: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: dimen(12)
    },
    buy_Button_view: {
        marginVertical: dimen(50)
    },
    item: {
        alignItems: 'center',
        // marginLeft:dimen(60),
        // justifyContent: 'center',
        // margin: 10,
        width: dimen(90),
        height: 60,
        
      },
      text: {
        fontSize: 20,
        fontFamily:fonts.PoppinsMedium,
      },
})