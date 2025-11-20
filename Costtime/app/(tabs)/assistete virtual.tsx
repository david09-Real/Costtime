import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

export default function AssistenteScreen() {
  const [message, setMessage] = useState("");//Mensagem digitada pelo usuário
  const [messages, setMessages] = useState<string[]>([]); //Lista de mensagens

  const sendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assistente</Text>
        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Área de mensagens */}
      <View style={styles.chatArea}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.userBubble}>
            <Text style={styles.userText}>{msg}</Text>
          </View>
        ))}
      </View>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
            placeholderTextColor="#aaa"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Menu de ícones */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bookmark-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="bolt" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtonSelected}>
            <Ionicons name="cloud-upload-outline" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bar-chart-2" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  header: {
    backgroundColor: "#e45426",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  chatArea: {
    flex: 1,
    padding: 12,
  },
  userBubble: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginVertical: 4,
  },
  userText: {
    color: "#fff",
    fontSize: 15,
  },
  bottomBar: {
    paddingVertical: 8,
    backgroundColor: "#111",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    height: 40,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#d9d9d9",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonSelected: {
    backgroundColor: "#e45426",
    width: 45,
    height: 45,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
});
