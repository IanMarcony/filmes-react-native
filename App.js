import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import api from "./services/api";
import Filmes from "./src/Filmes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  async componentDidMount() {
    const response = await api.get("r-api/?api=filmes");
    this.setState({ filmes: response.data });
  }

  //API - https://sujeitoprogramador.com/r-api/?api=filmes

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 5,
    backgroundColor: "#292929",
  },
});

export default App;
