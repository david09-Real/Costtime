import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker"; 

export default function Cadastro() {
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient colors={['#E65729','#000000', '#343434ff']} style={styles.container}>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.upload} onPress={pickImage}>
          {image ? (
            <ImageBackground source={{ uri: image }} style={styles.imagePreview} imageStyle={{ borderRadius: 10 }} />
          ) : (
            <Text style={styles.uploadText}>+</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.title}>Complete seu hjuh</Text>

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              placeholder="Coloque seu nome"
              placeholderTextColor="#aaa"
              value={nome}
              onChangeText={setNome}
              style={styles.textInput}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              placeholder="Coloque seu sobrenome"
              placeholderTextColor="#aaa"
              value={sobrenome}
              onChangeText={setSobrenome}
              style={styles.textInput}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              placeholder="Data de nascimento"
              placeholderTextColor="#aaa"
              value={nascimento}
              onChangeText={setNascimento}
              style={styles.textInput}
            />
          </View>

          <View style={styles.input}>
            <Picker
              selectedValue={genero}
              style={styles.picker}
              dropdownIconColor="#fff"
              onValueChange={(itemValue) => setGenero(itemValue)}
            >
              <Picker.Item label="Selecionar gênero" value="" color="#999" />
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
              <Picker.Item label="Outro" value="outro" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    width: 360,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 8 },
  },
  upload: {
    height: 130,
    backgroundColor: "#222",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  uploadText: {
    color: "#fff",
    fontSize: 40,
    opacity: 0.8,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: "#fff",
    fontWeight: "600",
  },
  form: {
    gap: 12,
  },
  input: {
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  textInput: {
    color: "#fff",
    fontSize: 14,
  },
  picker: {
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    backgroundColor: "#ff6b33",
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff6b33",
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
