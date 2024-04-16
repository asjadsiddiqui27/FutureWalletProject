import React, { useContext } from 'react';
import { Platform, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDimensionPercentage as dimen } from '../../../Utils/Utils';
import SeperateLine from '../../Common/SeperateLine';
import CustomHeader from '../../Common/CustomHeader';
import colors from '../../../Theme/Colors';
import { AppContext } from '../../../Theme/themes/AppContext';

const Preferences = (props) => {
    // Accessing context to get theme state and setter
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

    // Toggling switch state and theme simultaneously
    const toggleSwitch = () => {
        setIsDarkTheme(previousState => !previousState); // Toggle theme
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ marginHorizontal: dimen(24) }}>
                <CustomHeader header="Preferences" onPress={() => { props.navigation.navigate("Settings") }} />
            </View>
            <SeperateLine />
            <View style={styles.container}>
                <Text style={styles.selectTheme_text}>Select theme</Text>
                {/* Switch component controlled by theme state */}
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                />
            </View>
            <SeperateLine />
        </SafeAreaView>
    )
}

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
});

export default Preferences;
