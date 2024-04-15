import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../Theme/Colors'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import CustomHeader from '../../Common/CustomHeader';
import { Strings } from '../../../Theme/Strings';
import { images } from '../../../Theme/Images';
import fonts from '../../../Theme/Fonts';
import Button from '../../Common/CustomButton';
import CustomManageWalletRow from './CustomManageWalletRow';
import SeperateLine from '../../Common/SeperateLine';
const ManageWallets = (props) => {
    return (
        <SafeAreaView style={styles.main_container}>

            <CustomHeader header={Strings.English.ManageWallets.manageWallets} header_style={styles.header} />

           <SeperateLine/>

            <View style={styles.content_mainView}>


                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Basic} wallet_type={Strings.English.ManageWallets.walletType1} />
                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Wallet02} wallet_type={Strings.English.ManageWallets.walletType2} bin={images.bin}/>
                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Basic} wallet_type={Strings.English.ManageWallets.walletType1} />
                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Wallet02} wallet_type={Strings.English.ManageWallets.walletType2} bin={images.bin}/>
                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Basic} wallet_type={Strings.English.ManageWallets.walletType1} />
                <CustomManageWalletRow label_text={Strings.English.ManageWallets.Wallet02} wallet_type={Strings.English.ManageWallets.walletType2} bin={images.bin}/>

            </View>
            <View style={styles.Button_view}>
                <Button name={Strings.English.ManageWallets.button_text} onPress={() => { props.navigation.navigate("onboarding") }} />
            </View>

        </SafeAreaView>
    )
}

export default ManageWallets

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: colors.White
    },
    header: {
        marginHorizontal: dimen(21)
    },
    top_line: {
        borderWidth: 0.195,
        width: "100%",
        borderColor: colors.greenText,
    },
    content_mainView: {
        marginHorizontal: dimen(24),
        flex: 0.95
    },
   Button_view:{
    marginBottom: dimen(80), 
    flex: 0.05, 
    marginHorizontal: dimen(24)
   }
   
    
    
})