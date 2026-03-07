import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Styles.js";
import crud from "../services/crud.js";
import Card from "../components/card.js";

const API_URL = "http://localhost:3000/peoples";

export default function HomeScreen({ navigation }) {
  const [peoples, setPeoples] = useState([]);

  function loadPeople() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPeoples(data))
      .catch((error) => console.error("Erro no GET:", error));
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadPeople();
    });

    return unsubscribe;
  }, [navigation]);

  async function handleDelete(id) {
    try {
      await crud.deletePeople(id);
      loadPeople();
    } catch (error) {
      console.error("Erro no DELETE:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.titleContacts}>Meus Contatos</Text>
      </View>

      <FlatList
        data={peoples}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Card
            person={item}
            onEdit={(person) =>
              navigation.navigate("AddEditScreen", { person })
            }
            onDelete={handleDelete}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddEditScreen")}
        >
          <Text style={styles.buttonText}>Adicionar Contato</Text>
        </TouchableOpacity>
      </View>




    </SafeAreaView>
  );
}