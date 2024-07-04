import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../Theme/Colors';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import SeperateLine from '../../Common/SeperateLine';
import CustomSearchBar from '../../Common/CustomSearchBar';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Send = (props) => {
    const { colors: themeColor, image } = useTheme()
    const [searchData, setSearchData] = useState("")

    const [ethbalance, setEthBalance] = useState("");
    const [bnbbalance, setBnbBalance] = useState("");
    const [btcbalance, setBtcBalance] = useState("");
    useEffect(() => {
        const getUser = async () => {
            try {
                const getEthBalance = JSON.parse(await AsyncStorage.getItem("ethBalance"));
                const getBnbBalance = JSON.parse(await AsyncStorage.getItem("bnbBalance"));
                const getBtcBalance = JSON.parse(await AsyncStorage.getItem("btcBalance"));
                console.log("get data:::::::::::::", getEthBalance, getBnbBalance, getBtcBalance);
                setEthBalance(getEthBalance);
                setBnbBalance(getBnbBalance);
                setBtcBalance(getBtcBalance)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    const data = [
        { id: '1', imageSource: images.notification2, name: 'Binance', amount: bnbbalance, text3: "SendBnb" },

        { id: '2', imageSource: images.notification3, name: 'Ethereum', amount: ethbalance, text3: "SendEth" },
        { id: '3', imageSource: images.notification1, name: 'Bitcoin', amount: btcbalance, text3: "SendBtc" },

    ];
    const [list, setList] = useState(data);
    const filterData = (text) => {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        setList(filteredData);
    };

    const handleSearch = (text) => {
        setSearchData(text);
        if (text === '') {
            setList(data);
        } else {
            filterData(text);
        }
    };


    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.navigation.navigate(item.text3) }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                </View>

                <View>
                    <Text style={[styles.value, { color: themeColor.text }]}>{item.amount}</Text>
                </View>

            </View>
        </TouchableOpacity>

    );

    return (
        <SafeAreaView style={[styles.main_conatiner, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Send" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("TabNavigation") }} />

            <SeperateLine />

            <View style={{ marginTop: dimen(20) }}>
                <CustomSearchBar value={searchData} onChangeText={handleSearch} />
            </View>
            <FlatList
                data={list}
                ItemSeparatorComponent={() => (
                    <View style={{ marginHorizontal: dimen(24) }}>
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
