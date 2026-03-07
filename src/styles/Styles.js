import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
    backgroundColor: "#fff"
  },

  containerSecondScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    backgroundColor: "#2f66e0",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 26,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    marginTop: 0
  },

  listContainer: {
    paddingTop: 10,
    paddingBottom: 20
  },

  deleteText:{
    color: "#ff0000"
  },
  editText:{
    color: "#2f66e0"
  },

  item: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fffff",
    shadowColor: "#0000"
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  titleContacts: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    textAlign: "center"
  },

  email: {
    marginBottom: 10,
    color: "#555"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6
  },

  button: {
  backgroundColor: "#2f66e0",
  paddingVertical: 12,
  paddingHorizontal: 25,
  borderRadius: 8,
  alignItems: "center"
},

buttonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold"
},

buttonContainer: {
  marginTop: 10,
  marginBottom: 20,
  alignItems: "center"
},
});