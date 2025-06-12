import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: -20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    elevation: 5,
  },
  panicImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50, // La mitad del ancho/alto para hacerlo circular
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  redText: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
  acceptButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});