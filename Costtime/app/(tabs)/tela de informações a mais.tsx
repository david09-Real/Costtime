import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PerfilScreen() {
  const [emprego, setEmprego] = useState('');
  const [salario, setSalario] = useState('');
  const [horas, setHoras] = useState('');
  const [escala, setEscala] = useState('');
  const [metaSemanal, setMetaSemanal] = useState('');
  const [metaMensal, setMetaMensal] = useState('');

  const handleSubmit = () => {
    console.log({
      emprego,
      salario,
      horas,
      escala,
      metaSemanal,
      metaMensal,
    });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E65729', '#000000', '#343434']}
        locations={[0, 0.3, 1]}
        style={styles.linear}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Complete seu perfil!</Text>
          <Text style={styles.subtitle}>Preencha os seus dados</Text>

          {/* Campo Emprego/Função */}
          <Text style={styles.label}>Emprego/Função</Text>
          <TextInput
            value={emprego}
            onChangeText={setEmprego}
            placeholder="Coloque seu Emprego/Função"
            placeholderTextColor="#aaa"
            style={styles.textInput}
          />

          {/* Campo Salário */}
          <Text style={styles.label}>Salário</Text>
          <TextInput
            value={salario}
            onChangeText={setSalario}
            placeholder="Coloque seu salário"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            style={styles.textInput}
          />

          {/* Campo Tempo de trabalho diário */}
          <Text style={styles.label}>Tempo de trabalho diário (horas)</Text>
          <TextInput
            value={horas}
            onChangeText={setHoras}
            placeholder="Coloque quantas horas você trabalha por dia"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            style={styles.textInput}
          />

          {/* Campo Escala */}
          <Text style={styles.label}>Escala</Text>
          <TextInput
            value={escala}
            onChangeText={setEscala}
            placeholder="Coloque sua escala"
            placeholderTextColor="#aaa"
            style={styles.textInput}
          />

          {/* Campo Meta Semanal */}
          <Text style={styles.label}>Meta Semanal</Text>
          <TextInput
            value={metaSemanal}
            onChangeText={setMetaSemanal}
            placeholder="Quanto você quer gastar em uma semana"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            style={styles.textInput}
          />

          {/* Campo Meta Mensal */}
          <Text style={styles.label}>Meta Mensal</Text>
          <TextInput
            value={metaMensal}
            onChangeText={setMetaMensal}
            placeholder="Quanto você quer gastar em um mês"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            style={styles.textInput}
          />

          {/* Botão Continuar */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  linear: { flex: 1 },
  scrollContent: {
    paddingVertical: 60,
    paddingHorizontal: 25,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 20,
  },

  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 5,
  },

  textInput: {
    width: '100%',
    height: 45,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#fff',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#E65729',
    width: '100%',
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
