import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../Common/CustomHeader'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import colors from '../../../Theme/Colors';
import fonts from '../../../Theme/Fonts';
import { images } from '../../../Theme/Images';
const Checkout = () => {
    return (
        <View style={styles.main_container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CustomHeader header="checkout" header_style={styles.header} />
            {/* ................................................................. */}


            <View style={styles.top_line} />

            <View style={{ marginHorizontal: dimen(24) }}>
                <View style={styles.top_view}>
                    <Image source={images.whiteTriangle} style={styles.centre_imgStyle} />
                    <Text style={styles.ethereum_text}>ETHEREUM</Text>
                    <Text style={styles.top_value_text}>4.6875345</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: dimen(25), marginTop: dimen(20) }}>
                    <Text style={{ fontSize: 16, fontFamily: fonts.PoppinsBold, color: colors.Black }}>$334.84 PER ETH</Text>
                    <Text style={{ fontSize: 14, fontFamily: fonts.PoppinsMedium, textAlign: "center", color: colors.greenText }}>Due to market volatility, the quantity you receive may deviate slightly from your order.</Text>
                </View>

                <View style={styles.top_2nd_line} />

                {/* .............................................................. */}



                <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Image source={images.whiteTriangle} style={{height:dimen(20),width:dimen(20)}}/>
                        <Text style={{color:colors.Black ,fontFamily:fonts.PoppinsMedium}}>Alchemy</Text>
                    </View>
                    <View>
                        <Text style={{ color:colors.greenText,fontSize:14,fontFamily:fonts.PoppinsMedium}}>Payment Gateway</Text>
                    </View>
                </View>

                {/* ............................................................... */}


                <View style={{marginTop:dimen(20)}}>
                    {/* .............. */}
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:16,color:colors.Black,fontFamily:fonts.PoppinsMedium}}>Network fee</Text>
                        <Text style={{fontSize:14,color:colors.greenText,fontFamily:fonts.PoppinsMedium}}>$56.16 (5%)</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:dimen(15)}}>
                        <Text style={{fontSize:16,color:colors.Black,fontFamily:fonts.PoppinsMedium}}>Platform fee</Text>
                        <Text style={{fontSize:14,color:colors.greenText,fontFamily:fonts.PoppinsMedium}}>$0.02 (2%)</Text>
                    </View>
                    <View style={styles.top_2nd_line} />
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:16,color:colors.Black,fontFamily:fonts.PoppinsMedium}}>Total Amount</Text>
                        <Text style={{fontSize:14,color:colors.greenText,fontFamily:fonts.PoppinsMedium}}>$1000.73 (7%)</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.2,
        width: "100%",
        borderColor: colors.greenText,
    },
    top_view: {
        // width:dimen(382),
        alignItems: "center",
        justifyContent: "center",
        height: dimen(119),
        marginTop: dimen(51),
        borderRadius: 12,
        backgroundColor: colors.blueBackground
    },
    centre_imgStyle: {
        height: dimen(59),
        width: dimen(59),
        position: "absolute",
        bottom: 85
    },
    ethereum_text: {
        fontSize: 16,
        fontFamily: fonts.PoppinsMedium,
        lineHeight: dimen(20),
        color: colors.Black
    },
    top_value_text: {
        fontSize: 26,
        fontFamily: fonts.PoppinsBold,
        color: colors.Black
    },
    top_2nd_line: {
        borderWidth: 0.2,
        marginVertical: dimen(16),
        width: "100%",
        borderColor: "#D8E2EC",
    }
})