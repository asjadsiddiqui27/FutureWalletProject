import React, { useEffect, useRef, useState } from 'react'
import { Alert, Dimensions, FlatList, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import BottomSheet from "react-native-simple-bottom-sheet"
import CheckBox from '@react-native-community/checkbox';
import Button from '../../Common/CustomButton';
import SeperateLine from '../../Common/SeperateLine';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../Theme/Strings';
import { BlurView } from '@react-native-community/blur';
import { images } from '../../../Theme/Images';

const height = Dimensions.get('window').height;

const data = [
    { id: '1', text: Strings.English.Acknowledge.condition1 },
    { id: '2', text: Strings.English.Acknowledge.condition2 },
    { id: '3', text: Strings.English.Acknowledge.condition3 },
];

const Acknowledge = (props) => {
    const { colors: themeColor, image } = useTheme();
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const handleCheckboxChange = (itemId) => {
        const updatedSelectedId = selectedId.includes(itemId) ? selectedId.filter(id => id !== itemId) : [...selectedId, itemId];
        setSelectedId(updatedSelectedId);
    };

    const renderItem = ({ item }) => (
        <View style={styles.main_data_view}>
            <View>
                <CheckBox
                    value={selectedId.includes(item.id)}
                    onValueChange={() => handleCheckboxChange(item.id)}
                    style={styles.checkbox}
                    tintColors={{ true: '#00BEF2', false: "grey" }}
                    onCheckColor="white"
                />
            </View>

            <View style={styles.dataView}>
                <Text style={[styles.text, { color: themeColor.text }]}>{item.text}</Text>
            </View>
        </View>
    );
    useEffect(() => {
        setSelectedCount(selectedId.length);
    }, [selectedId]);



    return (
        <View style={styles.main_container}>
            <ImageBackground
                source={images.futureBackgroundImg}
                style={{
                    height: "100%", width: "100%", alignItems: "center",
                    justifyContent: "center"
                }}
                blurRadius={5}
            >


                <StatusBar backgroundColor="black" />
                {/* {bottomSheetVisible && Platform.OS === 'android' ? (
                    <BlurView
                        style={StyleSheet.absoluteFill}
                        blurType="light"
                        blurAmount={3}
                        reducedTransparencyFallbackColor="white"
                    />
                ) : null} */}

                <BottomSheet
                    sliderMaxHeight={height}
                    onOpen={() => setBottomSheetVisible(true)}
                    onClose={() => setBottomSheetVisible(false)}
                    ref={panelRef}
                    wrapperStyle={{
                        backgroundColor: themeColor.background2
                    }}
                >
                    <View style={styles.topText}>
                        <Text style={[styles.text1, { color: themeColor.text }]}>{Strings.English.Acknowledge.text1}</Text>
                        <Text style={[styles.text2, { color: themeColor.subText }]}>{Strings.English.Acknowledge.text2}</Text>
                        <View style={{ marginVertical: 32 }}>
                            <FlatList
                                ItemSeparatorComponent={() => (
                                    <SeperateLine />
                                )}
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>

                    {
                        (selectedCount !== data.length) ?
                            <View style={styles.button_view}>
                                <Text style={styles.button_text}>{Strings.English.Acknowledge.Continue}</Text>
                            </View> :
                            <Button disabled={selectedCount !== data.length} onPress={() => { props.navigation.navigate("SecretPhrase2") }} />

                    }

                </BottomSheet>
            </ImageBackground>
        </View>
    )
}

export default Acknowledge

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "black"
    },
    topText: {
        gap: 10
    },
    text1: {
        color: "white",
        fontSize: 19,
        fontWeight: "700",
        textAlign: "center"
    },
    text2: {
        color: "grey",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        lineHeight: 20
    },
    main_data_view: {
        flex: 1,
        flexDirection: 'row'
    },
    dataView: {
        flex: 1,
        alignSelf: "center"
    },
    text: {
        color: "white",
        lineHeight: 20,
        fontSize: 14,
        fontWeight: "500"

    },
    button_view: {
        height: 55,
        justifyContent: "center",
        backgroundColor: "grey",
        // marginTop: 10,
        borderRadius: 10,
        // marginBottom: 30,
    },
    button_text: {
        color: "black",
        fontSize: 16,
        fontWeight: "800",
        textAlign: "center"
    }

});
