import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

//Este Footer não está funcionando ainda! :(


export default function Footer(){
    return(
        <View style={styles.boxFooter}>
            <Text>Criado por <Text style={styles.textFooter}>cvsbarros</Text></Text>
        </View>
    );
}