import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';
import fonts from '../../../Theme/Fonts'
import { images } from '../../../Theme/Images';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import Button from '../../Common/CustomButton';
import TextOrInput from '../../Common/TextOrInput';
import CustomModal from '../../Common/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height;



const ManageBottomSheet = (props, { value }) => {
    const { navigation } = props;
    const { colors: themeColor, image } = useTheme()
    const [modalVisible, setModalVisible] = useState(false);
    const [walletName, setWalletName] = useState("");
    const data = [
        { id: '1', imageSource: images.backuppassphrase, name: 'Backup Passphrase', imageSource2: images.settingGreater, text3: "EnterPasscode" },
        { id: '2', imageSource: images.backupkey, name: 'Backup Private key', imageSource2: images.settingGreater, text3: "PrivateKeyBackup" },
        { id: '3', imageSource: images.deletewallet, name: "Delete Wallet", imageSource2: images.settingGreater,text3:"CommonModal" },

    ];


    useEffect(() => {
        const getUser = async () => {
            try {

                const getWalletName = JSON.parse(await AsyncStorage.getItem('name'));
                setWalletName(getWalletName)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            // if (item.id === '3') {
            //     setModalVisible(true);
            // } else {
                props.panelRef.current.togglePanel();
                props.navigation.navigate(item.text3);
            // }
        }}>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={item.imageSource} style={styles.image} />
                    <Text style={[styles.name, { color: themeColor.text }]}>{item.name}</Text>
                </View>
                <View>
                    <Image source={item.imageSource2} style={styles.image2} />
                </View>
            </View>
        </TouchableOpacity>
    );


    return (
        <View>

            {/* <ImageBackground
                source={images.futureBackgroundImg}
                style={{
                    height: "100%", width: "100%", 
                    
                }}
                blurRadius={9}
            > */}


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

                    <Text style={[styles.topText, { color: themeColor.text }]}>{Strings.ManageBottomSheet.Wallet}</Text>
                    <TextOrInput
                        label="Name" placeholder="Wallet 01"
                        value={walletName}
                        label2="Make Default"
                        labelStyle={{ color: colors.lightBlue }}

                    />
                    <View style={{ marginVertical: dimen(34) }}>
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

                    <Button name="Update" />
                </BottomSheet>
                
                <CustomModal isVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation} />
            {/* </ImageBackground> */}
        </View>
    )
}

export default ManageBottomSheet

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

    },
    row: {
        // marginHorizontal: dimen(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: dimen(16),

    },
    image: {
        width: dimen(24),
        height: dimen(24),

    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        marginLeft: dimen(8)
    },

})
