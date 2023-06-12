import React, {useState} from "react";
import {TextInput, View, Text, TouchableOpacity, Vibration} from "react-native";
import ResultImc from "./ResultIMC";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha a altura e o seu peso");
    const [imc, setImc] = useState(null);
    const [category, setCategory] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");
    const [erroMessage, setErroMessage] = useState(null);
    const [erroMessage2, setErroMessage2] = useState(null);


    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function verificationImc(){
        if( height == null){
            Vibration.vibrate();
            setErroMessage("Campo obrigatório*");
        }
        if( weight == null){
            Vibration.vibrate();
            setErroMessage2("Campo obrigatório*");
        }
    }
    
    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setMessageImc("Seu IMC é igual a :");
            setTextButton("Calcular Novamente");
            setErroMessage(null);
            setErroMessage2(null);
            if(imc < 18.5){
                setCategory("Magreza")
            }
            else if(imc > 18.5 && imc < 24.9){
                setCategory("Normal")
            }
            else if(imc > 25 && imc < 29.9){
                setCategory("Sobrepeso")
            }
            else if(imc > 30 && imc < 34.9){
                setCategory("Obesidade grau I")
            }
            else if(imc > 35 && imc < 39.9){
                setCategory("Obesidade grau II")
            }
            else if(imc > 40 ){
                setCategory("Obesidade grau III")
            }
            return
        }
        verificationImc();
        setImc(null);
        setTextButton("Calcular IMC");
        setMessageImc("Preencha o peso e a altura")
        
    }


    
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="EX. 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage2}</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="EX. 75.365"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
               
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} categoryImc ={category}/>
        </View>
    );
}