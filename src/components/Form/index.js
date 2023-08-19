import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import ResultImc from './ResultImc/';

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e a altura!")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular!")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

//Abaixo consta uma tentativa falha de criar uma função que exibisse o grau de IMC assim que o botão Calcular fosse pressionado
function grauImc(valorImc){
    if (valorImc < 18.5) {
        return(
            <Text>Você está abaixo do peso.</Text>); }

    else if (valorImc >= 18.5 && valorImc < 24.9) {
        return(
            <Text>Você está com peso normal.</Text>); }

    else if (valorImc >= 24.9 && valorImc < 29.9) {
        return(
            <Text>Você está com sobrepeso.</Text>); }

    else if (valorImc >= 30 && valorImc < 34.9) {
        return(
            <Text>Você está com obesidade grau 1.</Text>);}

    else if (valorImc >= 35 && valorImc < 39.9) {
        return(
            <Text>Você está com obesidade grau 2.</Text>);}

    else if (valorImc >= 40) {
        return(
            <Text>Você está com obesidade grau 3.</Text>);}

    else {
        return(
             <Text>Valor de IMC inválido.</Text>);}        
}


function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual:");
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Insira o peso e a altura!")
}

    return(
       <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"/>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 66.4" keyboardType="numeric"/>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() =>{validationImc()}}>
             <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
       </View>
    );
}