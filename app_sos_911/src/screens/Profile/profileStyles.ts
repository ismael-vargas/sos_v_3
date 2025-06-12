import { StyleSheet } from "react-native";
import { normalize } from "../../utils/dimensions";

export const styles = StyleSheet.create({

  editIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 4,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },  
  container: {
    flex: 1,
    paddingTop: normalize(20),
  },
  header: {
    backgroundColor: "#6B7F7D",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",  // Borde blanco
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#A9A9A9",  // Gris
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: "#fff",  // Las letras de las etiquetas son blancas
  },
  input: {
    backgroundColor: "rgba(169, 169, 169, 0.5)",  // Gris con opacidad
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    color: "#fff",  // Las letras dentro del input son blancas
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: "#137C6B",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#005550",
    padding: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    color: "#fff",
  },
  footerLink: {
    color: "#FFB400",
    fontWeight: "bold",
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute',
    right: 10, 
  },
  backArrowContainer: {
    position: 'absolute',
    top: normalize(20), 
    left: 10,  
    zIndex: 1, 
  },

});
