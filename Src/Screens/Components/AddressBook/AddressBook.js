import { FlatList, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import CustomSearchBar from '../../Common/CustomSearchBar';
import fonts from '../../../Theme/Fonts';
import { Strings } from '../../../Theme/Strings';
import { images } from '../../../Theme/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
const data = [
    [
        {
            "id": 49,
            "name": "third",
            "address": "0x2d87b7c09585512fdf0ba54d379d54cc6167f0b2",
            "created_at": "2024-05-09T05:19:23.000Z",
            "wallet_data": [
                {
                    "id": 68,
                    "address_book_id": 49,
                    "wallet_address": "TYNZzWMwpRjspHhbEikfKaXhsam8NMPMmm",
                    "name": "tron",
                    "coin_family": 6,
                    "created_at": "2024-05-09T05:19:23.000Z",
                    "coin_data": {
                        "coin_image": "https://stage-futurewallet.s3.ap-southeast-1.amazonaws.com/uploads/tron.png"
                    }
                }
            ]
        },
        {
            "id": 48,
            "name": "second",
            "address": "0x2d87b7c09585512fdf0ba54d379d54cc6167f0b2",
            "created_at": "2024-05-09T05:18:39.000Z",
            "wallet_data": [
                {
                    "id": 67,
                    "address_book_id": 48,
                    "wallet_address": "0x000000000E9e87cB030A951f10062810bdC1B117",
                    "name": "first",
                    "coin_family": 2,
                    "created_at": "2024-05-09T05:18:39.000Z",
                    "coin_data": {
                        "coin_image": "https://stage-futurewallet.s3.ap-southeast-1.amazonaws.com/uploads/eth.png"
                    }
                }
            ]
        },
        {
            "id": 47,
            "name": "ASD",
            "address": "0x2d87b7c09585512fdf0ba54d379d54cc6167f0b2",
            "created_at": "2024-05-09T05:16:17.000Z",
            "wallet_data": [
                {
                    "id": 65,
                    "address_book_id": 47,
                    "wallet_address": "0xa6f79B60359f141df90A0C745125B131cAAfFD12",
                    "name": "ASD",
                    "coin_family": 2,
                    "created_at": "2024-05-09T05:16:17.000Z",
                    "coin_data": {
                        "coin_image": "https://stage-futurewallet.s3.ap-southeast-1.amazonaws.com/uploads/eth.png"
                    }
                },
                {
                    "id": 66,
                    "address_book_id": 47,
                    "wallet_address": "0x000000000De11e145AB169CbdF19083C4E46257F",
                    "name": "SECOND ",
                    "coin_family": 1,
                    "created_at": "2024-05-09T05:17:09.000Z",
                    "coin_data": {
                        "coin_image": "https://stage-futurewallet.s3.ap-southeast-1.amazonaws.com/uploads/bnb.png"
                    }
                }
            ]
        }
    ]
];


const AddressBook = (props) => {
    const { colors: themeColor, image } = useTheme()
    const [searchData, setSearchData] = useState("")
    const [showDataItemId, setShowDataItemId] = useState(null);

    const storeData = async (showDataItemId) => {
        try {
            await AsyncStorage.setItem('filteredData', JSON.stringify(showDataItemId));
            console.log("helllllll/////////////////", showDataItemId)
        } catch (e) {
            console.error('Error storing data:', e);
        }
    };

    useEffect(() => {

        const getUser = async () => {
            try {
                const userData = JSON.parse(await AsyncStorage.getItem("filteredData"))
                setShowDataItemId(userData)
                // console.log(userData)
            } catch (error) {
                console.log(error);
            }
        };
        getUser()
    }, [])

    const handleChange = (item) => {
        if (showDataItemId === "") {
            setShowDataItemId(item.id);
        } else {
            setShowDataItemId("");
        }
    };
    const renderItem = ({ item }) => {

        return (

            <View>
                <View style={[styles.itemContainer, { backgroundColor: themeColor.cardBackground }]}>

                    <TouchableOpacity style={styles.topBlueView} onPress={()=>{props.navigation.navigate("Wallet")}}>
                        <Text style={[styles.editText, { color: themeColor.background }]}>Edit</Text>
                    </TouchableOpacity>

                    <View style={styles.view_toData}>
                        <ImageBackground source={images.circleImg} style={styles.circleImgStyle}>
                            <Text style={[styles.name, { color: colors.lightBlue }]}>{item.name.charAt(0).toUpperCase()}</Text>
                        </ImageBackground>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                            <Text numberOfLines={1} style={[styles.address, { color: themeColor.subText }]}>{item.address}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { storeData(item.id),  handleChange(item) }} style={{ justifyContent: "center" }}>
                            <Image source={images.DownArrow1} style={styles.DownArrow1} />
                        </TouchableOpacity>
                    </View>

                </View>
                {showDataItemId === item.id &&

                    <View style={[styles.coinImagesContainer, { backgroundColor: themeColor.cardBackground }]}>
                        {item.wallet_data.map(wallet => (
                            <View key={wallet.id} style={styles.walletDataContainer}>
                                <Image source={{ uri: wallet.coin_data.coin_image }} style={styles.coin_image} />
                                <View>
                                    <Text style={[styles.name, { color: themeColor.text }]}>{wallet.name}</Text>
                                    <Text style={[styles.wallet_address, { color: themeColor.subText }]}>{wallet.wallet_address}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                }

            </View>
        )
    };

    const concatedData = data.flat();
    const filteredData = concatedData.filter(item => item.name.toLowerCase().includes(searchData.toLowerCase()));
    useEffect(() => {
        storeData(filteredData);
    }, [filteredData]);



    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Address Book" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} imgRight={images.whitePlus} onPress2={() => { props.navigation.navigate("AddNewContact") }}/>
            <SeperateLine />
            <View style={{ marginTop: dimen(20) }}>
                <CustomSearchBar value={searchData} onChangeText={setSearchData} />
            </View>
            <View style={styles.mainTopView}>
                <Text style={[styles.SavedText, { color: themeColor.text }]}>{Strings.English.AddressBook.Saved}</Text>
                <View style={{ marginTop: dimen(18) }}>
                    <FlatList
                        data={filteredData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}

                    />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default AddressBook

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },
    mainTopView: {
        marginHorizontal: dimen(24)
    },
    SavedText: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        marginTop: dimen(24)
    },
    itemContainer: {
        height: dimen(75),
        backgroundColor: 'white',
        marginBottom: 16,
        borderRadius: 12,
        borderWidth: 1

    },
    view_toData: {
        flex: 1,
        marginHorizontal: dimen(16),
        marginBottom: dimen(15),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20
    },
    topBlueView: {
        height: dimen(21),
        width: dimen(77),
        backgroundColor: colors.lightBlue,
        borderBottomLeftRadius: 7,
        borderTopRightRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end"
    },
    editText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: 12
    },
    circleImgStyle: {
        height: dimen(36),
        width: dimen(36),
        borderRadius: dimen(36),
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,

    },
    itemContainer2: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2
    },

    coinImagesContainer: {
        padding: dimen(10),
        gap: 30,
        marginBottom: dimen(10),

        borderRadius: 12
    },
    walletDataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#061220",

    },
    walletName: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        marginRight: 5,
    },
    wallet_address: {
        fontSize: 12,
        fontFamily: fonts.PoppinsLight
    },
    coin_image: {
        width: dimen(26),
        height: dimen(26), borderRadius: dimen(26),
        marginRight: dimen(10)
    },
    DownArrow1: {

        width: dimen(12),
        height: dimen(12)
    },


})