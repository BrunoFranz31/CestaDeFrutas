import React from "react";
import { StyleSheet, Image, Dimensions, Text } from 'react-native';
import logo from '../../../assets/logo.png'
import topo from '../../../assets/topo.png'


const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
   
    <Image source={topo} style={estilos.topo}></Image>
    <Text style={estilos.titulo}>{titulo}</Text>
    </>

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
      },
      titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
      }
})