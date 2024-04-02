import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../Common/CustomButton';
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import colors from '../../Theme/Colors';
import CheckBox from '@react-native-community/checkbox';
import { images } from '../../Theme/Images'
import { Strings } from '../../Theme/Strings'
import fonts from '../../Theme/Fonts'
import CustomHeader from '../Common/CustomHeader';

const Legal = (props) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.main_Container}>
            <View style={styles.main_view1}>
            <CustomHeader onPress={()=>{props.navigation.navigate("onboarding")}}  header='Legal'/>
                <View style={styles.top_text_View}>
                    <Text style={styles.top_text}>{Strings.English.label.topLabel}</Text>
                </View>

                <View style={styles.middle_main_view}>

                    <View style={[styles.middle_data_view, { top: dimen(23) }]}>
                        <Text style={styles.middle_Label_text}>{Strings.English.label.privacyPolicy}</Text>
                        <TouchableOpacity>
                            <Image source={images.greaterthan} style={[styles.img, { tintColor: colors.greenText }]} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.Line} />

                    <View style={styles.middle_data_view}>
                        <Text style={styles.middle_Label_text}>{Strings.English.label.termsOfService}</Text>
                        <TouchableOpacity>
                            <Image source={images.greaterthan} style={[styles.img, { tintColor: colors.greenText }]} />

                        </TouchableOpacity>

                    </View>

                </View>


            </View>

            <View style={styles.main_view2}>
                {/* <View style={styles.insideMain_View2}> */}
                    <View style={styles.bottom_text_View}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            tintColors={{ true: '#00BEF2', false: '#00BEF2' }}
                        />

                        <Text style={styles.bottom_text}>{Strings.English.label.bottomText} </Text>
                    
                    </View>

                    <View style={styles.bottom_btn_View}>
                        <Button onPress={() => { props.navigation.navigate("walletname") }} name='Continue' />
                    </View>
                {/* </View> */}
            </View>


        </View>
    
  );
};

export default Legal;

const styles = StyleSheet.create({
    main_Container: {
        flex: 1,
        backgroundColor: colors.White
    },
    main_view1: {
        flex: 0.72,
        marginHorizontal: dimen(24),
    },
    top_text_View: {
        // height: dimen(48),
        marginTop: dimen(16),


    },
    top_text: {
        fontSize: 15,
        lineHeight: dimen(24),
        color: colors.greenText,
        fontFamily:fonts.PoppinsRegular,
        textAlign: "center",
    },

    middle_main_view: {
        marginTop:dimen(33),
        height: dimen(123),
        borderColor: colors.borderColor,
        borderWidth: dimen(1),
        borderRadius: dimen(12),
        paddingHorizontal: dimen(15),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    middle_data_view: {
        top: dimen(60),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    middle_Label_text: {
        color: colors.textcolor,
        fontSize: 16,
        fontFamily:fonts.PoppinsMedium
    },
    img: {
        height: dimen(12),
        width: dimen(7)
    },
    Line: {
        borderWidth: 0.5,
        top: dimen(40),
        borderColor: colors.borderLineColor,

    },
    main_view2: {
        flex: 0.28,
        marginHorizontal: dimen(24),
        justifyContent: 'flex-end',
      },
      bottom_text_View: {
        flex:2,
        flexDirection: 'row',
        alignItems:"flex-end",
        justifyContent:"center",
        marginBottom:dimen(36.07),
      },
      checkbox:{
        marginBottom:dimen(15)
        
      },
      bottom_text: {
        flexShrink:1,
        fontSize: 14,
        color: colors.textcolor,
        lineHeight: dimen(24),
        fontFamily:fonts.PoppinsMedium,
        
      },
      bottom_btn_View:{
        flex: 1,
        marginBottom:dimen(66.88),
        justifyContent:"flex-end"
    },
      
})