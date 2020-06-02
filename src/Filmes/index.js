import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Filmes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.poster}>
        <Image source={{ uri: this.props.data.foto }} style={styles.foto} />
        <View style={styles.footer}>
          <Text style={styles.nome}>Filme: {this.props.data.nome}</Text>
          <Text style={styles.sinopse}>Sinopse: {this.props.data.sinopse}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  poster: {
    flexDirection: "column",
    width: 500,
    height: 350,
    backgroundColor: "#ddd",
    borderRadius: 8,
    margin: 5,
  },
  foto: {
    width: 500,
    height: 200,
    borderRadius: 8,
    margin: 1,
  },
  footer: {
    flex: 1,
    flexDirection: "column",
  },
  nome: {
    fontSize: 15,
    fontWeight: "bold",
  },
  sinopse: {
    margin: 3,
    fontSize: 15,
    textAlign: "justify",
  },
});
