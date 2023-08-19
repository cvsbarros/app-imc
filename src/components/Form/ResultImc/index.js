import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';



export default function resultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Text>Criado por <Text style={styles.textFooter}>@cvsbarros</Text></Text>
        </View>
    );
}