import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../../Common/CustomHeader';
import SeperateLine from '../../Common/SeperateLine';
import colors from '../../../Theme/Colors';
import Button from '../../Common/CustomButton';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';

const NativeCurrency = (props) => {
    const { colors: themeColor } = useTheme();
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([
        { id: '1', name: "AUD - Australian Dollar" },
        { id: '2', name: "EUR - Euro" },
        { id: '3', name: "USD - United States dollar" },
        { id: '4', name: "NZD - New Zealand Dollar" },
        { id: '5', name: "CAD - Canadian Dollar" },
        { id: '6', name: "INR - Indian Rupee" ,imageSource2:images.btcFilled},
        { id: '7', name: "GBP - British Pound" },
        { id: '8', name: "JPY - Japanese YEN" },
        { id: '9', name: "CNY - Chinese Yuan" },
        { id: '10', name: "AED - United Arab Emirates Dirham" },
    ]);

    const handlePress = (itemId) => {
        setSelectedItem(itemId);
        setData(prevList => prevList.map(item => ({
            ...item,
            imageSource2: item.id === itemId ? images.btcFilled : null,
            
        })));
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={styles.row}>
                <Text style={[styles.name, { color: item.id === selectedItem ? themeColor.text : themeColor.subText }]}>
                    {item.name}
                </Text>
                {item.imageSource2 && <Image source={item.imageSource2} style={styles.image} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.main_container, { backgroundColor: themeColor.background }]}>
            <StatusBar backgroundColor={themeColor.background} barStyle="dark-content" />
            <CustomHeader header="Currency Preference" header_style={styles.header} headerimg={{ tintColor: themeColor.text }} onPress={() => { props.navigation.navigate("Settings") }} />
            <SeperateLine />
            <View style={styles.top_dataView}>
                <View style={[styles.FlatList_view, { borderColor: themeColor.blueBorder }]}>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginHorizontal: dimen(24), marginVertical: dimen(16) }}>
                                <SeperateLine />
                            </View>
                        )}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
            <View style={styles.button_View}>
                <Button name='Save' />
            </View>
        </SafeAreaView>
    );
};

export default NativeCurrency;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: colors.White,
    },
    header: {
        marginHorizontal: dimen(21),
    },
    top_dataView: {
        flex: 0.9,
    },
    button_View: {
        flex: 0.15,
        marginHorizontal: dimen(24),
    },
    FlatList_view: {
        borderWidth: 1,
        height: dimen(603),
        borderRadius: 12,
        marginHorizontal: dimen(24),
        padding: dimen(20),
        marginTop: dimen(24),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
    },
    image: {
        width: dimen(24),
        height: dimen(24),
    },
});
