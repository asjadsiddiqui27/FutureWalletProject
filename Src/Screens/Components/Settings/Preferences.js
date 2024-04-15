import { Platform, StatusBar, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getDimensionPercentage as dimen } from '../../../Utils/Utils'
import SeperateLine from '../../Common/SeperateLine'
import CustomHeader from '../../Common/CustomHeader'
import colors from '../../../Theme/Colors'
import { AppContext } from '../../../Theme/themes/AppContext'
import { useTheme } from '@react-navigation/native'




const Preferences = (props) => {
    // ****************************** theme**********8 //
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => { setIsEnabled(previousState => !previousState), setIsDarkTheme(current => !current) };

    const { colors } = useTheme();
    const { isDarkTheme, setIsDarkTheme } = React.useContext(AppContext)


    // ******************end here************//
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ marginHorizontal: dimen(24) }}>
                <CustomHeader header="Preferences" onPress={()=>{props.navigation.navigate("Settings")}}/>
            </View>
            <SeperateLine />

            <View style={styles.container}>
                <Text style={styles.selectTheme_text}>Select theme</Text>

                {/******************** theme change here  ********************************/}

                {/* toogle start here  */}
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                {/* toogle end here  */}

                {/* ************end here***************  */}
            </View>
            <SeperateLine />
        </SafeAreaView>

    )
}

export default Preferences

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: dimen(24),
        marginVertical: dimen(12)

    },
    selectTheme_text: {
        fontSize: dimen(16),
        color: colors.Black
    }
})