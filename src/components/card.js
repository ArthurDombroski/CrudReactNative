import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Styles.js";

export default function Card({ person, onDelete, onEdit }) {

  return (
    <View style={styles.item}>

      <Text style={styles.title}>
        {person.firstname} {person.lastname}
      </Text>

      <Text>{person.email}</Text>

      <TouchableOpacity onPress={() => onEdit(person)}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(person.id)}>
        <Text style={styles.deleteText}>Excluir</Text>
      </TouchableOpacity>

      

    </View>
  );
}