import { Alert, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import { useTheme } from '@react-navigation/native'
import CustomHeader from '../../Common/CustomHeader'
import SeperateLine from '../../Common/SeperateLine'
import colors from '../../../Theme/Colors';
import { Strings } from '../../../Theme/Strings';
import Button from '../../Common/CustomButton';
import TextOrInput from '../../Common/TextOrInput';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';
import CustomModal from '../../Common/CustomModal';


const Wallet = (props) => {
    const { colors: themeColor, image } = useTheme()
    const [isCustomModalVisible, setCustomModalVisible] = useState(false);
    const data = [
        { id: '1', imageSource: image.ethImage, name: 'ETH 1', imageSource2: images.dustbin, imageSource3: images.bluePencil, },
        { id: '2', imageSource: images.notification1, name: 'BTC 1', imageSource2: images.dustbin, imageSource3: images.bluePencil, },
        { id: '3', imageSource: images.notification2, name: 'BNB 1', imageSource2: images.dustbin, imageSource3: images.bluePencil, },


    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.navigation.navigate("Bitcoin") }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: dimen(20) }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                </View>

                <View style={{ flexDirection: "row", gap: 13 }}>
                    <TouchableOpacity>
                        <Image source={item.imageSource3} style={styles.image3} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={item.imageSource2} style={styles.image2} />
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>

    );

const handleDelete=()=>{
    setCustomModalVisible(true); 
    // console.log("hello********************")
}

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header={Strings.AddressBook.EditAddressBook} header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} onPress2={() => { props.navigation.navigate("AddNewContact") }} />
            <SeperateLine />
            <View style={{ flex: 0.9 ,marginHorizontal: dimen(24)}}>
                <View style={styles.inputView}>
                    <TextOrInput label={Strings.AddressBook.ContactName} placeholder={Strings.AddressBook.jordan} label2={Strings.AddressBook.DeleteContact} onPress={() => handleDelete()}/>
                    <CustomModal isVisible={isCustomModalVisible} setModalVisible={setCustomModalVisible} navigation={props.navigation} />

                </View>
                <View>
                    <Text style={[styles.WalletName, { color: themeColor.text }]}>{Strings.AddressBook.WalletName}</Text>
                    <View style={{ marginTop: dimen(25) }}>


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
                </View>
            </View>
            <View style={{ flex: 0.15, marginHorizontal: dimen(24) }}>
                <Button name={Strings.AddressBook.Update} onPress={() => { props.navigation.navigate("AddressBook") }} />
            </View>
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White

    },
    header: {
        marginHorizontal: dimen(21)
    },
    inputView: {
        marginTop: dimen(38),
    },
    WalletName: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        marginTop: dimen(24)
    },
    row: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: dimen(20),
    },
    image: {
        width: dimen(24),
        height: dimen(24),

    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,

    },
    image2: {
        height: dimen(14),
        width: dimen(13)
    },
    image3: {
        height: dimen(22),
        width: dimen(22)
    }
})