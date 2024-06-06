import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import CustomSearchBar from '../../Common/CustomSearchBar';
import { images } from '../../../Theme/Images';
import { Image } from 'react-native';
import fonts from '../../../Theme/Fonts';
import Button from '../../Common/CustomButton';

const data = [
    { id: '1', imageSource: images.notification2, name: 'Binance', name2: "BNB", amount: 'BNB' },
    { id: '2', imageSource: images.notification1, name: 'Bitcoin', name2: "BTC", amount: 'ERC20' },
    { id: '3', imageSource: images.notification3, name: 'Ethereum', name2: "ETH", amount: 'ERC20' },
    { id: '4', imageSource: images.tron, name: 'Tron', name2: "TRX", amount: 'ERC20' },

];

const Token = [
    { id: '1', name2: "All", },
    { id: '2', name2: "BTC", },
    { id: '3', name2: "ETH", },
    { id: '4', name2: "Tron", },
    { id: '5', name2: "BNB", },

];

const Chain = (props) => {
    const { colors: themeColor, image } = useTheme()

    const renderItem2 = ({ item }) => {
       
        let customColor = null; 
        if (item.id !== '1') {
            customColor = [themeColor.cardBackground, themeColor.cardBackground, themeColor.cardBackground];
        }
    
        return (
            <TouchableOpacity>
                <View style={{ marginVertical: dimen(20) }}>
                    <Button
                        name={item.name2}
                        customColor={customColor}
                        buttonStyle={styles.smallBtn}
                        textColor={styles.btn_text}
                    />
                </View>
            </TouchableOpacity>
        );
    };
    

    const renderItem = ({ item }) => (
        <TouchableOpacity>

            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                    <Text style={[styles.name, { color: themeColor.subText }]}>{item.name2}</Text>
                </View>

                <View>
                    <Text style={[styles.value, { color: themeColor.text }]}>{item.amount}</Text>
                </View>

            </View>

        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>

            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Chain" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Swap") }}/>
            <SeperateLine />

            <View style={{flex:0.7}}>

                <FlatList
                    data={Token}
                    horizontal={true}
                   
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                />
                <CustomSearchBar />
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
            </View>

            <View style={styles.btnView}>
                <Button/>
            </View>
        </SafeAreaView>
    )
}

export default Chain

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
    btnView:{
        marginHorizontal:dimen(24),
        flex:0.3,
        justifyContent:"flex-end",
        marginBottom:dimen(80)
    },
    smallBtn: {
      marginHorizontal:dimen(10),
        marginTop: 10,
        borderRadius: 10,
        width: 88,
        borderColor: colors.textColor,
       
    },
    btn_text: {
        fontSize: 12,
        textAlign: "center",
        margin: dimen(15),
        color: colors.White,
        fontFamily: fonts.PoppinsMedium,

    },
})