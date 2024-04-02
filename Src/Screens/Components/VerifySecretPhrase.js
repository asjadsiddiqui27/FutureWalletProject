import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../Theme/Colors'
import Button from '../Common/CustomButton'
import { wordsArray } from '../../Theme/Const'
import { Strings } from '../../Theme/Strings'
import { getDimensionPercentage as dimen } from '../../Utils/Utils'
import fonts from '../../Theme/Fonts'
import CustomHeader from '../Common/CustomHeader'


const VerifySecretPhrase = (props) => {

    const [dataArray, setMainArray] = useState(wordsArray)
    const [newArray, setNewArray] = useState([])


    const setItem = (Item, index) => {
        const updatedArray = [...newArray, { Item: Item, index: index }];
        setNewArray(updatedArray);
        dataArray.splice(index, 1, "");
    }

    const resetItem = (item) => {

        const { Item, index } = item

        const updatedArray = [...dataArray]
        updatedArray.splice(index, 1, Item)
        setMainArray(updatedArray);

        const filtered = newArray.filter((Oneitem) => Oneitem.index !== index);
        setNewArray(filtered);
    }


    return (
        <View style={styles.container}>

            <View style={styles.main_container}>
            <CustomHeader onPress={()=>{props.navigation.navigate("secretphrase")}}  header='Verify Secret Phrase'/>
                <View style={styles.main_body_container}>
                 
                    <View style={styles.text_heading_container}>
                        <Text onPress={()=>{props.navigation.navigate("setpasscode")}} style={styles.text_main_heading}>{Strings.English.verifyPhrase.taptheWord}</Text>
                    </View>

                    <View style={styles.body_main_container}>
                        {newArray.map((item, index) => (
                            <Button key={index} textColor={styles.btn_txt} text2_style={styles.btn_txt_2} buttonStyle={styles.btn_style_upper} name_2={item.index + 1 + "."} name={item.Item} onPress={() => { console.log(item), resetItem(item) }} />
                        ))}
                    </View>

                    <View style={styles.body_items_container}>
                        {dataArray.map((item, index) => (
                            <View style={{}} key={index}>
                                {item != "" ?
                                     <Button key={index} btnView={styles.btnView}  textColor={styles.btn_txt} text2_style={styles.btn_txt_2} name_2={index + 1 + "."} buttonStyle={styles.btn_style} name={item} onPress={() => {console.log(item), setItem(item, index) }} />
                                  :  <View style={styles.empty_Word} />}
                            </View>
                        ))}
                    </View>

                </View>


                <View style={styles.footer_container}>
                    <Button onPress={()=>{props.navigation.navigate("ImportWallet")}}/>
                </View>

            </View>
        </View>
    )
}

export default VerifySecretPhrase

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    main_container: {
        flex: 1,
        marginHorizontal: dimen(24),
    },

    main_body_container:{
        flex:0.8,
    },

    text_heading_container: {
    },

    text_main_heading: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: fonts.PoppinsMedium,
        color: colors.topText,
        lineHeight: 24,
        marginHorizontal: dimen(10),
        marginTop: dimen(16)
    },

    body_main_container: {
        backgroundColor: colors.lightCardBg,
        borderRadius: 12,
        height: dimen(167.13),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        // columnGap: 19,
        // rowGap: 5,
        padding:(6),
        alignContent:"flex-start",
        marginTop:dimen(24.44),

    },
    btn_style_upper: {
        height: dimen(40),
        width: dimen(93),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderLineColor,
        backgroundColor: colors.White,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // margin:dimen(16)
    },


    body_items_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop:dimen(24)
    },
    btnView: {
        height: dimen(40),
        width: dimen(88),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderLineColor,
        backgroundColor: colors.White,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: dimen(6),
    },
    btn_style: {
        flexDirection: "row",
    },
    btn_txt: {
        fontSize: 13,
        color: colors.Black,
        fontFamily: fonts.PoppinsMedium,

    },
    btn_txt_2: {
        fontSize: 13,
        color: colors.topText,
        fontFamily: fonts.PoppinsMedium
    },

    empty_Word: {
        height: dimen(40),
        width: dimen(88),
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: colors.borderLineColor,
        marginVertical: dimen(6),

    },

    footer_container:{
        flex:0.2,
        marginBottom:dimen(66.88),
        justifyContent:"flex-end",

    }




})