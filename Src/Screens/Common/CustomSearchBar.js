import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import colors from '../../Theme/Colors';
import { useTheme } from '@react-navigation/native';
const CustomSearchBar = (
    {
        onChangeText,
        value
    }
) => {
    const { colors: themeColor, image } = useTheme()
    return (
        <View >
            <SearchBar
            // placeholderTextColor={themeColor.text}
        
                placeholder="Search"
                value={value}
                onChangeText={onChangeText}
                inputStyle={styles.searchInput}
                inputContainerStyle={[styles.searchInputContainer, { borderColor: themeColor.blueBorder, backgroundColor: themeColor.background }]}
                containerStyle={[styles.searchContainer, { backgroundColor: themeColor.background }]}

            />
        </View>
    )
}

export default CustomSearchBar

const styles = StyleSheet.create({

    searchContainer: {
        backgroundColor: '#ffff',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: dimen(20),
    },
    searchInputContainer: {
        borderColor: colors.borderLineColor,
        borderWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "white",
        borderRadius: 12,

    },
    searchInput: {
        fontSize: 16,
        // color: 'white', 
    },
})