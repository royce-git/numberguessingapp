import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image  
                        // local image
                        source={require('../assets/success.png')} 
                        fadeDuration={1000}
                        //web image
                        //source={{uri: 'https://www.newzealand.com/assets/Tourism-NZ/Taranaki/fe080b172f/img-1536918737-7502-11544-4122894728_00d05bdd41_o__FocalPointCropWzQyNyw2NDAsNTAsNDMsODUsImpwZyIsNjUsMi41XQ.jpg'}}
                        style={styles.image}
                        
                        resizeMode='cover'/> 
                </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.numberOfGuesses}</Text> guesses to get the 
                    number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
                    <MainButton onPress={props.onRestart}>
                        NEW GAME
                    </MainButton>
                
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 35,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOver;
