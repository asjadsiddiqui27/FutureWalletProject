import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React, { useRef } from 'react'
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts';
import Button from '../../Common/CustomButton';
import CardRow from '../Send/CardRow';
import { Image } from 'react-native';
import SeperateLine from '../../Common/SeperateLine';
import CommonPreviewSwap from './CommonPreviewSwap';
import { images } from '../../../Theme/Images';
import colors from '../../../Theme/Colors';

const height = Dimensions.get('window').height;
const data = [
    { id: '1', label: Strings.English.Bottomsheet.Provider, value: Strings.English.Bottomsheet.InchValue, imageSource: images.previewSwapHorse, },
    { id: '2', label: Strings.English.Bottomsheet.MaxSlippage, value: Strings.English.Bottomsheet.percentagevalue },
    { id: '3', label: Strings.English.Bottomsheet.Networkfees, value: Strings.English.Bottomsheet.BnbValue, dollar: Strings.English.Bottomsheet.dollarValue },

];


const Bottomsheet = (props) => {
    const { navigation } = props;
    const { colors: themeColor, image } = useTheme()
    const renderItem = ({ item }) => (

        <View style={[styles.itemContainer,]}>
            <View style={styles.labelValueContainer}>
                <Text style={[styles.label, { color: themeColor.subText }]}>{item.label}</Text>
                <View style={{ flexDirection: "row" }}>
                    {
                        item.imageSource &&
                        <Image source={item.imageSource} />
                    }

                    <Text style={[styles.value, { color: themeColor.text }]}>{item.value}</Text>

                </View>
            </View>
            <Text style={[styles.dollarText, { color: themeColor.subText }]}>{item.dollar}</Text>
        </View>


    );
    return (

        <BottomSheet
            sliderMaxHeight={height / 1}
            sliderMinHeight={height / height}
            isOpen={false}
            onOpen={props.onOpen}
            onClose={props.onClose}
            ref={props.panelRef}
            wrapperStyle={{
                backgroundColor: themeColor.cardBackground2
            }}
        >

            <Text style={[styles.topText, { color: themeColor.text }]}>{Strings.English.Bottomsheet.topText}</Text>
            <View style={styles.data_withImg}>
                <Image source={image.transfer} style={{
                    position: "absolute", left: 100,
                    zIndex: 1
                }} />
                <CommonPreviewSwap imageData={images.notification2} text1={Strings.English.Bottomsheet.BnbTwelve} text2={Strings.English.Bottomsheet.bnbTwenty} />
                <View style={[styles.between_line, { borderColor: themeColor.blueBorder }]} />
                <CommonPreviewSwap imageData={images.teher} text1={Strings.English.Bottomsheet.usdtTwelve} text2={Strings.English.Bottomsheet.usdtTwenty} />

            </View>


            <View style={[styles.first_cardRow, { borderColor: themeColor.blueBorder ,backgroundColor:themeColor.cardBackground}]}>
                <CardRow text1={Strings.English.Bottomsheet.From} text2={Strings.English.Bottomsheet.MyWallet} />
            </View>
            <View style={[styles.FlatList_view, { backgroundColor: themeColor.background2, flex: 1 }]}>
                <FlatList
                    ItemSeparatorComponent={() => (

                        <SeperateLine />

                    )}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


            <Button name={Strings.English.Bottomsheet.btn} />
        </BottomSheet>

    )
}

export default Bottomsheet

const styles = StyleSheet.create({


    topText: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: fonts.PoppinsBold
    },
    data_withImg: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: dimen(50),
        marginVertical: dimen(30)
    },
    between_line: {
        width: "60%",
        borderTopWidth: 1,
        marginTop: dimen(20),

    },
    first_cardRow: {
        height: dimen(68),
        borderRadius: 12,
        borderWidth: 1
    },
    FlatList_view: {
        flex: 1,
        borderRadius: 12,
        height: dimen(174),
        marginBottom: dimen(50),
        marginTop: dimen(9)
    },
    itemContainer: {
        marginHorizontal: dimen(10)

    },
    labelValueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        marginTop: dimen(16)
    },
    dollarText: {
        textAlign: "right",

    }

})