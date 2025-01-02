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
import { useTheme } from '@react-navigation/native';
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

const SellCrypto = (props) => {

    const {colors: themeColor, image} = useTheme()
   
  


    const renderItem = ({ item }) => (
        <View>
            <View style={{}}>
                <TouchableOpacity
                    style={styles.item}

                >
                    {item.id === 'delete' ? (
                        <Image source={images.deleteLogo} style={[styles.deleteImage,{tintColor:themeColor.text}]} />

                    ) : (
                        <Text style={[styles.text,{color:themeColor.text}]}>{item.value}</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>

    );
    return (
        <SafeAreaView style={[styles.main_container,{backgroundColor:themeColor.background}]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />


            {/* ............................header..................................... */}



            <CustomHeader header={Strings.buyCrypto.SellCrypto} header_style={styles.header_view} onPress={() => { props.navigation.navigate("TabNavigation") }} headerimg={{tintColor:themeColor.text}} />
            <SeperateLine  />

            <View style={styles.top_data_view}>



                <CustomCrypto labelText={Strings.buyCrypto.Receive} dollarValue={Strings.buyCrypto.value2} image={images.whiteTriangle} image2={images.DownArrow} middleText={Strings.buyCrypto.ETH} />
                <View style={styles.balance_view}>
                    <Text style={[styles.balanceText,{color:themeColor.subText}]}>{Strings.buyCrypto.Balance}</Text>
                    <Text style={[styles.balanceValue,{color:themeColor.text}]}>{Strings.buyCrypto.value3}</Text>

                </View>

                <CustomCrypto labelText={Strings.buyCrypto.Payment} dollarValue={Strings.buyCrypto.value} image={images.usd} image2={images.DownArrow} middleText={Strings.buyCrypto.USD} />

                <View style={styles.buy_Button_view}>
                    <Button name={Strings.buyCrypto.Sell} onPress={() => { props.navigation.navigate("Checkout") }} />
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