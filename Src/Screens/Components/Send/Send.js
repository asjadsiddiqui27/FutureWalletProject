import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../Theme/Colors';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import SeperateLine from '../../Common/SeperateLine';

const Send = (props) => {

    const data = [
        { id: '1', imageSource: images.notification2, name: 'Binance', amount: '167.57 BNB' },
        { id: '2', imageSource: images.notification1, name: 'Bitcoin', amount: '1.97 BTC' },
        { id: '3', imageSource: images.notification3, name: 'Ethereum', amount: '22.03 ETH' },
        { id: '4', imageSource: images.tron, name: 'Tron', amount: '500 TRX' },

    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.navigation.navigate("Bitcoin") }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>

                <View>
                    <Text style={styles.value}>{item.amount}</Text>
                </View>

            </View>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={styles.main_conatiner}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CustomHeader header="Send" header_style={styles.header} onPress={() => { props.navigation.navigate("TabNavigation") }} />

          <SeperateLine/>


            <FlatList
                data={data}
                ItemSeparatorComponent={() => (
                    <View style={{ marginHorizontal: dimen(24)}}>
                        <SeperateLine />
                    </View>
                )}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

export default Send;

const styles = StyleSheet.create({
    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
    row: {
        marginHorizontal: dimen(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: dimen(16),
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
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
    }
});
