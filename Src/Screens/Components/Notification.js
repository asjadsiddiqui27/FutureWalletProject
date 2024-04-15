import React from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from '../../Theme/Colors';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import CustomHeader from '../Common/CustomHeader';
import { images } from '../../Theme/Images';
import fonts from '../../Theme/Fonts';
import { Strings } from '../../Theme/Strings';
import SeperateLine from '../Common/SeperateLine';

const Notification = (props) => {
    const data = [
        { id: '1', imageSource: images.notification1, text: Strings.English.notification.text1, time: Strings.English.notification.time1 },
        { id: '2', imageSource: images.notification2, text: Strings.English.notification.text2, time: Strings.English.notification.time2 },
        { id: '3', imageSource: images.notification3, text: Strings.English.notification.text3, time: Strings.English.notification.time3 },
    ];

    const renderItem = ({ item }) => (
        <View>
        <View style={styles.row}>
            <View style={styles.img_view}>
                <Image source={item.imageSource} style={styles.img} />
            </View>
            <View style={styles.text_view}>
                <Text style={styles.data_text1}>{item.text}</Text>
                <View style={styles.data_text2_view}>
                    <Text style={styles.data_text2}>{item.time}</Text>
                </View>
            </View>
        </View>
        <SeperateLine top_line={styles.SeperateLine}/>
        </View>
    );

    return (
        <SafeAreaView style={styles.main_conatiner}>
            <StatusBar backgroundColor="white" />
            <CustomHeader header="Notification" header_style={styles.header} onPress={() => { props.navigation.navigate("TabNavigation") }} />
            <SeperateLine top_line={styles.top_line}/>
            <View style={styles.main_data_container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
               
             
            </View>
          
        </SafeAreaView>
    );
}

export default Notification;

const styles = StyleSheet.create({
    main_conatiner: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: 24,
        marginBottom: dimen(20),
    },
    main_data_container: {
        flex: 1,
        marginHorizontal: dimen(24)
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        height: dimen(44),
        width: dimen(348),
    },
    img: {
        height: dimen(44),
        width: dimen(44)
    },
    text_view: {
        marginLeft: dimen(12)
    },
    data_text1: {
        fontSize: 13,
        fontFamily: fonts.PoppinsMedium,
        color: colors.Black,
        lineHeight: dimen(20)
    },
    data_text2_view: {
        padding: 1,
        backgroundColor: "#F0F9FC",
        width: dimen(150.61)
    },
    data_text2: {
        fontSize: 12,
        color: colors.Black,
        lineHeight: dimen(20),
        marginLeft: dimen(6),
    },
    top_line:{
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.borderLineColor,
        marginBottom:dimen(24)
    },
    SeperateLine:{
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.borderLineColor,
        marginVertical:dimen(19)
    }
});
