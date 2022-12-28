import React from "react";
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";

const width = Dimensions.get('screen').width;

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return <>
    <Text style={estilos.nome}>{nome}</Text>
    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda}></Image>
      <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
    </View>
    <Text style={estilos.descricao}>{descricao}</Text>
    <Text style={estilos.preco}>{preco}</Text>

    <TouchableOpacity style={estilos.botao} onPress={() => { }}>
      <Text style={estilos.textoBotao}>{botao}</Text>
    </TouchableOpacity>
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
  },

  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold"
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,

  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,

  },
  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"

  },
});