import React, { useState, useEffect } from "react";
import { TextInput, Button, StatusBar, TouchableOpacity, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Styles.js";
import crud from "../services/crud.js";

export default function AddEditScreen({ navigation, route }) {
  const person = route.params?.person;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (person) {
      setFirstname(person.firstname);
      setLastname(person.lastname);
      setEmail(person.email);
    }
  }, [person]);

  function verificaCampos(){
    if (!firstname.trim() === "" || !lastname.trim() === "" || !email.trim() === "") {
      Alert.alert("Nenhum campo pode estar vazio");
      return false;
    }
    return true;
  }

  async function savePerson() {
    if(!verificaCampos()){
      return;
    }

    const newPerson = {
      firstname,
      lastname,
      email,
    };

    try {
      if (person) {
        await crud.editPeople(person.id, newPerson);
      } else {
        await crud.createPeople(newPerson);
      }

      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  }

  return (
    <SafeAreaView style={styles.containerSecondScreen} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" />

      <TextInput
        style={styles.input}
        placeholder="Primeiro Nome"
        value={firstname}
        onChangeText={setFirstname}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastname}
        onChangeText={setLastname}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={savePerson}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      {/* <Button title="Voltar" onPress={goBack} /> */}
    </SafeAreaView>
  );
}