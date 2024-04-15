import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import Button from '../../Common/CustomButton';
import { Strings } from '../../../Theme/Strings';
import SeperateLine from '../../Common/SeperateLine';
import CustomCrypto from './CustomBuyCrypto';

const SellCrypto = (props) => {
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
        { id: 'delete' },
    ];


    const renderItem = ({ item }) => (
        <View>
            <View style={{}}>
                <TouchableOpacity
                    style={styles.item}

                >
                    {item.id === 'delete' ? (
                        <Image source={images.deleteLogo} style={styles.deleteImage} />
                    ) : (
                        <Text style={styles.text}>{item.value}</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>

    );
    return (
        <SafeAreaView style={styles.main_container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />


            {/* ............................header..................................... */}



            <CustomHeader header={Strings.English.buyCrypto.SellCrypto} header_style={styles.header_view} onPress={() => { props.navigation.navigate("TabNavigation") }} />
            <SeperateLine  />

            <View style={styles.top_data_view}>



                <CustomCrypto labelText={Strings.English.buyCrypto.Receive} dollarValue={Strings.English.buyCrypto.value2} image={images.whiteTriangle} image2={images.DownArrow} middleText={Strings.English.buyCrypto.ETH} />
                <View style={styles.balance_view}>
                    <Text style={styles.balanceText}>{Strings.English.buyCrypto.Balance}</Text>
                    <Text style={styles.balanceValue}>{Strings.English.buyCrypto.value3}</Text>

                </View>

                <CustomCrypto labelText={Strings.English.buyCrypto.Payment} dollarValue={Strings.English.buyCrypto.value} image={images.usd} image2={images.DownArrow} middleText={Strings.English.buyCrypto.USD} />

                <View style={styles.buy_Button_view}>
                    <Button name={Strings.English.buyCrypto.Sell} onPress={() => { props.navigation.navigate("Checkout") }} />
                </View>

            </View>
            <View style={styles.numericKey_view}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

export default SellCrypto

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header_view: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
    top_data_view: {
        marginHorizontal: dimen(24),
        marginTop:dimen(24)
    },
   
    balance_view: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: dimen(12)
    },
    balanceText: {
        color: colors.greenText,
        fontFamily: fonts.PoppinsMedium
    },
    balanceValue: {
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium
    },
    buy_Button_view: {
        marginVertical: dimen(50)
    },
    item: {
        alignItems: 'center',
        width: dimen(101),
        height: dimen(65),

    },
    text: {
        fontSize: 20,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,
    },
    deleteImage: {
        marginTop: 10,
        width: dimen(21),
        height: dimen(15)
    },
    numericKey_view: {
        marginTop: dimen(79),
        alignItems: "center"
    }
})