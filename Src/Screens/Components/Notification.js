import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import CustomHeader from '../Common/CustomHeader';
import { images } from '../../Theme/Images';
import fonts from '../../Theme/Fonts';
import { Strings } from '../../Theme/Strings';
const Notification = (props) => {
    return (
        <View style={styles.main_conatiner}>
            <CustomHeader header="Notification" header_style={styles.header} onPress={() => { props.navigation.navigate("TabNavigation") }} />
            <View style={styles.top_line} />

            <View style={styles.main_data_container}>

                <View style={styles.main_data_view}>

                    <View style={[styles.row, { marginTop: dimen(24), marginBottom: dimen(16) }]}>
                        <View style={styles.img_view}>
                            <Image source={images.notification1} style={styles.img} />
                        </View>
                        <View style={styles.text_view}>
                            <Text style={styles.data_text1}>{Strings.English.notification.text1} </Text>
                            <View style={styles.data_text2_view}>
                                <Text style={styles.data_text2}>{Strings.English.notification.time1}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line_between_data} />

                    <View style={[styles.row, { marginVertical: dimen(19) }]}>
                        <View style={styles.img_view}>
                            <Image source={images.notification2} style={styles.img} />
                        </View>
                        <View style={styles.text_view}>
                            <Text style={styles.data_text1}>{Strings.English.notification.text2}  </Text>
                            <View style={styles.data_text2_view}>
                                <Text style={styles.data_text2}>{Strings.English.notification.time2}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line_between_data} />

                    <View style={[styles.row, { marginVertical: dimen(19) }]}>
                        <View style={styles.img_view}>
                            <Image source={images.notification3} style={styles.img} />
                        </View>
                        <View style={styles.text_view}>
                            <Text style={styles.data_text1}>{Strings.English.notification.text3}  </Text>
                            <View style={styles.data_text2_view}>
                                <Text style={styles.data_text2}>{Strings.English.notification.time3}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line_between_data} />

                </View>
            </View>

        </View>
    )
}

export default Notification

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
    top_line: {
        borderColor: colors.borderLineColor,
        borderWidth: 0.5
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
        width:dimen(150.61)
        

    },
    data_text2: {
        fontSize: 12,
        color: colors.Black,
        lineHeight: dimen(20),
        marginLeft: dimen(6),
    },
    line_between_data: {
        width: dimen(381),
        borderColor: colors.borderLineColor,
        borderWidth: 0.5,

    }

})