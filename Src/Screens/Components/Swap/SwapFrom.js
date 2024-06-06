import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import { images } from '../../../Theme/Images';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';



const SwapFrom = (props) => {
    const { colors: themeColor, image } = useTheme()
    const data = [
        { id: '1', imageSource: images.notification2, name: 'Binance', name2: "BNB", imageSource2:images.settingGreater },
        { id: '2', imageSource: images.notification1, name: 'Bitcoin', name2: "BTC", imageSource2:images.settingGreater },
        { id: '3', imageSource: image.ethImage, name: 'Ethereum', name2: "ETH", imageSource2:images.settingGreater },
        { id: '4', imageSource: images.tron, name: 'Tron', name2: "TRX", imageSource2:images.settingGreater},
    
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity>

            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                    <Text style={[styles.name, { color: themeColor.subText }]}>{item.name2}</Text>
                </View>

                <View>
                <Image source={item.imageSource2} style={styles.image2} />
                </View>

            </View>

        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="You Get" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Swap") }} />
            <SeperateLine />
            <FlatList
                    data={data}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginHorizontal: dimen(24) }}>
                            <SeperateLine />
                        </View>
                    )}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
        </SafeAreaView>
    )
}

export default SwapFrom

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    row: {
        marginHorizontal: dimen(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: dimen(16),
        
    },
    image: {
        width: dimen(44),
        height: dimen(44),

    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        marginLeft: dimen(8)
    },
    value: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
    },
})