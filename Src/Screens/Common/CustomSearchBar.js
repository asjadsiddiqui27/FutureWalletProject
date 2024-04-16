import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements'
import { getDimensionPercentage as dimen } from '../../Utils/Utils';
import colors from '../../Theme/Colors';
const CustomSearchBar = () => {
    return (
        <View >
            <SearchBar
                placeholder="Search"

                inputStyle={styles.searchInput}
                inputContainerStyle={styles.searchInputContainer}
                containerStyle={styles.searchContainer}
            
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