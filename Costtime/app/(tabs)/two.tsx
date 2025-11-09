import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CadastroScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = () => {
    console.log({ email, senha, confirmaSenha });
  };

  return (
    <LinearGradient colors={['#E65729','#000000', '#343434ff']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.screen}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>CostTime</Text>
          </View>

          <Text style={styles.title}>Complete seu perfil</Text>
          <Text style={styles.subtitle}>Apenas alguns detalhes para começar</Text>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Coloque seu email"
              placeholderTextColor="#aaa"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Crie uma senha forte"
              placeholderTextColor="#aaa"
              style={styles.input}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Repita sua senha"
              placeholderTextColor="#aaa"
              style={styles.input}
              secureTextEntry
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  screen: {
    width: 360,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
  },
  logo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 10,
  },
  subtitle: {
    color: '#9a9a9a',
    fontSize: 13,
    marginBottom: 14,
  },
  inputBox: {
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  input: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#ff6b33',
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#ff6b33',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});