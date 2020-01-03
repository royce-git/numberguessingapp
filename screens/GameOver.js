import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOver = props => {
    return (
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
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 35,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOver;
