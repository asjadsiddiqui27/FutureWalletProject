import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Button from './CustomButton';
import colors from '../../Theme/Colors';
import fonts from '../../Theme/Fonts';

const CustomModal = (props) => {
    const { colors: themeColor, image } = useTheme();

    return (
        <View style={styles.container}>
             <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible} 
                onRequestClose={() => {
                    props.setModalVisible(false); 
                }}
            >
                <View style={[styles.modalContainer, { backgroundColor: themeColor.background }]}>
                    <View style={[styles.modalContent, { backgroundColor: themeColor.cardBackground }]}>
                        <Text style={[styles.alertMsg, { color: themeColor.text }]}>Are you sure you want to delete the address ?</Text>
                        <View style={styles.btnView}>
                            <Button name='No' buttonStyle={styles.buttonStyle} customColor={[themeColor.alertBtnColor, themeColor.alertBtnColor, themeColor.alertBtnColor]} onPress={() => props.setModalVisible(false)}/>
                            <Button name='Yes' buttonStyle={styles.buttonStyle} onPress={() => { 
                                props.setModalVisible(false);
                                props.navigation.navigate("ManageWallets"); 
                            }}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default CustomModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    modalContent: {
        height: 258,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnView: {
        gap: 17,
        flexDirection: "row",
        marginTop:dimen(60)
    },
    alertMsg: {
        fontSize: 18,
        fontFamily: fonts.PoppinsBold,
        textAlign: "center",
        marginTop:dimen(30),
        lineHeight:dimen(22)
    },
    buttonStyle: {
        height: 50,
        width: 158,
        backgroundColor: colors.background,
        borderRadius: 25,
    }
});
