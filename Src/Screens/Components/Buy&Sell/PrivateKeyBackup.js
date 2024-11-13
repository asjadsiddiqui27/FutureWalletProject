import { Clipboard, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader'
import SeperateLine from '../../Common/SeperateLine'
import { useTheme } from '@react-navigation/native'
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';



const PrivateKeyBackup = (props) => {
    const { colors: themeColor, image } = useTheme();
    const [ethKey,setEthKey]=useState("")
    const [bnbKey,setBnbKey]=useState("")
    const [tronKey,setTronKey]=useState("")
    const data = [
        { id: '1', imageSource: images.whiteTriangle, name: 'ETH',key:ethKey },
        { id: '2', imageSource: images.notification2, name: 'BNB',key:bnbKey },
        { id: '3', imageSource: images.tron, name: 'Tron',key:tronKey },
        { id: '4', imageSource: images.notification1, name: 'BTC',key:"0xakjdjhj55ss53dadsad56asd54df43sa45adasd4as5c4as5dasd44d6as4dAs4asa4s6A" },

    ];



    const renderItem = ({ item }) => (
        <TouchableOpacity
         onPress={()=>{Clipboard.setString(item.key)
            showMessage({
                message: 'Data copied',
                backgroundColor: "#00BEF2",
                autoHide: true,
                duration: 1000,
                type: 'success',
                position: 'top',
              });
         }}>
            <View style={[styles.row, { backgroundColor: themeColor.cardBackground }]}>
                <View style={{flexDirection:"row",gap:5}}>
                <Image source={item.imageSource} style={{height:dimen(27),width:dimen(27)}}/>
                <Text style={[styles.name,{color:themeColor.text}]}>{item.name}</Text>
                </View>
               <Text style={[styles.key,{color:themeColor.subText}]}>{item.key}</Text>

            </View>
        </TouchableOpacity>
    );
    useEffect(() => {
        const getUser = async () => {
            try {
                const ethPrivateKey = JSON.parse(await AsyncStorage.getItem("PrivateKey"));
                const bnbPrivateKey = JSON.parse(await AsyncStorage.getItem("PrivateKey"));
                const tronPrivateKey = JSON.parse(await AsyncStorage.getItem("tronKey"));
                setEthKey(ethPrivateKey);
                setBnbKey(bnbPrivateKey)
                setTronKey(tronPrivateKey)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    return (
        <SafeAreaView style={[styles.main_conatiner, { backgroundColor: themeColor.background }]}>
            {/* <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" /> */}
            <CustomHeader header="Backup Private Keys" header_style={styles.header} onPress={() => { props.navigation.navigate("ManageWallets") }} headerimg={{ tintColor: themeColor.text }} />
            <SeperateLine />
            <View style={{ marginHorizontal: dimen(24),marginVertical:dimen(6) }}>
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
            <FlashMessage position="top" />
        </SafeAreaView>
    )
}

export default PrivateKeyBackup

const styles = StyleSheet.create({
    main_conatiner: {
        flex: 1,
    },
    header: {
        marginHorizontal: dimen(21)
    },
    row: {
        height: dimen(113),
        // borderWidth: 1,
        borderRadius: 12,
        justifyContent:"center",
        paddingHorizontal:dimen(20),
        gap:10,
        marginTop:dimen(12)
    },
    key:{
        fontSize:14,
        fontFamily:fonts.PoppinsMedium
    },
    name:{
        fontSize:16,
        fontFamily:fonts.PoppinsMedium
    }
})