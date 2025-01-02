
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import { images } from '../../../Theme/Images';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import DraggableFlatList from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Strings } from '../../../Theme/Strings';

const ReorderTokens = (props) => {
    const { colors: themeColor, image } = useTheme()
    const [data, setData] = useState([
        { id: '1', imageSource: images.notification2, name:Strings.reorderToken.Binance, name2: Strings.reorderToken.BNB, imageSource2: images.reorderIcon },
        { id: '2', imageSource: images.notification1, name: Strings.reorderToken.Bitcoin, name2: Strings.reorderToken.BTC, imageSource2: images.reorderIcon },
        { id: '3', imageSource: image.ethImage, name: Strings.reorderToken.Ethereum, name2: Strings.reorderToken.ETH, imageSource2: images.reorderIcon },
        { id: '4', imageSource: images.tron, name: Strings.reorderToken.Tron, name2: Strings.reorderToken.TRX, imageSource2: images.reorderIcon },
    ]);

    const renderItem = ({ item , drag, isActive}) => (
        <TouchableOpacity  
        activeOpacity={0.7}
        onLongPress={drag}
        disabled={isActive}
        >

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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

                <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
                <CustomHeader header={Strings.reorderToken.headerName} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Dashboard") }} />
                <SeperateLine />
                <DraggableFlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    onDragEnd={({ data }) => setData(data)}
                    ItemSeparatorComponent={() => (
                        <View style={{ marginHorizontal: dimen(24) }}>
                            <SeperateLine />
                        </View>
                    )}
                />
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default ReorderTokens

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